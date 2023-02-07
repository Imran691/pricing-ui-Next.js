// In HTML to show two divs side by side we will use a propety display="flex" in style. and further flexDirection="column" to reverse.
// jusifyContent="space-between" to give space between the divs
// jusifyContent="space-around" to give space around the divs
// jusifyContent="space-between" to move divs to right-end of the display

// alignItems="center" to move children divs in center of parent div

"use client";
import { Heading } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";

export default function Practice() {
  return <ChakraProvider>
    <Heading as="h4" color = "red" fontSize={"50 ps"} fontWeight= "thin">Hello World</Heading>
    </ChakraProvider>;
}