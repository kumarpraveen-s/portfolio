// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Open Sans', sans-serif`,
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
});

export default theme;
