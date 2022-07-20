import React, { FC } from "react";
import {
  color,
  ColorProps,
  SpaceProps,
  LayoutProps,
  space,
  layout,
  flex,
  FlexProps,
  PositionProps,
  position,
  BorderProps,
  BorderRadiusProps,
  borderRadius,
  border,
  FlexboxProps,
  flexbox,
} from "styled-system";
import styled from "@emotion/native";

type WrapperProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexProps &
  PositionProps &
  BorderProps &
  BorderRadiusProps &
  FlexboxProps;

const Wrapper: FC<WrapperProps> = styled.View`
  ${color}
  ${space}
  ${layout}
  ${flex}
  ${position}
  ${border}
  ${borderRadius}
  ${flexbox}
`;

export default Wrapper;
