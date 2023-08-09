import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const VendorRegistrationForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRegistering, setIsRegistering] = useState(false);
  const toast = useToast();

  const handleRegister = () => {
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      toast({
        title: 'Registered successfully!',
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <>
      <Button
        colorScheme="blue"
        leftIcon={<FaPlus />}
        mb={{ base: 2, md: 0 }}
        onClick={onOpen}
        disabled={isRegistering}
        ml="2"
      >
        New Vendor
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginTop={{base:"4", md:'32'}}>
            <ModalHeader>Register New Vendor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                  <FormLabel> Full Name </FormLabel>
                  <Input type="text"/>
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input type="number"/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" />
                </FormControl>
            </ModalBody>
        <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
            Back
            </Button>
            <Button
            colorScheme="blue"
            onClick={handleRegister}
            disabled={isRegistering}
            >
            {isRegistering ? 'Registering...' : 'Register Vendor'}
            </Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
  );
};

export default VendorRegistrationForm;
