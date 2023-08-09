import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // admin registration logic 
      console.log('Admin registered with:', email);
    } else {
      console.log("Passwords don't match");
    }
  };

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      minH="100vh"
      py="12"
      px={{ base: '4', lg: '8' }}
    >
      <Box
        maxW="md"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        py="8"
        px={{ base: '4', md: '10' }}
        shadow="xl"
        rounded={{ sm: 'lg' }}
      >
        <Heading textAlign="center" size="xl" fontWeight="extrabold" mb="6">
          Admin Sign Up
        </Heading>
        <Text align="center" maxW="md" fontWeight="medium" mb="6">
          Create an admin account to manage the platform securely.
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                borderRadius="md"
                size="md"
                padding="2"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter a strong password"
                onChange={(e) => setPassword(e.target.value)}
                borderRadius="md"
                size="md"
                padding="2"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                borderRadius="md"
                size="md"
                padding="2"
                required
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="orange"
              size="lg"
              fontSize="md"
              borderRadius="lg"
              padding="4"
              isFullWidth
            >
              Create Account
            </Button>
            <Text align="center" fontSize="md" mt="2">
              Already have an account?{' '}
              <Link as={RouterLink} to="/admin" color="orange.500">
                Log in
              </Link>
            </Text>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default AdminRegister;
