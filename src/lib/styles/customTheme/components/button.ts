import type { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    borderRadius: "10px",
    color: "white",
  },
};

export default Button;
