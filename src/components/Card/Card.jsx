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
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaRegWindowClose } from "react-icons/fa";

const Card = ({ children, image, link }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='30vh'
            borderRadius='xl'
            borderWidth='2px'
            backgroundImage={image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat" >
            <Box p='50px' w='100%'>
                <Button
                    onClick={onOpen}
                    borderColor='gray.300'
                    borderWidth='2px'
                    variant='solid'
                    boxShadow='2xl'
                    size='lg'
                    w='100%'
                    _hover={{ bgGradient: 'linear(to-r, red.500, red.300, purple.500)' }}
                    bgColor='red.300'
                    color='black'>
                    {children}
                </Button>
            </Box>
            <Modal
                size='sm'
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{children}</ModalHeader>
                    <ModalBody>
                        You are about to continue to the quiz. There will be 10 questions over all.
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