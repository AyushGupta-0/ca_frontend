import React from 'react'
import {
    Box, Flex, Image, Text, VStack,


} from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import edit from "../../assets/edit.svg"
import "../styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../Store/Store';
import { SUCCESS_LOGOUT } from '../../../Redux/Singin/Signin.Type';
const Profile = () => {
    const { token } = useSelector(store => store.Signin);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const user = {
        username: "Username",
        fullname: "Fullname",
        email: "user@gmail.com",
        phone: "9874563210",
        password: "*******"
    }
    const handelLogOut = () => {

        if (token) {
            dispatch({ type: SUCCESS_LOGOUT })
            navigate("/")
        } else {
            navigate("/Login")
        }
    }
    return (
        <Flex className="container" margin="auto" flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            fontSize={{ base: "12px", md: "13", lg: "15px" }}>
            <Box className="container" margin={"auto"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" width={{ base: "80%", md: "30%", lg: "20%" }} marginTop="10px" marginBottom="10px" borderRadius={"20px"}>
                <VStack height={"80%"} padding={"10px"} >
                    <Box cursor={"pointer"} backgroundColor={"orange"} width="90%" borderRadius={"10px"} >
                        <h3>Profile</h3>
                    </Box >
                    <Link to="/HomeDash" ><Box cursor={"pointer"} id='hb' >
                        <h3>Inventory Software</h3>
                    </Box>
                    </Link>
                </VStack>
                <Box cursor={"pointer"} justifyContent={"baseline"} color={"red"} id='hb' onClick={handelLogOut}>
                    <h3 justifySelf={"baseline"} >Log Out</h3>
                </Box>
            </Box >
            <Box className="container" margin={"auto"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" width={{ base: "80%", md: "50%", lg: "50%" }} height="400px" marginTop="10px" marginBottom="10px" padding={"20px"} fontSize={{ base: "12px", md: "13", lg: "15px" }} borderRadius={"10px"}>
                <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" height={"30px"} margin={"20px"} justifyContent={"center"} fontSize={{ base: "12px", md: "18", lg: "20px" }}>
                    <Text >Username : <span>{user.username} </span> </Text>

                </Box>
                <Flex boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" height={"30px"} margin={"20px"} justifyContent={"center"} fontSize={{ base: "12px", md: "18", lg: "20px" }}>
                    <Text >Full Name : <span>{user.fullname} </span> </Text>
                    <Image src={edit} width="15px" marginLeft={"10px"}></Image>
                </Flex>
                <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" height={"30px"} margin={"20px"} justifyContent={"center"} fontSize={{ base: "12px", md: "18", lg: "20px" }}>
                    <Text >Email : <span>{user.email} </span> </Text>

                </Box>

                <Flex boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" height={"30px"} margin={"20px"} justifyContent={"center"} fontSize={{ base: "12px", md: "18", lg: "20px" }}>
                    <Text>Phone No : <span>{user.phone} </span> </Text>

                    <Image src={edit} width="15px" marginLeft={"10px"}></Image>


                </Flex>
                <Flex boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" height={"30px"} margin={"20px"} justifyContent={"center"} fontSize={{ base: "12px", md: "18", lg: "20px" }}>
                    <Text >Password : <span>{user.password} </span> </Text>
                    <Image src={edit} width="15px" marginLeft={"10px"}></Image>
                </Flex>
            </Box>
        </Flex >
    )
}

export default Profile
