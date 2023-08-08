import React, { useEffect, useState } from 'react'
import {
    Box, Button, Flex, FormControl, Image, Input, Text, VStack,


} from '@chakra-ui/react'
import { Link, useNavigate, useParams } from "react-router-dom";
import edit from "../../assets/edit.svg"
import "../styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../Store/Store';
import { SUCCESS_LOGOUT } from '../../../Redux/Singin/Signin.Type';
import { ProfileAction, ProfileActionUpdate } from '../../../Redux/Profile/Profile.Action';

const Profile = () => {
    const { profileData } = useSelector(store => store.Profile)
    console.log(profileData)
    const [form, setForm] = useState({...profileData})
    const { token } = useSelector(store => store.Signin);
    // const data = useSelector(store => store.Signin);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = []

    let { id } = useParams()
    
    // const user = profileData[0]
    console.log(form)
    id = profileData?._id;
    const handelLogOut = () => {

        if (token) {
            dispatch({ type: SUCCESS_LOGOUT })
            navigate("/")
        } else {
            navigate("/Login")
        }
    }
    useEffect(() => { dispatch(ProfileAction(token)); }, [])

    const handleUpdateChange = () => {
        dispatch(ProfileActionUpdate(token, id));
    }

    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
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

                <FormControl>
                    <label htmlFor="Username">
                        User Name
                        <Input type="text" name="userName" value={form.userName} onChange={handleChange}></Input>
                    </label>
                </FormControl>
                <FormControl>
                    <label htmlFor="fullName">
                        full Name
                        <Input type="text" name="fullName" value={profileData?.fullName} nChange={handleChange}></Input>
                    </label>
                </FormControl>
                <FormControl>
                    <label htmlFor="email">
                        Email
                        <Input type="email" name="email" value={form.email} nChange={handleChange}></Input>
                    </label>
                </FormControl>
                <FormControl>
                    <label htmlFor="phoneNumber">
                        PhoneNumber
                        <Input type="tel" name="phoneNumber" value={form.phoneNumber} nChange={handleChange}></Input>
                    </label>
                </FormControl>


                <Button m="20px auto" onClick={handleUpdateChange}>Update</Button>
            </Box>


        </Flex >
    )
}

export default Profile
