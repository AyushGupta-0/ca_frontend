
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SUCCESS_LOGOUT } from '../../Redux/Vender/Vendor.Type';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Store/Store';

const VendorAllClint = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector(store => store.Signin);
    const [clients, setClients] = useState([
        {
            name: "John Doe",
            address: "123 Main St",
            email: "john@example.com",
            phone_number: "555-1234",
            business: "Tech Corp",
        },
        {
            name: "Jane Smith",
            address: "456 Oak Ave",
            email: "jane@example.com",
            phone_number: "555-5678",
            business: "Fashion Inc",
        },
    ]);
    const handelLogOut = () => {

        if (token) {
            dispatch({ type: SUCCESS_LOGOUT })
            navigate("/")
        } else {
            navigate("/Login")
        }
    }
    return (
        <div>
            <Link to={"/AddClientForm"}>
                <Button bg={"green.200"} m={"20px auto"}>Add New Client +</Button>


            </Link>
            {/* <Link to={"/"}> */}

            <Button bg={"red.200"} m={"20px auto"} onClick={handelLogOut}>Log Out</Button>
            {/* </Link> */}

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
                    <Tbody>
                        {clients.map((client, index) => (
                            <Tr key={index}>
                                <Td>{client.name}</Td>
                                <Td>{client.address}</Td>
                                <Td>{client.email}</Td>
                                <Td>{client.phone_number}</Td>
                                <Td>{client.business}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default VendorAllClint;

