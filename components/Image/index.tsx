import styled from "@emotion/native";
import React, { FC } from "react";
import { ImageProps } from "react-native";
import {
  space,
  flex,
  FlexProps,
  SpaceProps,
  size,
  SizeProps,
} from "styled-system";

type CustomImageProps = FlexProps & SizeProps & SpaceProps & ImageProps;

const Image: FC<CustomImageProps> = styled.Image`
  ${space}
  ${flex}
${size}
`;

export default Image;
