import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "#b2e3f9",
    200: "#80d1f4",
    300: "#4ebeef",
    400: "#29b1ed",
    500: "#02a3ea",
    600: "#0096db",
    700: "#0083c7",
    800: "#0072b3",
    900: "#005392",
  },
  secondary: {
    100: "#f1f0f7",
    200: "#e7e5ed",
    300: "#d6d5dc",
    400: "#b2b0b7",
    500: "#929097",
    600: "#6a686f",
    700: "#56555b",
    800: "#38373c",
    900: "#18171c",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {
  blue: {
    100: "#b2e3f9",
    200: "#80d1f4",
    300: "#4ebeef",
    400: "#29b1ed",
    500: "#02a3ea",
    600: "#0096db",
    700: "#0083c7",
    800: "#0072b3",
    900: "#005392",
  },
};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
