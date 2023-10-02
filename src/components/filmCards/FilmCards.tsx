import { Flex, SimpleGrid } from '@chakra-ui/react';
import { FilmCard } from '@/components/filmCards/card/card';

export function FilmCards() {
  return (
    <Flex flexDirection='column' position='relative' alignSelf='center'>
      <SimpleGrid columns={5} spacing='43px'>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
        <Flex>
          <FilmCard />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
