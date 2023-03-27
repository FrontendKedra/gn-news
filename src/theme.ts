import { IndexSingature } from "./common/interfaces/interface";

export interface Theme {
  color: IndexSingature;
  breakpoints: IndexSingature;
}

export const theme = {
  colors: {
    white: "#ffffff",
    black: "#252525",
    moonRaker: "#cad9f5",
    gray: "#e4e6f0",
    pattensBlue: "#d6e4ff",
    silver: "#cccccc",
    doveGray: "#8c8c8c",
    blue: "#0044CC",
    lightBlue: "#0055ff",
  },
  breakpoints: {
    small: "480px",
    medium: "730px",
    large: "992px",
    largest: "1200px",
  },
};
