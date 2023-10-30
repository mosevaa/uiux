'use client';
import { Card } from '@chakra-ui/card';
import { Flex } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/next-js';
import { IFilm } from '@/lib/types';

const FilmMiniCard = ({ id, medium_cover_image }: IFilm) => {
  return (
    <Link href={`/${id}`}>
      <Card
        width='211px'
        height='324px'
        backgroundImage={medium_cover_image}
        backgroundSize='211px 324px'
      ></Card>
    </Link>
  );
};

export default FilmMiniCard;
