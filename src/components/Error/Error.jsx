import React from 'react'
import { motion } from 'framer-motion'
import { Box, Text, useColorMode } from '@chakra-ui/react'

const Error = ({data}) => {
    // Toggle Color Mode 
    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark"

    return (
        <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}>
            <Box
                margin='auto'
                w={['70%','40%']}
                color={isDark ? '#1A202C' : 'white'}
                p={3}
                borderRadius='md'
                bg={isDark ? 'yellow.300' : 'yellow.400'}>
                <Text align='center' fontSize={['sm','md']} fontWeight='bold'>
                    {data} !
                </Text>
            </Box>
        </motion.div>
    )
}

export default Error