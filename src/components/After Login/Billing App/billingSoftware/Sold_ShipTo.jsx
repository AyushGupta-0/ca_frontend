import React from 'react';
import { Box, Flex, Heading, Select, Input, Textarea } from '@chakra-ui/react';

const Sold_ShipTo = () => {
  return (
    <Flex>
      {/* Box 1 */}
      <Box flex="1" p="2">
        <Flex alignItems="center" mb="1" justifyContent="space-between" height='50px'>
          <Heading size="xs" marginRight="1">
            Sold To:
          </Heading>
          <Select placeholder="Select customer" width="70%" fontSize="sm" size='sm' 
            mt='-10px'
          />
        </Flex>
        <Input placeholder="Customer Name" mb="1" size="sm" />
        <Textarea placeholder="Address" size="sm" />
      </Box>

      {/* Box 2 */}
      <Box flex="1" p="2" marginLeft="4">
        <Flex alignItems="center" mb="1" height='50px'>
          <Heading size="xs" marginRight="1">
            Ship To:
          </Heading>
        </Flex>
        <Input placeholder="Name" mb="1" size="sm" />
        <Textarea placeholder="Address" size="sm" />
      </Box>
    </Flex>
  );
}

export default Sold_ShipTo;
