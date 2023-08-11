import React from 'react'
import VendorSidebar from './VendorSidebar'
import VendorHeader from './VendorHeader'
import { Box, Flex } from '@chakra-ui/react'


const VendorDashboard = () => {
  return (
    <>
        <Flex flexDirection='row'>
            <VendorSidebar/>
            <Box flex='1' ml='200px'>
                <VendorHeader/>
            </Box>
        </Flex>
    </>
  )
}

export default VendorDashboard