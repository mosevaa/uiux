'use client'
import { useEffect, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { getFilmInfo } from '@/lib/api'
import { IFilm } from '@/lib/types'

import ChakraButton from '@/components/filmPage/button/Button'
import FilmCard from '@/components/filmPage/card/Card'
import Panel from '@/components/filmPage/panel/Panel'

const FilmPage = ({ id }: { id: string }) => {
  const [film, setFilm] = useState<IFilm>()

  useEffect(() => {
    getFilmInfo(id)
      .then(
        ({data}) => {
          setFilm(data.data.movie)
        },
      )
  }, [id])

    if (!film) return null

  return (
      <Flex w='100%' px='140px' pt='140px' gap='80px'>
        <Flex direction='column' gap='20px'>
          <FilmCard {...film} />
          <ChakraButton {...film} />
        </Flex>
        <Flex direction='column' gap='30px'>
          <Panel {...film} />
          <Flex>
            <Text color='gray.100'
                  as='b'
                  fontStyle='normal'
                  fontWeight='700'
                  fontSize='24px'
                  textAlign='justify'>
              {film.description_full}
            </Text>
          </Flex>
        </Flex>
      </Flex>
  )
}

export default FilmPage