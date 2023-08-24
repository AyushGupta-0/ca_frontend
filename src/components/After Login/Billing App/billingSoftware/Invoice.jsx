import React from 'react';
import { Box, Heading, Input, Flex, Text, Select } from '@chakra-ui/react';

const Invoice = () => {
  return (
    <Box p="2">
      <Heading size="md" mb="4">
        INVOICE
      </Heading>
      <Flex mb="2">
        <Text flex="0 0 120px">Invoice No:</Text>
        <Input flex="1" ml="2" size="sm" />
      </Flex>
      <Flex mb="2">
        <Text flex="0 0 120px">Date:</Text>
        <Input type="date" flex="1" ml="2" size="sm" />
      </Flex>
      <Flex mb="2">
        <Text flex="0 0 120px">Payment Mode:</Text>
        <Select placeholder="Mode" size="sm" flex="1" />
      </Flex>
      <Flex mb="2">
        <Text flex="0 0 120px">Tax:</Text>
        <Input flex="1" size="sm" />
      </Flex>
      <Flex mb="2">
        <Text flex="0 0 120px">GST:</Text>
        <Input flex="1" size="sm" />
      </Flex>
      <Flex mb="2">
        <Text flex="0 0 120px">Due Date:</Text>
        <Input type="date" flex="1" ml="2" size="sm" />
      </Flex>
    </Box>
  );
};

export default Invoice;