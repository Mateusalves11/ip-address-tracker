import { CSSProperties } from "styled-components";
import { TypographyProps, ColorProps, SpaceProps } from "styled-system";

export type Props = React.HTMLAttributes<HTMLParagraphElement> &
  ColorProps &
  TypographyProps &
  SpaceProps & {
    fontWeight?: 400 | 700 | string;
    textDecoration?: CSSProperties["textDecoration"];
  };
