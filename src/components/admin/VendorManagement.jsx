import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VendorRegistrationForm from './VendorRegistraionForm';

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

const dummyVendors = [
  {
    id: 1,
    name: 'Vendor 1',
    email: 'vendor1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 2,
    name: 'Vendor 2',
    email: 'vendor2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 3,
    name: 'Vendor 1',
    email: 'vendor1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 4,
    name: 'Vendor 2',
    email: 'vendor2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 5,
    name: 'Vendor 1',
    email: 'vendor1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 6,
    name: 'Vendor 2',
    email: 'vendor2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 7,
    name: 'Vendor 1',
    email: 'vendor1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 8,
    name: 'Vendor 2',
    email: 'vendor2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
  {
    id: 9,
    name: 'Vendor 1',
    email: 'vendor1@example.com',
    companyName: 'Company A',
    registrationDate: '2023-08-01',
    approvalStatus: 'Pending',
  },
  {
    id: 10,
    name: 'Vendor 2',
    email: 'vendor2@example.com',
    companyName: 'Company B',
    registrationDate: '2023-08-02',
    approvalStatus: 'Approved',
  },
];

const VendorManagement = () => {
  const [vendors, setVendors] = useState(dummyVendors);
  const navigate = useNavigate();

  const HandleLogout = () => {
    // logout logic 
    navigate("/admin")
  }

  const toggleApprovalStatus = (id) => {
    setVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === id
          ? {
              ...vendor,
              approvalStatus:
                vendor.approvalStatus === 'Pending' ? 'Approved' : 'Pending',
            }
          : vendor
      )
    );
  };

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
                Vendor Management
            </Heading>

            <Flex mt={{ base: 4, md: 0 }}>
                {/* <Button colorScheme="green" leftIcon={<FaPlus />} mb={{ base: 2, md: 0 }}>
                New Vendor
                </Button> */}
                <VendorRegistrationForm/>
                <Button colorScheme="gray" ml={2} onClick={()=> navigate("/user-management")}>
                Users
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
                <Th>Company Name</Th>
                <Th>Registration Date</Th>
                <Th>Approval Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {vendors.map((vendor) => (
                <Tr key={vendor.id}>
                  <Td>{vendor.name}</Td>
                  <Td>{vendor.email}</Td>
                  <Td>{vendor.companyName}</Td>
                  <Td>{vendor.registrationDate}</Td>
                  <Td>{vendor.approvalStatus}</Td>
                  <Td>
                    <Button
                      colorScheme={vendor.approvalStatus === 'Pending' ? 'orange' : 'green'}
                      size="sm"
                      onClick={() => toggleApprovalStatus(vendor.id)}
                    >
                      {vendor.approvalStatus === 'Pending' ? 'Approve' : 'Approved'}
                    </Button>
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

export default VendorManagement;
