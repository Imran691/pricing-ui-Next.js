import React from 'react'
import { Box, Flex, Text, Heading, Button, HStack, Icon } from '@chakra-ui/react'

export default function Features() {
  return <Box maxW={"900px"} mx="auto" mt="25px">
    <Flex>
        <HStack>
        <Icon></Icon>
        <Text>30 days money back guarantee</Text>
        </HStack>

        <HStack>
        <Icon></Icon>
        <Text>No signup fees 100% hassle-free</Text>
        </HStack>

        <HStack>
        <Icon></Icon>
        <Text>No monthly subscription, pay once and for all</Text>
        </HStack>
    </Flex>
  </Box>
}
