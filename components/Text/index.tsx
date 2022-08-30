import styled from "@emotion/native";
import React, { FC } from "react";
import {
  color,
  size,
  SizeProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  ColorProps,
  ShadowProps,
} from "styled-system";

type TextProps = TypographyProps & SizeProps & SpaceProps & ColorProps;

const Text: FC<TextProps> = styled.Text`
  ${typography}
  ${size}
${space}
${color}
`;

export default Text;
