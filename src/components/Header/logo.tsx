import { Box, Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Box
      width={['81px', '184.06px']}
      height={['20px', '45.92px']}
      marginTop={['4', '27']}
    >
      <Image src="../Logo.svg" />
    </Box>
  );
}
