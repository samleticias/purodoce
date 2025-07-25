import { extendTheme } from "@chakra-ui/react";

const colors = {
  backgroundColor: {
    500: "#e6e6e6"
  },
  primary: "#f55e61",
  red: {
    200: "#ffe5ec",
    300: "#ffc2d1",
    400: "#ffb3c6",
  },
  white: {
    500: "#FFFFFF",
  }
}

export const theme = extendTheme({ colors });
