import React from 'react'
import n5 from '../../assets/images/n5.jpg'
import n4 from '../../assets/images/n4.jpg'
import n3 from '../../assets/images/n3.jpg'
import n2 from '../../assets/images/n2.jpg'
import n1 from '../../assets/images/n1.jpg'
import { Container, SimpleGrid, Box, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { Card } from '../../components'

const Home = () => {
  const N5_link = '/N5'
  const N4_link = '/N4'
  const N3_link = '/N3'
  const N2_link = '/N2'
  const N1_link = '/N1'

  return (
    <Container pt={10} pb={5} maxW='container.xl'>
      <SimpleGrid columns={[1, null, 2]} spacing='30px'>
        <Card image={n5} link={N5_link}>N5 Quiz</Card>
        <Card image={n4} link={N4_link}>N4 Quiz</Card>
        <Card image={n3} isDisabled={true} comingSoon={'Coming Soon...'} link={N3_link}>N3 Quiz</Card>
        <Card image={n2} isDisabled={true} comingSoon={'Coming Soon...'} link={N2_link}>N2 Quiz</Card>
      </SimpleGrid>
      <Box
        w={['full', '80%']}
        margin='auto'
        mt={5}
        alignItems='center' >
        <Card isDisabled={true} comingSoon={'Coming Soon...'} image={n1} link={N1_link}>N1 Quiz</Card>
      </Box>
      <Box
        p={5}
        borderRadius='lg'
        borderWidth='2px'
        w={['full', '80%']}
        margin='auto'
        mt={5}
        alignItems='center' >
        <Text textDecoration='underline' fontWeight='bold' fontSize='xl'>About this page</Text>
        <Text mt={4} fontWeight='medium' fontSize='lg'>
          <li>The purpose of this page is to practise Japanese kanji for different levels <Link
            color={useColorModeValue('blue', 'blue.200')}
            textDecoration='underline'
            href='https://www.jlpt.jp/e/about/levelsummary.html'
            isExternal>(N5, N4, N3, N2, and N1)</Link>.</li>
        </Text>
        <Text mt={4} fontWeight='medium' fontSize='lg'>
          <li>This web page was also developed using <Link
            color={useColorModeValue('blue', 'blue.200')}
            textDecoration='underline'
            href='https://chakra-ui.com/'
            isExternal>Chakra UI</Link>.</li>
        </Text>
        <Text mt={4} fontWeight='medium' fontSize='lg'>
          <li>For the kanji multiple choices, most of the questions are from <Link
            color={useColorModeValue('blue', 'blue.200')}
            textDecoration='underline'
            href='https://kanji123.org/'
            isExternal>kanji123.org</Link>.</li>
        </Text>
      </Box>
    </Container>
  )
}

export default Home