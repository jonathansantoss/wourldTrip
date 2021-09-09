import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { useRouter } from 'next/router';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Flex, Text, Box } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export function Carrossel() {
  const router = useRouter();


  function handleClick() {
    router.push('/europa');
  }

  return (
    <Flex
      position="absolute"
      top={['503px', '979px']}
      w={['375px', '1240px']}
      h={['250px', '450px']}
      left={["0px","100px"]}
    >
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
      >
        <SwiperSlide tabIndex={-1}>
          <Box
            height="100%"
            width="100%"
            bgImage="url('../images/Africa/africa.jpg')"
            bgSize="cover"
            bgPosition="center"
          >
            <Box
              position={["absolute","relative"]}
              top={["105px","180px"]}
              left={["143px","458px"]}
              h={["29px","116px"]}
              w={["89px","324px"]}
            >
              <Text
                color="#F5F8FA"
                fontFamily="Poppins"
                fontSize={["24px","48px"]}
                fontWeight="bold"
                lineHeight={["36px","72px"]}
                textAlign="center"
              >
                Africa
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide tabIndex={0}>
          <Box
            bgImage="url('../images/America_norte/america.jpg')"
            bgRepeat="no-repeat"
            bgPosition="center"
            width="100%"
            height="100%"
            bgSize="cover"
          >
            <Box
              position="relative"
              top={["105px","180px"]}
              left={["143px","458px"]}
              h={["29px","116px"]}
              w={["89px","324px"]}
            >
              <Text
                color="#F5F8FA"
                fontFamily="Poppins"
                fontSize={["24px","48px"]}
                fontWeight="bold"
                lineHeight={["36px","72px"]}
                textAlign="center"
              >
                America
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide tabIndex={1}>
          <Box
            bgImage="url('../images/Asia/asia.jpg')"
            bgRepeat="no-repeat"
            bgPosition="center"
            width="100%"
            height="100%"
            bgSize="cover"
          >
            <Box
              position="relative"
              top={["105px","180px"]}
              left={["143px","458px"]}
              h={["29px","116px"]}
              w={["89px","324px"]}
            >
              <Text
                color="#F5F8FA"
                fontFamily="Poppins"
                fontSize={["24px","48px"]}
                fontWeight="bold"
                lineHeight={["36px","72px"]}
                textAlign="center"
              >
                Asia
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide tabIndex={2}>
          <Box
            bgImage="url('../images/Europa/europa.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            width="100%"
            height="100%"
            bgSize="cover"
            onClick={handleClick}
          >
            <Box
              position="relative"
              top={["105px","180px"]}
              left={["143px","458px"]}
              h={["29px","116px"]}
              w={["89px","324px"]}
            >
              <Text
                color="#F5F8FA"
                fontFamily="Poppins"
                fontSize={["24px","48px"]}
                fontWeight="bold"
                lineHeight={["36px","72px"]}
                textAlign="center"
              >
                Europa
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
