export type StringArrayExt = Array<string> & { [index: string]: string };

export type FontSizesProps = {
  extraSmall: string;
  smaller: string;
  small: string;
  medium: string;
  large: string;
  larger: string;
} & StringArrayExt;
