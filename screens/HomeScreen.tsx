import { ActivityIndicator, TextInputProps } from "react-native";
import React, { FC, useState } from "react";
import { FlatGrid } from "react-native-super-grid";
import { SafeAreaView } from "react-native-safe-area-context";
import Wrapper from "../components/Wrapper";
import { GqlCharacter, useListCharacterQuery } from "../generated/graphql";
import CharacterCard from "../components/CharacterCard";
import styled from "@emotion/native";
import { border, BorderProps, space, SpaceProps } from "styled-system";
import useDebouncedSearch from "../hooks/useDebounce";

type StyledTextFieldProps = BorderProps & SpaceProps & TextInputProps;

const StyledTextField: FC<StyledTextFieldProps> = styled.TextInput`
  ${border}
  ${space}
`;

const HomeScreen = () => {
  const [characters, setCharacters] = useState({});
  const [page, setPage] = useState(1);
  const { searchText, text, setInputText } = useDebouncedSearch();
  const { isLoading, isFetching, refetch } = useListCharacterQuery(
    {
      page,
      filter: { name: searchText } as any,
    },
    {
      onSuccess: (data) => {
        const characterData = data.characters?.results as GqlCharacter[];
        const mappedCharacters = (
          data.characters?.results as GqlCharacter[]
        ).reduce(
          (resultMap, item) => ({
            ...resultMap,
            [item.id as string]: item,
          }),
          {}
        );
        if (searchText.length > 0) {
          setCharacters({ ...mappedCharacters });
        } else {
          setCharacters({
            ...characters,
            ...mappedCharacters,
          });
        }
      },
    }
  );

  return (
    <SafeAreaView>
      {Object.values(characters).length === 0 && isLoading ? (
        <Wrapper
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <ActivityIndicator size="large" />
        </Wrapper>
      ) : (
        <Wrapper marginTop={4}>
          <StyledTextField
            paddingY={2}
            paddingX={2}
            borderWidth={1}
            marginX={2}
            borderColor="grey"
            borderRadius={3}
            placeholder="Search for a character"
            value={text}
            onChangeText={setInputText}
          />
          <FlatGrid
            itemDimension={130}
            refreshing={isLoading || isFetching}
            onEndReached={() => setPage(page + 1)}
            onRefresh={() => refetch()}
            data={Object.values(characters) as GqlCharacter[]}
            renderItem={({ item }) => <CharacterCard character={item} />}
          />
        </Wrapper>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
