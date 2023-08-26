import React, { useState } from 'react'
import Company_name from '../Company_name/Company_name'
import Slidebar from '../Slidebar/Slidebar'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'


const Company = {
    name: "Company Name"
}
const tableData = [
    {
        reportNo:'1',
        customerName:'aa',
        amount:50,
        balance:20,
        date:'25-08-2023'
    },
    {
        reportNo:'2',
        customerName:'bb',
        amount:40,
        balance:20,
        date:'23-08-2023'
    },
    {
        reportNo:'3',
        customerName:'cc',
        amount:40,
        balance:20,
        date:'22-08-2023'
    },
    {
        reportNo:'4',
        customerName:'zz',
        amount:70,
        balance:20,
        date:'21-08-2023'
    },
    
]

const SaleReports = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState(tableData);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setSearchData(tableData.filter((data)=>
            data.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    }

    const handleRowClick = (reportNo) => {
        navigate('/individual-report')
    }
  return (
    <>
        
                <Box Flex='1' padding='15px'
                >
                    <Heading size='md' mt='2'> Sale Reports</Heading>

                    <Flex justifyContent='space-between' alignItems='center'
                        margin='30px'
                        flexDirection={{base:'column', md:'row'}}
                    >
                        <Select
                            width='32%'
                            size='sm'
                            mr='2'
                            mt='-2'
                            rightIcon={<ChevronDownIcon />}
                            defaultValue='default'
                            placeholder="Select date"
                        >
                            <option>Today</option>
                            <option>This week</option>
                            <option>This Month</option>
                            <option>This Quarter</option>
                            <option>This Financial Year</option>
                            <option>Custom</option>
                        </Select>
                        <Flex>
                            <Input type='date' size='sm' mr='2'/>
                            <Text size='lg' mr='2'>to</Text>
                            <Input type='date' size='sm' mr='4'/>
                        </Flex>
                        <InputGroup mt='-2'>
                            <Input
                                placeholder="search..."
                                value={searchQuery}
                                onChange={handleSearch}
                                size='sm'
                                width='60%'
                                
                            />
                            <InputRightAddon size='sm' outline='none' height='32px' mr='-10'>
                                <SearchIcon color='black'/>
                            </InputRightAddon>
                        </InputGroup>
                        <Select
                            mt='-1'
                            ml='-10'
                            width='35%'
                            size='sm'
                            rightIcon={<ChevronDownIcon />}
                            defaultValue='default'
                            placeholder="Select Txns type & Parties "
                        >
                            <optgroup label='Txns Type'>
                                <option>Sale & Cr. Note</option>
                                <option>Sale</option>
                                <option>Credit Note</option>
                            </optgroup>
                            <optgroup label='Party'>
                                <option>aa</option>
                                <option>bb</option>
                                <option>cc</option>
                            </optgroup>
                        </Select>
                    </Flex>
                    <Flex>
                        <Box border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        ml='4'
                        height='80px'
                        width='100%'
                        p='2'
                        >
                            <Text>No of Txn</Text>
                            <Text fontSize='20px' mt='-2'>5</Text>
                        </Box>
                        <Box border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        ml='4'
                        height='80px'
                        width='100%'
                        p='2'
                        >
                            <Text>Total Sale</Text>
                            <Text fontSize='20px' mt='-2'>100 ₹</Text>
                        </Box>
                    <Box border= '0.1px solid lightgray'
                    boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    ml='4'
                    height='80px'
                    width='100%'
                    p='2'
                    >
                        <Text>Balance Due</Text>
                        <Text fontSize='20px' mt='-2'>90 ₹</Text>
                    </Box>
                    </Flex>
                    <TableContainer m='2' margin='15px'
                        border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    >
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th style={{border:'1px solid gray'}}>
                                        Report No
                                    </Th>
                                    <Th style={{border:'1px solid gray'}}>
                                        Customer Name
                                    </Th>
                                    <Th style={{border:'1px solid gray'}}>
                                        Amount
                                    </Th>
                                    <Th style={{border:'1px solid gray'}}>Balance</Th>
                                    <Th style={{border:'1px solid gray'}}>Date</Th>
                                    <Th style={{border:'1px solid gray'}}></Th>
                                    <Th style={{border:'1px solid gray'}}></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {tableData?.map((data)=>(
                                    <Tr onClick={()=>handleRowClick(data.reportNo)} style={{cursor:'pointer'}}
                                    >
                                        <Td style={{border:'1px solid gray'}}>
                                        {data.reportNo}</Td>
                                        <Td style={{border:'1px solid gray'}}>{data.customerName}</Td>
                                        <Td style={{border:'1px solid gray'}}>{data.amount} ₹</Td>
                                        <Td style={{border:'1px solid gray'}}>{data.balance} </Td>
                                        <Td style={{border:'1px solid gray'}}>{data.date}</Td>
                                        <Td style={{border:'1px solid gray'}}>Edit</Td>
                                        <Td style={{border:'1px solid gray'}}>Delete</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
    </>
  )
}

export default SaleReports