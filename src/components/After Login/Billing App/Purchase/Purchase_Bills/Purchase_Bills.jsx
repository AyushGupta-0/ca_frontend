import React, { useState } from 'react'
import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListItem,
    ListIcon,
    OrderedList,

    UnorderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    useDisclosure,
    FormControl,
    FormLabel,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    InputLeftElement,

} from '@chakra-ui/react'
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name';
import { useNavigate } from 'react-router-dom';
import { FaPrint, FaSearch, FaShare } from 'react-icons/fa';

const dummyPurchaseData = [
    {
        partyName: 'Party A',
        date: '2023-08-28',
        totalAmount: 1000,
        dueAmount: 200,
    },
    {
        partyName: 'Party B',
        date: '2023-08-28',
        totalAmount: 1000,
        dueAmount: 200,
    },
    {
        partyName: 'Party C',
        date: '2023-08-28',
        totalAmount: 1000,
        dueAmount: 200,
    },
    {
        partyName: 'Party D',
        date: '2023-08-28',
        totalAmount: 1000,
        dueAmount: 200,
    },
    {
        partyName: 'Party E',
        date: '2023-08-28',
        totalAmount: 1000,
        dueAmount: 200,
    }
];

const CategoryExpense = [
    {
        description:'Petrol',
        amount:10
    },
    {
        description:'Tea',
        amount:40
    },
    {
        description:'Electronics',
        amount:400
    },
    {
        description:'Decor',
        amount:40
    },
    {
        description:'Books',
        amount:30
    }
]

const Purchase_Bills = () => {
        const [searchQuery, setSearchQuery] = useState('');

        const navigate = useNavigate();
        const Company = {
            name: "Company Name"
        }
        
        const filteredData = dummyPurchaseData.filter((data)=>
                data.partyName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        
        return (
            <>
                <Company_name company_name={Company.name} />
                <Flex >
                    <Slidebar />
                    <Box flex='1' margin='15px'>
                        <Flex p='4'justifyContent='space-between'>
                            <Heading size='md'>Purchase List</Heading>
                            <Button colorScheme='red' onClick={()=>navigate('/add-purchase')}>Add Purchase + </Button>
                        </Flex>
                        <TableContainer marginX='15px' boxShadow='md'
                        >
                            <Flex justifyContent='space-between' marginX='15px' my='1'>
                                <InputGroup width='40%'
                                    value={searchQuery}
                                    onChange={(e)=>setSearchQuery(e.target.value)}
                                    placeholder='Search Party'
                                >
                                    <Input size='sm'/>
                                    <InputLeftElement mt='-1'>
                                        <FaSearch/>
                                    </InputLeftElement>
                                </InputGroup>
                                <Flex justifyContent='flex-end' ml='4'>
                                    <Text mr='2'>Total Purchase : </Text>
                                    <Text color='blue'>₹ 1000</Text>
                                </Flex>
                            </Flex>
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th style={{border:'0.1px solid lightgray'}}>Party Name</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Date</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Total Amount</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Due Amount</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Actions</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {filteredData.map((data)=>(
                                    <Tr>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            {data.partyName}
                                        </Td>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            {data.date}
                                        </Td>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            ₹ {data.totalAmount}
                                        </Td>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            ₹ {data.dueAmount}
                                        </Td>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            <Flex gap='8px'>
                                                <FaShare/>
                                                <FaPrint/>
                                            </Flex>
                                        </Td>
                                    </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    
                </Flex>

            </>
        )
    }

export default Purchase_Bills