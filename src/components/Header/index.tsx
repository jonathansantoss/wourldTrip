import { Box, Center, Icon } from '@chakra-ui/react';
import React from 'react';
import { Logo } from './logo';
import { useRouter } from 'next/router';
import { HiChevronLeft } from 'react-icons/hi';

export function Header() {
  const router = useRouter();

  const handleBackHome = () => {
    router.back();
  };

  return (
    <Box
      width={['375px', '1440px']}
      height={['50px', '100px']}
      background="#F5F8FA"
    >
      <Center>
        {router.asPath === '/europa' && (
          <Icon
            position="absolute"
            left={['16px', '140px']}
            top={['17px', '34px']}
            w={['16px', '32px']}
            h={['16px', '32px']}
            as={HiChevronLeft}
            onClick={handleBackHome}
          />
        )}
        <Logo />
      </Center>
    </Box>
  );
}
