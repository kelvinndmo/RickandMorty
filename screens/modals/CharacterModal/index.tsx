import React from "react";
import Wrapper from "../../../components/Wrapper";
import Text from "../../../components/Text";
import { GqlCharacter, GqlEpisode } from "../../../generated/graphql";
import Image from "../../../components/Image";
import { FlatGrid } from "react-native-super-grid";

const CharacterModal = (props: any) => {
  const character = props.route.params.character as GqlCharacter;
  return (
    <Wrapper paddingY={3} paddingX={3}>
      <Text marginBottom={3} textAlign="center" fontWeight="600" fontSize={18}>
        {character.name}
      </Text>
      <Image
        source={{ uri: character.image as string }}
        style={{
          height: 250,
          width: "100%",
          borderRadius: 4,
        }}
      />
      <Wrapper flexDirection="row">
        <Wrapper
          paddingX={2}
          paddingY={1}
          backgroundColor="purple"
          alignSelf="flex-start"
          marginTop={4}
          borderRadius={10}
        >
          <Text color="white" fontSize={16}>
            {character.species}
          </Text>
        </Wrapper>
        <Wrapper
          paddingX={2}
          paddingY={1}
          backgroundColor="black"
          alignSelf="flex-start"
          marginTop={4}
          borderRadius={10}
          marginLeft={2}
        >
          <Text color="white" fontSize={16}>
            {character.gender}
          </Text>
        </Wrapper>
        <Wrapper
          paddingX={2}
          paddingY={1}
          backgroundColor="black"
          alignSelf="flex-start"
          marginTop={4}
          borderRadius={10}
          marginLeft={2}
        >
          <Text color="white" fontSize={16}>
            {character.status}
          </Text>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Text fontWeight="bold" marginTop={3} fontSize={18}>
          Episodes
        </Text>
        <FlatGrid
          itemDimension={130}
          data={character.episode as GqlEpisode[]}
          renderItem={({
            item,
            index,
          }: {
            item: GqlEpisode;
            index: number;
          }) => (
            <Text marginBottom={2}>
              {index + 1} . {item.name}
            </Text>
          )}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default CharacterModal;
