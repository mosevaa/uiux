'use client';
import { Card } from '@chakra-ui/card';
import { Flex } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/next-js';
import { IFilm } from '@/lib/types';

const FilmCard = ({ id, medium_cover_image }: IFilm) => {
  return (
    <Link href={`/${id}`}>
      <Card
        width='211px'
        height='288px'
        backgroundImage={medium_cover_image}
      ></Card>
    </Link>
  );
};

export default FilmCard;
