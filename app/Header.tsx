
// In this page, every thing will treated as a box.
// We will use Chakra tag <Box> instead of HTML tag <div>

// paddingTop & marginTop attributes are used to give space to top of box. Here we use abbrevaiations "pt" and "pb". "p" will apply padding all around the Box.

// textAlign={{base:"left", md:"left", lg:"center"}}: base for mobile view, md for medium(tablet, laptop) devices, lg for large devices

"use client"
import React from 'react'
import { Box, Heading , Text} from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";


export default function Header() {
  return <ChakraProvider>
    <Box textAlign={{base:"left", md:"left", lg:"center"}} bg="#6B46C1" pt="90px" pb="250px" color="White" pl={"15px"}>
    <Heading pb="10px">Simple pricing for your business</Heading>
    <Text>Plans that are carefully crafted to suit your business</Text>
    </Box>
  </ChakraProvider>

}
