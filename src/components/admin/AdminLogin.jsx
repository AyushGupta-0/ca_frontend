import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // authentication logic
    if (email === 'admin@example.com' && password === 'admin123') {
      // Simulate successful authentication
      navigate('/admin-panel');
    } else {
      // Handle authentication error
      console.log('Authentication failed');
    }
  };

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      minH="100vh"
      py="12"
      px={{ base: '4', lg: '8' }}
    >
      <Box maxW="md" mx="auto">
        <Card
          bg={useColorModeValue('white', 'gray.700')}
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Admin Login
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            Manage the platform with ease!
          </Text>
          <form onSubmit={handleLogin}>
            <Stack spacing="6">
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" colorScheme="orange" size="lg" fontSize="md">
                Log in
              </Button>
              <Text align="center">
                Not registered?{' '}
                <Link as={RouterLink} to="/admin-register" color="orange.500">
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </form>
        </Card>
      </Box>
    </Box>
  );
};

export default AdminLogin;
