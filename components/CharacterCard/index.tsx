import { TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { GqlCharacter } from "../../generated/graphql";
import Wrapper from "../Wrapper";
import Image from "../Image";
import Text from "../Text";
import { useNavigation } from "@react-navigation/native";

interface CharacterCardProps {
  character: GqlCharacter;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const navigation = useNavigation() as any;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CharacterModal", {
          character,
        })
      }
    >
      <Wrapper
        borderRadius={3}
        borderColor="grey"
        borderWidth={1}
        marginBottom={4}
        width="100%"
        paddingBottom={10}
      >
        <Image
          source={{ uri: character.image as string }}
          style={{
            height: 100,
            width: "100%",
            borderRadius: 2,
          }}
        />
        <Wrapper paddingX={2}>
          <Text marginTop={2} fontWeight="500" fontSize={16}>
            {character.name}
          </Text>
          <Wrapper
            marginTop={2}
            paddingX={2}
            paddingY={1}
            alignSelf="flex-start"
            backgroundColor="purple"
            borderRadius={4}
          >
            <Text color="white">{character.species}</Text>
          </Wrapper>
          <Text marginTop={2}>{character.location?.name}</Text>
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default CharacterCard;
