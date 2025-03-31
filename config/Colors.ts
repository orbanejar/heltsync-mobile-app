export const Colors = {
  primary: "#05429a",
  secondary: "#00a1df",
  aliceBlue: "#f2f7ff",

  white: "#ffffff",
  black: "#000000",
  grey: "#808080",
  lightGrey: "#f0f0f0",
  darkGrey: "#404040",
} as const;

export type ColorType = keyof typeof Colors;