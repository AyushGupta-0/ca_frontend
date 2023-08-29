import { Box, Text, Flex, Link, Table, Thead, Tbody, Tr, Th, Td, Icon, TableContainer, TableCaption, Heading, Divider, Select, Input, Textarea, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Company_name from '../../Company_name/Company_name';
import Slidebar from '../../Slidebar/Slidebar';


const AddPurchaseOrder = () => {
    const [rows, setRows] = useState([{id:1}]);
    const navigate = useNavigate();
    const Company = {
        name: "Company Name",
    };
    const addRow = () => {
      const newRow = {id: rows.length + 1}
      setRows([...rows, newRow]);
    }
    const deleteRow = (id) => {
      const updatedRows = rows.filter(row => row.id !== id);
      setRows(updatedRows)
    }

  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box bg="white" py="4" px="6" minH="80vh" flex="1" boxShadow="md">
        {/* top box */}
          <Flex margin='15px' justifyContent='space-between'
          p='4'
          boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
          >
            <Heading size='md' color='gray.500'> Add Purchase Order </Heading>
            <Flex>
                <Select
                    rightIcon={<ChevronDownIcon />}
                    placeholder='Order No.'
                    size='sm'
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </Select>
                <Input
                    ml='4'
                    type='date'
                    placeholder='Select date'
                    size='sm'
                />
            </Flex>
          </Flex>

        {/* Mid */}
        <Box margin='15px' mt='4' p='2'
          boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        >
            <Flex justifyContent='space-between'>
                <Flex margin='15px' justifyContent='center' width='40%'>
                    <Text mr='4' mt='1'> Party Name : </Text>
                    <Input placeholder='Enter Party Name' size='sm' width='60%'/>
                </Flex>
                <Flex margin='15px' justifyContent='center' width='40%'>
                    <Text mr='4' mt='1'> Due Date : </Text>
                    <Input placeholder='Due Date' size='sm' type='date' width='45%'/>
                </Flex>
            </Flex>
            <Divider/>
            <Flex justifyContent='space-between' margin='15px'>
              <Heading size='sm'> Add Items </Heading>
              <Button onClick={addRow} colorScheme='teal' size='sm' title='add row'>
                + New Item 
              </Button>
            </Flex>
            <Table>
              <Thead>
                <Tr>
                  <Th style={{border:'1px solid gray'}}>ID</Th>
                  <Th style={{border:'1px solid gray'}}>Item Name</Th>
                  <Th style={{border:'1px solid gray'}}>Qty</Th>
                  <Th style={{border:'1px solid gray'}}>Rate</Th>
                  <Th style={{border:'1px solid gray'}}>Amount</Th>
                  <Th style={{border:'1px solid gray'}}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {rows.map((row)=>
                  <Tr key={row.id}>
                    <Td style={{border:'1px solid gray'}}>{row.id}</Td>
                    <Td style={{border:'1px solid gray'}}>
                      <Input variant='unstyled' placeholder='Item Name'/>
                    </Td>
                    <Td style={{border:'1px solid gray'}}>
                      <Input variant='unstyled' placeholder='Qty'/>
                    </Td>
                    <Td style={{border:'1px solid gray'}}>
                      <Input variant='unstyled' placeholder='Enter Rate'/>
                    </Td>
                    <Td style={{border:'1px solid gray'}}>
                      <Input variant='unstyled' placeholder='Enter Amount'/>
                    </Td>
                    <Td style={{border:'1px solid gray'}}>
                      <FaTrash onClick={()=>deleteRow(row.id)}/>
                    </Td>
                </Tr>)}
              </Tbody>
            </Table>
            <Flex justifyContent='flex-end' margin='15px'>
              <Text mr='2'> Total Amount (₹): </Text>
              <Text fontSize='md' color='blue'> 0 </Text>
            </Flex>
        </Box>
        {/* Buttons */}
        <Flex margin='30px'>
            <Button mr='4' size='md'>Save & New</Button>
            <Button mr='4' size='md'>Save</Button>
        </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default AddPurchaseOrder;
