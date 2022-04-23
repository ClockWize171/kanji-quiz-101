import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Container,
    Text,
    Button,
    SimpleGrid,
    Box,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react';

import Error from '../Error/Error';
import { ImCheckboxChecked, ImCross } from "react-icons/im";
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
    const navigate = useNavigate()

    const handleNext = () => {
        setSelected()
        if (currentQuestion > 3) {
            if (!selected) {
                setError('Please select one answer')
            } else {
                navigate(`/result`)
            }
        } else if (selected) {
            setCurrentQuestion(currentQuestion + 1)
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
        <Box borderWidth='2px' borderRadius='lg'>
            <Text lineHeight={9} mt={5} p={5} textAlign='center' fontSize={['lg', 'xl']} fontWeight='normal'>
                {currentQuestion + 1}. {questions[currentQuestion].question}
            </Text>

            <Container maxW='container.md'>
                {/* Error Boundaries */}
                {error && <Error data={error} />
                }

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
                                                {index + 1}. {opt}
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

            <Box p={5} align='right'>
                <Button
                    onClick={() => handleNext()}
                    bgGradient='linear(to-r, red.500, red.300, purple.500)'
                    _hover={{
                        bgGradient: 'linear(to-r, purple.500, red.300, red.500)'
                    }}
                    rightIcon={<MdForward />}>
                    Next
                </Button>
            </Box>
        </Box >
    )
}

export default Quiz