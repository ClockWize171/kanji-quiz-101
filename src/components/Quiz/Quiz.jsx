import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Spacer,
    Container,
    Text,
    Button,
    SimpleGrid,
    Box,
    Icon,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    Flex,
} from '@chakra-ui/react';

import Error from '../Error/Error';
import { ImCheckboxChecked, ImCross, ImExit } from "react-icons/im";
import { MdForward } from "react-icons/md";


const Quiz = ({
    currentQuestion,
    setCurrentQuestion,
    questions,
    option,
    correct,
    score,
    setScore,
    setQuestions }) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const initialFocusRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const navigate = useNavigate()



    const handleNext = () => {
        setSelected()
        if (currentQuestion > 8) {
            if (!selected) {
                setError('Please select one answer')
            } else {
                window.location.reload(false);
            }
        } else if (selected) {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1)
            }, 500)
        } else if (!selected) {
            setError('Please select one answer')
        }
    }

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "green";
        } else if (selected === i && selected !== correct) {
            return "red"
        } else if (i === correct) {
            return ("green")
        }
    }

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) {
            setError(false)
            setScore(score + 1)
        } else {
            setError(false)
        }
    }

    return (
        <>
            <Box mt={3} borderWidth='2px' borderRadius='lg'>
                <Text
                    lineHeight={9}
                    mt={[0, 5]}
                    p={5}
                    textAlign='center'
                    fontSize={['lg', 'xl']}
                    fontWeight='normal'>
                    {questions[currentQuestion].question}
                </Text>
                <Container maxW='container.md'>
                    {/* Error Boundaries */}
                    {error && <Error data={error} />}


                    <SimpleGrid pt={10} columns={[1, null, 2]} spacing='20px'>

                        {
                            option &&
                            option.map((opt, index) => (
                                <Box key={index} margin='auto'>
                                    <Popover
                                        placement='top'
                                        initialFocusRef={initialFocusRef}>
                                        <motion.div
                                            whileTap={{ scale: 0.99 }}
                                            whileHover={{ scale: 1.02 }}>
                                            <PopoverTrigger>
                                                <Button
                                                    onClick={() => { handleCheck(opt) }}
                                                    isDisabled={selected ? true : false}
                                                    bgColor={`${selected && handleSelect(opt)}`}
                                                    _hover={{
                                                        bgColor: selected && handleSelect(opt)
                                                    }}
                                                    size='lg'
                                                    w={['80vw', '22rem']}>
                                                    {opt}
                                                </Button>
                                            </PopoverTrigger>
                                        </motion.div>

                                        {
                                            opt === correct ? (
                                                <PopoverContent bg='green.400'>
                                                    <PopoverArrow bg='green.400' />
                                                    <PopoverHeader fontWeight='bold' border='0'>
                                                        <Icon as={ImCheckboxChecked} w={3} h={3} /> Correct 😃!
                                                    </PopoverHeader>
                                                </PopoverContent>

                                            ) : (
                                                <PopoverContent bg='red.400'>
                                                    <PopoverArrow bg='red.400' />
                                                    <PopoverHeader fontWeight='bold' border='0'>
                                                        <Icon as={ImCross} w={3} h={3} /> Incorrect 😓!
                                                    </PopoverHeader>
                                                    <PopoverBody>
                                                        Correct answer is （<strong>{correct}</strong>）
                                                    </PopoverBody>
                                                </PopoverContent>
                                            )
                                        }
                                    </Popover>
                                </Box>
                            ))
                        }
                    </SimpleGrid>
                </Container>

                <Flex pt={5} margin='auto'>
                    <Box p={5} align='left'>
                        <Button
                            onClick={onOpen}
                            leftIcon={<ImExit />}
                            colorScheme='red'>
                            Quit
                        </Button>
                        <AlertDialog
                            size='xs'
                            isCentered
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}>

                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                        Quit to Home
                                    </AlertDialogHeader>

                                    <AlertDialogBody lineHeight={8}>
                                        Are you sure? You are about to leave from quiz.
                                    </AlertDialogBody>

                                    <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button leftIcon={<ImExit />} colorScheme='red' onClick={() => navigate('/')} ml={3}>
                                            Quit
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Box>

                    <Spacer />

                    <Box p={5} align='right'>
                        {currentQuestion > 8 ?
                            (
                                <Button
                                    onClick={() => handleNext()}
                                    colorScheme='yellow'>
                                    Retry Again ?
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => handleNext()}
                                    rightIcon={<MdForward />}
                                    colorScheme='green'>
                                    Next
                                </Button>
                            )}

                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Quiz