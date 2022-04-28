import React from 'react'
import {
    Box,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaRegWindowClose } from "react-icons/fa";

const Card = ({ children, image, link, isDisabled, comingSoon }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='30vh'
            borderRadius='xl'
            borderWidth='2px'
            backgroundImage={comingSoon ? '' : image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat" >
            <Box p='50px' w='100%'>
                <Button
                    mb={2}
                    isDisabled={isDisabled}
                    onClick={onOpen}
                    borderColor='gray.300'
                    borderWidth='2px'
                    variant='solid'
                    boxShadow='2xl'
                    opacity='1'
                    size='lg'
                    w='100%'
                    _hover={{ bgGradient: 'linear(to-r, red.500, red.300, purple.500)' }}
                    bgColor='red.300'>
                    {children}
                </Button>
                {comingSoon ? (
                    <Box
                        boxShadow='2xl'
                        margin='auto'
                        w='200px'
                        borderColor='gray.300'
                        borderWidth='2px'
                        borderRadius='md'
                        bgColor='teal.500'>
                        <Text p={2} align='center' fontWeight='bold'>
                            {comingSoon}
                        </Text>
                    </Box>
                ) :
                    (
                        <></>
                    )}

            </Box>
            <Modal
                size='xs'
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{children}</ModalHeader>
                    <ModalBody lineHeight={8} textAlign='justify'>
                        You are about to continue to the quiz. There will be 10 mulitple choice questions to answer.
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            rightIcon={<FaRegWindowClose />}
                            variant='solid'
                            boxShadow='2xl'
                            _hover={{ bgGradient: 'linear(to-r, red.500, red.300, purple.500)' }}
                            bgColor='red.300'
                            mr={3}
                            onClick={onClose}>
                            Close
                        </Button>
                        <Link to={link}>
                            <Button rightIcon={<FaAngleRight />} variant='ghost'>Continue</Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Card