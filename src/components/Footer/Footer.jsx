import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box pb={5} textAlign='center'>
      <Text fontSize="sm">© Made with ❤️ by <strong>Thet Min Htin</strong> {new Date().getFullYear()}</Text>
    </Box>
  )
}

export default Footer