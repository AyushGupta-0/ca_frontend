import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaPlus, FaEye } from 'react-icons/fa';

const dummyUsers = [
  {
    id: 1,
    name: 'User 1',
    email: 'user1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 2,
    name: 'User 2',
    email: 'user2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 3,
    name: 'User 1',
    email: 'user1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 4,
    name: 'User 2',
    email: 'user2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 5,
    name: 'User 1',
    email: 'user1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 6,
    name: 'User 2',
    email: 'user2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 7,
    name: 'User 1',
    email: 'user1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 8,
    name: 'User 2',
    email: 'user2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 9,
    name: 'User 1',
    email: 'user1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 10,
    name: 'User 2',
    email: 'user2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
];

const UserManagement = () => {
  const [Users, setUsers] = useState(dummyUsers);
  const navigate = useNavigate();

  const HandleLogout = () => {
    // logout logic 
    navigate("/admin")
  }

  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Flex
          align="center"
          justify="space-between"
          mb={6}
          direction={{ base: 'column', md: 'row' }}
          mt={4}
        >
            <Heading
                size="xl"
                color="orange.500"
                mb={{ base: 4, md: 0 }}
                marginLeft={{ base: "auto", md: "150px" }}
                bg="gray.100"
                p={2}
                borderRadius="md"
                px={{base:'auto', md:'8'}}
            >
                User Management
            </Heading>

            <Flex mt={{ base: 4, md: 0 }}>
                <Button colorScheme="gray" ml={2} onClick={()=> navigate("/vendor-management")}>
                Vendors
                </Button>
                <Button colorScheme="red" ml={2} onClick={HandleLogout}>
                Logout
                </Button>
            </Flex>
        </Flex>
            <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={4}
            overflowX={{ base: 'auto', md: 'visible' }}
            >
            <Table variant="simple">
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Registration Date</Th>
                    <Th>Actions</Th>
                </Tr>
                </Thead>
                <Tbody>
                {Users.map((User) => (
                    <Tr key={User.id}>
                    <Td>{User.name}</Td>
                    <Td>{User.email}</Td>
                    <Td>{User.registrationDate}</Td>
                    <Td>
                        <Button
                        colorScheme="blue"
                        size="sm"
                        ml={2}
                        leftIcon={<FaEye />}
                        mt={{base:"1", md:"auto"}}
                        >
                        View More
                        </Button>
                    </Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
            </Box>
      </Container>
    </ChakraProvider>
  );
};

export default UserManagement;
