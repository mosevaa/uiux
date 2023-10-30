'use client'
import {Card} from '@chakra-ui/card'
import { IFilm } from '@/lib/types'
import { Flex } from '@chakra-ui/react'

const FilmCard = ({ large_cover_image }: IFilm) => {
  return (
    <Flex>
      <Card width='415px'
            height='596px'
            backgroundImage={large_cover_image}
            backgroundSize='415px 596px'/>
    </Flex>
  )
}

export default FilmCard