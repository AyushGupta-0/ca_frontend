import { Box, Flex, FormControl, FormLabel, Input, Select, Textarea, useDisclosure, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const AddCompanyForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isShown, setIsShown] = useState(false);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    const [moreDetails, setMoreDetails] = useState(false);

    const [images, setImages] = useState([]);

    const [imageURL, setImageURL] = useState("");
    return (
        <>
            {/* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */}
            <Box className='container' width={"80%"} boxShadow={"rgba(20,20,20,0.8) 0px 7px 29px 0px "} margin={"100px auto"} padding="20px" borderRadius={"10px"}>
                <FormControl mt={4}>
                    <FormLabel>Logo</FormLabel>

                    <Input type="file" onChange={(e) => setImages(e.target.files)} />
                </FormControl>
                <FormControl>
                    <FormLabel>Business Name</FormLabel>
                    <Input ref={initialRef} placeholder='Business Name' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>GSTIN</FormLabel>
                    <Input placeholder='GSTIN' />
                </FormControl>
                <FormControl>
                    <FormLabel>Phone No.</FormLabel>
                    <Input ref={initialRef} placeholder='Phone No.' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email' />
                </FormControl>

                <Box alignSelf={"flex-start"}>
                    <Button variant={"link"} onClick={() => setMoreDetails(!moreDetails)}>{moreDetails ? <>Business Details</> : <>More Information </>}</Button>
                </Box>
                {moreDetails ? <>
                    <Flex gap={"20px"}>
                        <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                            <Textarea placeholder='Bissiness Address' />
                            <Input placeholder='Pincode' />
                            <Select placeholder='State' variant='flushed'>
                                <option>None</option>
                                <option>State 1</option>
                                <option>State 2</option>
                                <option>State 3</option>
                                <option>State 4</option>
                                <option>State 5</option>
                            </Select>
                            <Input placeholder='Bussiness Description' />
                        </Box>
                        <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={"22.7px"}>
                            <Select placeholder='Bussiness Type' variant='flushed'>
                                <option value="None">None</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Wholesaler">Wholesaler</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Manufacturer">Manufacturer</option>
                                <option value="Services">Services</option>
                                <option value="Other">Other</option>
                            </Select>
                            <Input placeholder='Bussiness Category' />
                            <Box>
                                <FormLabel>Signature</FormLabel>
                                <Input type='file' placeholder='Add Signature' />
                            </Box>
                            <Input placeholder='Bussiness Registration Type' />
                        </Box>
                    </Flex>
                </> : ""}
                    <Link to={"/HomeDash"}>
                    <Button bg={"green.300"} color={"whitesmoke"} m="10px" width={"80%"}>Save</Button>
                </Link>
            </Box>

        </>
    )
}

export default AddCompanyForm
