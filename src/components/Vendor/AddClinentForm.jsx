// src/AddClientForm.js

import { Box, Button, FormControl, FormHelperText, Input, Label } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddClientForm = ({ onSubmit }) => {
    const [client, setClient] = useState({
        name: '',
        address: '',
        email: '',
        phone_number: '',
        business: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(client);
        setClient({
            name: '',
            address: '',
            email: '',
            phone_number: '',
            business: '',
        });
    };
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
    return (
        <div>
            <Link to={"/VendorAllClint"} >
                <Button bg={"blue.300"} m="20px auto">All Client +</Button>
            </Link>
            <h2>Add Client</h2>
            <Box width={"100%"} maxW={"500px"} m={"auto"} border={"2px solid skyblue"} p="10px" borderRadius={"10px"}>
                <FormControl>
                    <label>
                        Name:
                        <Input type="text" name="name" value={client.name} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Address:
                        <Input type="text" name="address" value={client.address} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Email:
                        <Input type="email" name="email" value={client.email} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Phone Number:
                        <Input type="tel" name="phone_number" value={client.phone_number} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Business:
                        <Input type="text" name="business" value={client.business} onChange={handleChange} />
                    </label>
                </FormControl>






                <Button type="submit" bg={"green.400"} m="20px auto">Add Client+</Button>

            </Box>
        </div>
    );
};

export default AddClientForm;
