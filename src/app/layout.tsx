import { Providers } from './providers';
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import down_line from '../../public/1.svg';
import down_line2 from '../../public/2.svg';
import top_line from '../../public/3.svg';
import top_line2 from '../../public/4.svg';
import logo from '../../public/PICTU.svg';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body style={{backgroundColor: '#1A202C'}}>
        <Providers>
          <Flex position='relative' height='100vh' width='100wh' bg='gray.800'>
            <Flex position='absolute'>
              <Image src={top_line} alt='img1' width='305' height='176' />
            </Flex>
            <Flex position='absolute'>
              <Image src={top_line2} alt='img1' width='305' height='176' />
            </Flex>
            <Flex position='absolute' top='47' left='30'>
              <Image src={logo} alt='logo' width='142' height='40' />
            </Flex>
            {children}
            <Flex position='absolute' right='0px' bottom='0px'>
              <Image src={down_line} alt='img1' width='305' height='176' />
            </Flex>
            <Flex position='absolute' right='0px' bottom='0px'>
              <Image src={down_line2} alt='img1' width='305' height='176' />
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
