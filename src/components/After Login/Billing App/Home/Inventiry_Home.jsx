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
const Inventiry_Home = () => {
    const Company = {
        name: "Company Name"
    }
    const current = new Date();
    // const date = current;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const modal1 = useDisclosure()
    const [size, setSize] = React.useState('md')

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const Items = [
        {
            id: 1,
            Name: "name",
            quantity: 10,
            price: 1000,
            tax: 0,
            total: 1000,
        }
    ]

    return (

        <>
            {/* <Company_name company_name={Company.name} /> */}

            <Flex >

                <Slidebar />
                <Box padding={"10px"} margin={"auto"} marginTop={"30px"}
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" overflow={"hidden"} marginBottom={"30px"}>
                    <Wrap >
                        <Heading fontSize={"12px"} textAlign={"left"}>
                            Enter details to make your first Sale 🚀
                        </Heading>
                        <Heading fontSize={"10px"} fontWeight={"medium"} textAlign={"left"}>
                            First sale is made in less than a minute
                        </Heading>
                    </Wrap>
                    <Box >
                        <FormControl>

                            <FormLabel> Invoice Details :</FormLabel>

                        </FormControl>
                        <Wrap>

                            <FormControl margin={"10px"}>

                                <FormLabel>Invoice Number :</FormLabel>
                                <Input type="number" placeholder="Invoice Number" />
                            </FormControl>

                            <FormControl margin={"10px"}>

                                <FormLabel>Invoice Date  :</FormLabel>
                                <Input type='date' value={current} />
                            </FormControl>

                            <FormControl margin={"10px"}>

                                <FormLabel>Bill To :</FormLabel>
                                <Input type="text" placeholder="Customer Name" />
                            </FormControl>
                        </Wrap>


                        <Box height={"50px"} border={"1px dashed orange"} margin={"10px"} cursor={"pointer"}
                            onClick={() => handleSizeClick()}>
                            <Text>Add Sample Item</Text>
                        </Box>
                        <Box>
                            <FormLabel>Invoice Calculation :</FormLabel>
                        </Box>
                        <Wrap>


                            <FormControl margin={"10px"}>

                                <FormLabel>Invoice Amount  :</FormLabel>
                                <Input type='number' placeholder='0.00' />
                            </FormControl>

                            <FormControl margin={"10px"}>

                                <FormLabel>Received Amount :</FormLabel>
                                <Input type='number' placeholder='0.00' />
                            </FormControl>
                        </Wrap>
                        <Wrap backgroundColor={"lightgreen"} borderRadius={"20px"} padding={"10px"} margin={"10px"}>
                            <FormControl>

                                <FormLabel>Balance Amount :</FormLabel>
                                <Input type='number' placeholder='0.00' />
                            </FormControl>

                        </Wrap>
                    </Box>
                    <Button bgColor='orange'>Create New Invoice</Button>
                </Box>

                <Modal onClose={onClose} size='full' isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Billed Item/s List</ModalHeader>
                        <Button backgroundColor="blue.400" width={"100px"} margin={"10px"}
                            onClick={modal1.onOpen}>Add +</Button>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Items table*/}

                            <TableContainer>
                                <Table size='sm'>
                                    <Thead>
                                        <Tr>
                                            <Th isNumeric>Invoice No</Th>
                                            <Th>Item Name</Th>
                                            <Th isNumeric>Quantity</Th>
                                            <Th isNumeric>Price/Unit <br /> With Out Tax</Th>
                                            <Th isNumeric>Tax</Th>
                                            <Th isNumeric>Amount</Th>
                                            <Th>Print</Th>
                                            <Th>Delete</Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        {
                                            Items.map((data) =>
                                                <Tr key={data.id}>
                                                    <Td isNumeric>{data.id}</Td>
                                                    <Td>{data.Name}</Td>
                                                    <Td isNumeric>{data.quantity}</Td>
                                                    <Td isNumeric>{data.price}</Td>
                                                    <Td isNumeric>{data.tax}</Td>
                                                    <Td isNumeric>{data.total}</Td>
                                                    <Td><Image src={print4} width={"20px"} borderRadius={"50%"}></Image></Td>
                                                    <Td><Image src={remove} width={"20px"} borderRadius={"50%"}></Image></Td>
                                                </Tr>
                                            )

                                        }
                                    </Tbody>

                                </Table>
                            </TableContainer>





                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} background={"blue.600"} marginRight={"10px"}>Save</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>


                {/* Add Item2 */}

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

export default Inventiry_Home
