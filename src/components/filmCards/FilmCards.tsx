'use client';
import { Flex, Text } from '@chakra-ui/react';
import FilmCard from '@/components/filmCards/card/card';
import { useEffect, useState } from 'react';
import { getFilmsList } from '@/lib/api';
import { IFilmList } from '@/lib/types';
import { Link } from '@chakra-ui/next-js';

export const FilmList = () => {
  const [films, setFilms] = useState<IFilmList>({
    movie_count: 0,
    limit: 10,
    page_number: 1,
    movies: [],
  });
  useEffect(() => {
    getFilmsList('1', '10').then((response) => {
      setFilms(response.data.data);
    });
  }, []);

  return (
    <Flex direction='column' alignItems='center' w='100%' px='115px' pt='130px'>
      <Flex w='100%' justifyContent='flex-end'>
        <Text
          color='gray.100'
          fontSize='3xl'
          as='b'
          fontStyle='normal'
          fontWeight='700'
        >
          Films List
        </Text>
      </Flex>
      <Flex direction='row' wrap='wrap' justify='space-between' z-index={4}>
        {films &&
          films.movies.map((film) => (
            <Flex key={film.id}>
              <FilmCard {...film} />
            </Flex>
          ))}
      </Flex>
      <Flex>пагинация</Flex>
    </Flex>
  );
};
