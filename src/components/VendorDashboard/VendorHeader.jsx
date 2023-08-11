import React from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Badge,
  Text,
} from '@chakra-ui/react';
import { FiBell, FiUser, FiBriefcase, FiPercent } from 'react-icons/fi';


const VendorHeader = () => {
  const notifications = []; // Replace with actual notifications data
  const profileImage = null; // Replace with the path to the profile image

  const handleNotificationClick = () => {
    // Handle notification click
  };

  const handleProfileImageUpload = (event) => {
    // Handle profile image upload
  };

  return (
    <Flex flex='1'>
        <Box bg="#FFB91D" p="4" color="white">
        <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
            <Heading as="h1" mr="4">
                Vendor Dashboard
            </Heading>
            <Badge colorScheme="green" px="2" py="1">
                Online
            </Badge>
            </Flex>
            <Flex alignItems="center">
            {/* <Flex alignItems="center" mr="4">
                <FiUser size={20} />
                <Box ml="2">
                <Text fontSize="sm">Vendor Name</Text>
                <Text fontSize="xs">ID: V123456</Text>
                </Box>
            </Flex> */}
            <Menu>
                <MenuButton
                as={IconButton}
                icon={<FiBell />}
                variant="outline"
                ml="4"
                />
                <MenuList>
                {notifications.map((notification, index) => (
                    <MenuItem key={index}>{notification}</MenuItem>
                ))}
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                as={Avatar}
                size="sm"
                name="Vendor Name"
                src={profileImage}
                ml="4"
                />
                <MenuList>
                <MenuItem>
                    <label htmlFor="profile-image-upload">
                    Update Profile Picture
                    </label>
                    <input
                    type="file"
                    id="profile-image-upload"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleProfileImageUpload}
                    />
                </MenuItem>
                <MenuItem>Logout</MenuItem>
                </MenuList>
            </Menu>
            </Flex>
        </Flex>
        </Box>
    </Flex>
  );
};

export default VendorHeader;
