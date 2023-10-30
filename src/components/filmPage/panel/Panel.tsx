'use client'
import { Flex, Text } from '@chakra-ui/react'
import { StarIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { IFilm } from '@/lib/types'
import Genre from '@/components/filmPage/panel/GenreRectangle'
import FilmCard from '@/components/filmCards/card/card'
import { Link } from '@chakra-ui/next-js'

const Panel = ({ title, year, rating, genres }: IFilm) => {
  return (
    <Flex direction='row' wrap='wrap' gap='10px'>
      <Flex height='100%' mt='25px'>
        <Link href={'/'}>
          <ArrowBackIcon color='gray.100' fontSize='25px'/>
        </Link>
      </Flex>
      <Flex gap='13px' alignItems='baseline'>
        <Text color='gray.100'
              as='b'
              fontStyle='normal'
              fontWeight='700'
              fontSize='40px'>
          {title}
        </Text>
        <Text color='gray.100' fontSize='20px'>
          {year}
        </Text>
        <Flex alignItems='center' height='100%'>
          <Text color='gray.100' fontSize='20px'>
            {rating}
          </Text>
          <StarIcon color='gray.100' />
        </Flex>
      </Flex>
      <Flex wrap='wrap' mt='25px' gap='13px'>
        {genres.map((genre: string, index) => (
          <Genre genre={genre} key={index} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Panel