import 'swiper/css';
import 'swiper/css/navigation';
import { Banner } from '../components/Banner/Index';
import {
  Divider,
  Center,
  VStack,
  Box,
  SimpleGrid,
  Text,
  Stack,
  useBreakpointValue,
  Radio,
} from '@chakra-ui/react';
import { Carrossel } from '../components/Carrossel/Index';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  const isTravelTypes = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Stack w={['375px', '1440px']} h={['777px', '1469px']} background="#F5F8FA">
      <Banner />
      <VStack>
        <TravelTypes/>

        <Box
          position="absolute"
          left={['154px', '675px']}
          w={['60px', '90px']}
          top={['405px', '774px']}
        >
          <Center w={['60px', '90px']} height={['0px', '50px']}>
            <Divider
              orientation="horizontal"
              borderColor="#47585B"
              size={['1px', '2px']}
            />
          </Center>
        </Box>

        <Text
          position="absolute"
          top={['429px', '826px']}
          left={['39px', '300px']}
          w={['297px', '839px']}
          h={['54px', '101px']}
          fontFamily="Poppins"
          fontSize={['20px', '36px']}
          fontWeight="500px"
          fontStyle="normal"
          lineHeight={['30px', '54px']}
          textAlign="center"
          color="#47585B"
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Text>

        <Carrossel />
      </VStack>
    </Stack>
  );
}
