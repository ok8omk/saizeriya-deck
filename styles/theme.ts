import { createTheme } from "@mui/material/styles";
import {
  GREEN_COLOR,
  LIGHT_GREEN_COLOR,
  DARK_GREEN_COLOR,
  GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  DARK_GRAY_COLOR,
  WHITE_COLOR,
} from "styles/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: GREEN_COLOR,
      light: LIGHT_GREEN_COLOR,
      dark: DARK_GREEN_COLOR,
      contrastText: WHITE_COLOR,
    },
    secondary: {
      main: GRAY_COLOR,
      light: LIGHT_GRAY_COLOR,
      dark: DARK_GRAY_COLOR,
      contrastText: WHITE_COLOR,
    },
  },
});
