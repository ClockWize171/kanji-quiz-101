import React from 'react'
import { Container, Text } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container
        padding={6}>
            <Text  textAlign="center" fontWeight="bold" fontSize='3xl'>404 Page Not Found :(</Text>
        </Container>
    )
}

export default NotFound