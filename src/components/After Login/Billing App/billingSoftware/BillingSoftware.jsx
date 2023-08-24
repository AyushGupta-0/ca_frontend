import React, { useState } from 'react'
import Slidebar from '../Slidebar/Slidebar'
import { Box, Flex, IconButton, Input, Text } from '@chakra-ui/react'
import Company_name from '../Company_name/Company_name'
import Sold_ShipTo from './Sold_ShipTo'
import Invoice from './Invoice'
import ItemsTable from './ItemsTable'
import TableOptions from './TableOptions'
import { FaCalculator } from 'react-icons/fa'


const Company = {
    name: "Company Name"
}

const BillingSoftware = () => {
  return (
    <>
        <Company_name company_name={Company.name} />
        <Flex>
            <Slidebar/>
            <Box flex='1' flexDirection='column' p='2'>
                <Flex justifyContent='space-between'>
                    <Flex width="60%" flexDirection="column" border='1px solid gray'>
                        <Sold_ShipTo />
                        <Flex direction="column">
                            <Flex justifyContent="space-between">
                                <Flex width="100%">
                                    <Text width="100px">Customer Email</Text>
                                    <Input
                                        flex="1"
                                        ml="2"
                                        size="sm"
                                        placeholder="customer email"
                                        mr='2'
                                    />
                                </Flex>
                                <Flex alignItems="center">
                                    <IconButton
                                        icon={<FaCalculator size="1rem" />}
                                        aria-label="Open Calculator"
                                        size="sm"
                                        variant='none'
                                        colorScheme="gray"
                                        mb='1'
                                    />
                                    <Text ml="2" fontSize="sm">
                                        Calculator
                                    </Text>
                                </Flex>
                            </Flex>
                        <TableOptions />
                        </Flex>
                    </Flex>
                    <Box width="40%" border={'1px solid gray'}>
                        <Invoice/>
                    </Box>
                </Flex>
                <ItemsTable/>
            </Box>
        </Flex>
    </>
  )
}

export default BillingSoftware