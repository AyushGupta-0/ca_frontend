import React from 'react'
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

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import remove from '../../../assets/remove.png'
import print4 from '../../../assets/print4.png'


const Parties = () => {
    const Company = {
        name: "Company Name"
    }
    const modal1 = useDisclosure()
    const Items = [
        {
            id: 1,
            Name: "name",
            email:"email@gmail.com",
            phone: 9878456321,
            ba: "ba",
            sa: "sa",
            GSTIN:"844545"
            
        }
    ]


    return (

        <>
            <Company_name company_name={Company.name} />
            <Flex >
                <Slidebar />
                <Box margin={"auto"} marginTop="20px" overflow={"hidden"} width="80%">
                    <Button backgroundColor="blue.400" margin={"10px"}
                        onClick={modal1.onOpen} px='4'>Add Parties +</Button>
                    <TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th isNumeric>Party Id</Th>
                                    <Th>Party Name</Th>
                                    <Th>GSTIN</Th>
                                    <Th isNumeric>Phone No.</Th>
                                    <Th isEmail>Email</Th>
                                    <Th >Billing Address</Th>
                                    <Th >Shipping Address</Th>
                                    {/* <Th isNumeric>Amount</Th> */}
                                    {/* <Th>Print</Th> */}
                                    <Th>Delete</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    Items.map((data) =>
                                        <Tr key={data.id}>
                                            <Td isNumeric>{data.id}</Td>
                                            <Td >{data.Name}</Td>
                                            <Td >{data.GSTIN}</Td>
                                            <Td isNumeric>{data.phone}</Td>
                                            <Td isEmail>{ data.email}</Td>
                                            <Td >{data.ba}</Td>
                                            <Td >{data.sa}</Td>
                                            {/* <Td><Image src={print4} width={"20px"} borderRadius={"50%"}></Image></Td> */}
                                            <Td><Image src={remove} width={"20px"} borderRadius={"50%"}></Image></Td>
                                        </Tr>
                                    )

                                }

                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>
                <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add New Item</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <FormControl margin={"10px"}>

                                <FormLabel>Item Name :</FormLabel>
                                <Input type="text" placeholder="Item Name" />
                            </FormControl>
                            <FormControl margin={"10px"}>

                                <FormLabel>Item Quantity :</FormLabel>
                                <Input type="number" placeholder="Item Quantity" />
                            </FormControl>
                            <FormControl margin={"10px"}>

                                <FormLabel>Item Price :</FormLabel>
                                <Input type="number" placeholder="Item Price" />
                            </FormControl>
                            <FormControl margin={"10px"}>

                                <FormLabel>Tax :</FormLabel>
                                <Input type="number" placeholder="Tax" />
                            </FormControl>
                            <FormControl margin={"10px"}>

                                <FormLabel>Total :</FormLabel>
                                <Input type="number" placeholder="Total" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={modal1.onClose}>
                                Close
                            </Button>
                            <Button colorScheme='green'>Add</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>

        </>
    )
}

export default Parties

