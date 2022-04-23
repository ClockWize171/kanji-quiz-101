import React, { useState, useEffect } from 'react'
import n5Data from '../../assets/data/n5-data.json'
import { Quiz } from '../../components';
import { Container, Text, Box, Spinner } from '@chakra-ui/react';

const N5 = () => {

  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [option, setOption] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5)
  }

  const dataShuffle = React.useMemo(() => {
    return handleShuffle(n5Data.data)
  }, [])

  console.log(dataShuffle.slice(0,5))

  useEffect(() => {
    setQuestions(dataShuffle)
    setOption(questions &&
      handleShuffle([
        questions[currentQuestion]?.correct_answer,
        ...questions[currentQuestion]?.incorrect_answer,
      ]))
  }, [questions, currentQuestion,dataShuffle])

  return (
    <Container pt={10} pb={10} maxW='container.xl'>
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
                Quiz {currentQuestion + 1}
              </Text>
            </Box>
            <Text fontSize='lg' p={3} align='right'>
              Score: <strong>{score}</strong>
            </Text>
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