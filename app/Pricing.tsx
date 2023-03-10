// Here we have to create two boxes. And we will wrap those boxes in a box.
// Wrapp child boxex in <Flex> to display side by side

// SVG stands for Scalabe Vector Image
// <HStacK> tag to horizontally stack icon & text.

// To center the box, we will use proprty mx="auto": Here mx stands for margin and x for both left and right.
// And we will give right width to container box.
// We will use maxW property instead of width to make it responsive to different screen sizes.

// borderRadius property used to round the corners of the box.
// overFlow

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import CheckMarkIcon from "./icons/CheckMarkIcon";

export default function Pricing() {
  return (
    <Box
      maxW={"950px"}
      mx={{base: "20px", lg:"auto"}}
    //   ml={{base:"20px". lg:"auto"}}
    //   mr={{base:"20px". lg:"auto"}}
      mt={"-150px"}
      bg="white"
      borderRadius={"16px"}
      overflow="hidden"
      boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"}
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg="#cbb8ee" p="60px" textAlign={"center"}>
          <Text fontSize={"24px"} fontWeight="bold">
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text>billed just once</Text>
          <Button mt="20px" w="300px" color="white" bg="#805AD5">
            Get Started
          </Button>
        </Box>

        <Box pt="50px" pl="25px" pr="50x">
          <Text mb="10px">
            Access these feaures when you get this pricing package for your
            business
          </Text>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
