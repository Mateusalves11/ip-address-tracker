import styled from "styled-components";
import { typography, color, space } from "styled-system";

import { Props as TextProps } from "./types";

export const TextBase = styled.p<TextProps>`
  ${typography};
  ${color};
  ${space};
  text-decoration: ${({ textDecoration }) => textDecoration};
  word-break: break-all;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

TextBase.defaultProps = {
  fontWeight: 400,
};
