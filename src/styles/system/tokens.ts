export const pxToRem = (px: string | number) =>
  `${Number(px.toString().replace("px", "")) / 16}rem`;

export const remToPx = (rem: string | number) =>
  `${Number(rem.toString().replace("px", "")) * 16}rem`;
