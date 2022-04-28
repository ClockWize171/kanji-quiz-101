import React, { useState, useEffect } from 'react'
import n5Data from '../../assets/data/n5-data.json'
import { Quiz } from '../../components';
import { motion } from 'framer-motion';
import { Container, Text, Box, Spinner, useColorMode, useMediaQuery } from '@chakra-ui/react';

const N5 = () => {

  // States Declarations
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [option, setOption] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);


  // Toggle Color Mode 
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5)
  }

  const dataShuffle = React.useMemo(() => {
    return handleShuffle(n5Data.data)
  }, [])

  dataShuffle.slice(0, 11)

  useEffect(() => {
    setQuestions(dataShuffle)
    setOption(questions &&
      handleShuffle([
        questions[currentQuestion]?.correct_answer,
        ...questions[currentQuestion]?.incorrect_answer,
      ]))
  }, [questions, currentQuestion, dataShuffle])

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery([
    "(min-width: 1000px)",
    "(min-width:588px)"
  ]);

  return (
    <Container
      pt={isNotSmallerScreen ? '10vh' : '4vh'}
      pb={10}
      maxW='container.xl'>
      {
        questions ? (
          <>
            <Box align='center'>
              <Text fontSize={['3xl', '4xl']} fontWeight='bold'>
                N5 Quiz
              </Text>
            </Box>
            <Box pb={5} align='center'>
              <Text fontSize='2xl' fontWeight='bold'>
                Quiz : {currentQuestion + 1}
              </Text>
            </Box>
            {
              currentQuestion > 8 ? (
                <>
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ y: [-50, 0], opacity: [0, 1] }}>
                    <Box
                      margin='auto'
                      w={['70%', '40%']}
                      color={isDark ? '#1A202C' : 'white'}
                      p={3}
                      borderRadius='md'
                      bg={isDark ? 'blue.300' : 'blue.500'}>
                      <Text align='center' fontSize={['sm', 'md']} fontWeight='bold'>
                        This is the last question!
                      </Text>
                      <Text mt={1} align='center' fontSize={['sm', 'md']}>
                        Your current score: <strong>{score}/{currentQuestion + 1}</strong>
                      </Text>
                    </Box>
                  </motion.div>
                </>) : (
                <>

                </>)
            }
            <Box pt={3} align='right'>
              <Text fontSize={['sm', 'md']}>
                {score > 1 ? "Points:" : "Point:"} <strong>{score}</strong>
              </Text>
            </Box>

            <Quiz
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              option={option}
              correct={questions[currentQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        )
          :
          (
            <Box pt={8} align='center'>
              <Spinner size='xl' />
            </Box>
          )
      }


    </Container>
  )
}

export default N5