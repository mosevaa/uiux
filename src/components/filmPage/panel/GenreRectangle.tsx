'use client'
import { Badge } from '@chakra-ui/react'


const Genre = ({ genre }: { genre: string }) => {
  return (
    <Badge colorScheme='gray'
           height='24px'
           borderRadius='10px'
           display='grid'
           alignItems='center'>
      {genre}
    </Badge>)
}

export default Genre