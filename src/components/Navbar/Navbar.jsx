import {
  Flex,
  Box,
  Text
} from '@chakra-ui/layout'
import {
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Image,
  Stack,
  Container,
} from '@chakra-ui/react'
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';

import React from 'react'

const Navbar = () => {

  // Toggle Color Mode 
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery("(min-width:713px)");

  return (
    <Container maxW='container.lg'>
      <Flex mt={3} w='full'>
        <Box>
          <Link to='/'>
            <Stack direction='row'>
              <Box
                w='50px'
                h='40px'
                borderColor={useColorModeValue('black', 'red.100')}
                borderWidth='1px'>
                <Image
                  w='50px'
                  h='38px'
                  objectFit='cover'
                  src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg'
                  fallbackSrc='https://via.placeholder.com/64'
                  alt='Nihon Flag'
                />
              </Box>
              <Box>
                <Text
                  bgGradient='linear(to-r, red.500, red.300, purple.500)'
                  bgClip='text'
                  fontWeight='bold'
                  pt={isNotSmallerScreen ? 0 : 2.5}
                  fontSize={isNotSmallerScreen ? '2xl' : 'xl'}>
                  <ruby>漢字 <rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby> Quiz 101
                </Text>
              </Box>
            </Stack>
          </Link>
        </Box>

        <Spacer />

        <Box>
          <IconButton
            color={useColorModeValue('white', 'black')}
            bgGradient='linear(to-r, red.500, red.300, purple.500)' 
                _hover={{
                    bgGradient: 'linear(to-r, purple.500, red.300, red.500)'
                }} 
            borderRadius='md'
            onClick={toggleColorMode}
            icon={isDark ? <FaSun /> : <FaMoon />} />
        </Box>
      </Flex>
    </Container>
  )
}

export default Navbar