import React, { useState } from 'react'
import Slidebar from '../Slidebar/Slidebar'
import { Box, Button, Flex, IconButton, Input, Text } from '@chakra-ui/react'
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
            <Box flex='1' flexDirection='column' p='1'>
                {/* basic details and invoice */}
                <Flex justifyContent='space-between'>
                    <Flex width="60%" 
                    flexDirection="column" 
                    p='2'
                    margin= '15px'
                    border= '0.1px solid lightgray'
                    boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    >
                        <Sold_ShipTo/>
                        <Flex direction="column" mt='2' p='2'>
                            <Flex justifyContent='space-between' p='2'>
                                <Flex align='left' mr='4'>
                                    <Text textAlign='left' fontWeight='semibold' mr='2'>Customer Email: </Text>
                                    <Input size='sm' width='250px' placeholder='Enter customer email'/>
                                </Flex>
                                <Button
                                    colorScheme="gray"
                                    leftIcon={<FaCalculator />}
                                    variant="outline"
                                    size="sm"
                                >
                                    <Flex alignItems="center">
                                        <Text ml="2" fontSize="sm" mt='4'>
                                            Calculator
                                        </Text>
                                    </Flex>
                                </Button>
                            </Flex>
                            <TableOptions />
                        </Flex>
                    </Flex>
                    {/* Invoice */}
                    <Box width="40%"
                        p='2'
                        margin= '15px'
                        border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    >
                        <Invoice/>
                    </Box>
                </Flex>
                {/* table */}
                <ItemsTable/>

                {/* below table */}
                <Flex>
                    <Flex p='4'
                        height='90%'
                        direction='column'
                        justifyContent='left'
                        margin= '15px'
                        width='60%'
                        marginRight='auto'
                        border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    >
                        <Flex justifyContent='space-around'>
                            <Flex>
                                <Text fontSize='md' fontWeight='semibold' mr='2'>Paid Amount : </Text>
                                <Text fontSize='md'>5000 ₹</Text>
                            </Flex>
                            <Flex>
                                <Text fontSize='md' fontWeight='semibold' mr='2'>Due Amount : </Text>
                                <Text fontSize='md'>3000 ₹</Text>
                            </Flex>
                        </Flex>
                        <Flex justifyContent='space-between' alignItems='flex-end'>
                            <Button width='30%' outline='none'>Close</Button>
                            <Button width='30%' outline='none'>Save</Button>
                            <Button width='30%' outline='none'>Print</Button>
                        </Flex>
                    </Flex>
                    <Flex pt='4' px='2'
                    justifyContent='right'
                    margin= '15px'
                    width='32%'
                    marginLeft='auto'
                    border= '0.1px solid lightgray'
                    boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    >   
                        <Flex direction='column'>
                            <Flex mb="2">
                                <Text flex="0 0 120px"
                                    alignItem='left'
                                >Sub Total : </Text>
                                <Input flex="1" ml="2" size="sm" />
                            </Flex>
                            <Flex mb="2">
                                <Text flex="0 0 120px">Discount : </Text>
                                <Input flex="1" ml="2" size="sm" />
                            </Flex>
                            <Flex mb="2">
                                <Text flex="0 0 120px">Final Amount : </Text>
                                <Input flex="1" ml="2" size="sm" />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </>
  )
}

export default BillingSoftware