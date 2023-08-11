import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VendorAllClint = () => {
    const [clients, setClients] = useState([]);

    const { token } = useSelector((store)=> store.Signin)
    console.log('signin_token',token)

    const { tokenn } = useSelector((state)=> state.Vendor.token)
    console.log("vendor_token",tokenn)

    const tokenLocal = localStorage.getItem('token')
    console.log('local token',tokenLocal)


    useEffect(()=>{
        const headers = {
            'token':`${tokenLocal}`
        }
        axios.get(`https://taxservicebackend.onrender.com/vendor/getVendor`,{headers})
        .then((res)=>{
            setClients(res.data);
            console.log('clients',res.data)
        })
    },[])

    return (
        <div>
            <Link to={"/AddClientForm"}>
                <Button bg={"green.200"} m={"20px auto"}>Add New Client +</Button>
            </Link>
            <h1>Client Table</h1>
            <TableContainer p="20px">
                <Table width="100%" height="">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Address</Th>
                            <Th>Email</Th>
                            <Th>Phone Number</Th>
                            <Th>Business</Th>
                        </Tr>
                    </Thead>
                    {/* <Tbody>
                        {clients.map((client) => (
                            <Tr key={client.id}>
                                <Td>{client.name}</Td>
                                <Td>{client.address}</Td>
                                <Td>{client.email}</Td>
                                <Td>{client.phone_number}</Td>
                                <Td>{client.business}</Td>
                            </Tr>
                        ))}
                    </Tbody> */}

                </Table>
            </TableContainer>
        </div>
    );
};

export default VendorAllClint;

