import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";

export default function Features() {
  return (
    <Box maxW={"900px"} mx="auto" mt="25px" px={"50px"}>
      <Flex direction={{base:"column", lg:"row"}}>
        <HStack mb={"20px"}>
          <Icon as={Icon1}></Icon>
          <Text>30 days money back guarantee</Text>
        </HStack>

        <HStack mb={"20px"}>
          <Icon as={Icon2}></Icon>
          <Text>No signup fees 100% hassle-free</Text>
        </HStack>

        <HStack mb={"20px"}>
          <Icon as={Icon3}></Icon>
          <Text>No monthly subscription, pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
