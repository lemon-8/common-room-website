import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    Button,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "secondary.900",
        color: "white",
        textAlign: "center",
      },
    },
  },
});

export default customTheme;
