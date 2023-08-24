import React from 'react';
import { Box, Flex, Heading, Select, Input, Textarea, Text } from '@chakra-ui/react';

const Sold_ShipTo = () => {
  return (
    <Flex>
      {/* Box 1 */}
      <Box flex="1" p="4">
        <Flex alignItems="center" mb="2" justifyContent='space-between'>
          <Heading size='sm' mr="1">
            Sold To:
          </Heading>
          <Select placeholder="Select customer" width='60%'/>
        </Flex>
        <Input placeholder="Customer Name" mb="2" />
        <Textarea placeholder="Address" />
      </Box>

      {/* Box 2 */}
      <Box flex="1" p="4" ml="4">
        <Flex alignItems="center" mb="2">
          <Heading size="sm" mr="1">
            Ship To:
          </Heading>
        </Flex>
        <Input placeholder="Name" mb="2" />
        <Textarea placeholder="Address" />
      </Box>
    </Flex>
  );
}

export default Sold_ShipTo;
