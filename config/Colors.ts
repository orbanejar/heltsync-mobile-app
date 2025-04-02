export const Colors = {
  primary: "#05429a",
  secondary: "#00a1df",
  aliceBlue: "#f2f7ff",

  white: "#ffffff",
  black: "#000000",
  gray: "#808080",
  lightGray: "#f0f0f0",
  darkGray: "#404040",

  platinum: "#e9e9e9",
  whiteSmoke: "#fbfbfb",
  brightSkyBlue: "#1ac2ea",
  silverGray: "#c8c8c8"
} as const;

export type ColorType = keyof typeof Colors;