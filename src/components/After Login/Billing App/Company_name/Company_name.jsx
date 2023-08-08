import React, { useEffect, useState } from 'react'
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
    Textarea,

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import edit from "../../../assets/edit.svg"
import search3 from "../../../assets/search3.png"
import ylogo from "../../../assets/ylogo.jpg"
import search2 from "../../../assets/search2.png"
import user from "../../../assets/user.svg"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../firebase';


const Company_name = (ppx) => {
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

    const [bussinessName, setBussinessName] = useState("");
    const [gstinNumber, setGstinNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [signature, setSignature] = useState("");
    const [state, setState] = useState("");
    const [bussinessAddress, setBussinessAddress] = useState("");
    const [bussinessCategory, setBussinessCategory] = useState("");

    
    const handleImages = () => {
        let count = 0;
        

        for (let i = 0; i < images.length; i++) {
            const storageRef = ref(storage, `/files/${images[i].name}`)
            const uploadTask = uploadBytesResumable(storageRef, images[i]);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                },
                (err) => console.log(err),
                async () => {
                    await getDownloadURL(uploadTask.snapshot.ref).then((url) => {

                        count++

                        if (count == images.length) {
                            setImageURL(url)
                        }

                    })
                }
            )
        }
    }

    console.log(imageURL)

    useEffect(() => {
        handleImages()
    }, [images])
    const Company = {
        name: "Company Name"
    }
    return (
        <> <Box
        // position={"sticky"} top="132px" zIndex={"10000"}
        >
            <Flex gap={"20px"} justifyContent={"right"} height={"60px"} p={"10px"}
                bg={"white"}

            >
                <Link to={""}>
                    <Button bg={"red.500"} color={"white"}>
                        <Text fontSize={{ base: "10px", md: "12px", lg: "15px" }}
                            color={"black"} fontWeight={"bold"} m={"auto"}> ADD SALE + </Text></Button>
                </Link>
                <Link to={""}>
                    <Button bg={"blue.500"} color={"white"}><Text fontSize={{ base: "10px", md: "12px", lg: "15px" }}
                        color={"black"} fontWeight={"bold"} m={"auto"}>ADD PURCHASE +</Text></Button>
                </Link>
                {/* <Link to="/Inventiry_Home">
                    <Button bg={"blue.500"} color={"white"}><Text fontSize={{ base: "8px", md: "12px", lg: "15px" }}
                        color={"black"} fontWeight={"bold"} m={"auto"}>ADD INVOICE +</Text></Button>
                </Link> */}

            </Flex>
            <Flex margin={"auto"} textAlign={"center"} backgroundColor="rgb(255,185,29)" color={"white"}
                padding={"10px"} alignItems={"center"}
                boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" >
                <HStack style={{ margin: "10px" }} height="100%">
                    {/* <Input type="search" placeholder="search" value={""} onChange={""} marginRight={"10px"} /> */}
                    {/* <Button style={{ backgroundColor: "orange" }} onClick={() => ""}>Search</Button> */}
                    <Image src={search2} width="25px" height="25px" borderRadius={"50%"}
                        onClick={handleClick}

                    ></Image>
                </HStack>

                <Heading fontSize={{ base: "12px", md: "14px", lg: "20px" }} margin={"auto"} cursor={"pointer"} onClick={onOpen}>
                    <Image src={ylogo} width="25px" height="25px" borderRadius={"50%"}></Image>

                    {Company.name}

                </Heading>
                <HStack>
                    <HStack justifySelf={"end"} cursor={"pointer"} onClick={onOpen}>
                        <Image src={edit} backgroundColor={"white"} width="20px" borderRadius={"50%"}></Image>
                        <Text color={"white"} display={{ lg: "flex", md: "flex", base: "none" }}>Edit</Text>

                    </HStack>
                    <Link to={"/Profile"}>
                        <HStack justifySelf={"end"} cursor={"pointer"} >
                            <Image src={user} backgroundColor={"white"} width="20px" borderRadius={"50%"}></Image>
                            <Text color={"white"} display={{ lg: "flex", md: "flex", base: "none" }}>Profile</Text>

                        </HStack>
                    </Link>
                </HStack>

            </Flex>
            {/* Search bar */}

            {isShown &&
                (<HStack height="100%" position="relative" background={"blackAlpha.800"}
                    padding={"20px"} color={"white"} >
                <Input type="search" placeholder="search" marginRight={"10px"} backgroundColor="rgb(255,185,29)" />
                    {/* <Button style={{ backgroundColor: "orange" }} onClick={() => ""}>Search</Button> */}
                    <Image src={search3} width="30px" height="30px" borderRadius={"10px"} backgroundColor={"orange"} ></Image>
                </HStack>)
            }
            {/* edit from */}

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                
            >
                <ModalOverlay />
                <ModalContent maxW="800px" >

                    <ModalHeader style={{
                        marginTop: "70px"
                    }}>Edit Firm</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={10}  >
                        <Box></Box>
                        <Select>
                            <option value="Company1">Company1</option>
                            <option value="Company1">Company2</option>
                            <option value="Company1">Company3</option>
                        
                        </Select>
                        <Link to={"/AddCompanyForm"}>
                            <Button m={"10px auto"} bg={"orange.300"}>Add New Company +</Button>
                        </Link>
                    </ModalBody>

                    <ModalFooter>
                        <Flex justifyContent={"space-between"} >

                            <Box>
                                <Button colorScheme='blue' mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </Box>
                        </Flex>
                    </ModalFooter>

                </ModalContent>

            </Modal>
        </Box>
        </>


    );
}



export default Company_name
