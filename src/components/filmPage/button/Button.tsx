'use client'
import { Button, Flex } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { IFilm } from '@/lib/types'

const ChakraButton = ({ torrents, url }: IFilm) => {
  return (
    <Flex gap='15px'>
      <Link href={torrents ? torrents[0].url : ''}>
        <Button colorScheme='gray' height='38px' width='200px'>
          Download
        </Button>
      </Link>
      <Link href={url}>
        <Button colorScheme='gray' height='38px' width='200px'>
          Watch Now
        </Button>
      </Link>
    </Flex>
  )
}

export default ChakraButton