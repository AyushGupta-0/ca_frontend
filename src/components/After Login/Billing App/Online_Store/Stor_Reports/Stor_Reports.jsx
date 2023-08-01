
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

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name'
import Online_Store from "../Online_Store"
const Stor_Reports
    = () => {

        const Company = {
            name: "Company Name"
        }
        return (

            <>
                {/* <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />

                </Flex> */}
                <Online_Store/>

            </>
        )
    }




export default Stor_Reports
