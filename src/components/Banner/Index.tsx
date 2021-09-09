import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
  const isWideLogo = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex height="368.21px">
      <Box
        bgImage="url('../images/Background.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        width={["375px","100%"]}
        height={["163px","335px"]}
      >
        <Text
          fontFamily="Poppins"
          width={["238px","426px"]}
          color="white"
          fontSize={["20px","36px"]}
          position="absolute"
          left={["16px","140px"]}
          top={["78px","180px"]}
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Text>

        <Text
          fontFamily="Poppins"
          width={["333px","524px"]}
          color="#DADADA"
          fontSize={["14px","20px"]}
          position="absolute"
          left={["16px","140px"]}
          top={["144px","308px"]}
          lineHeight={["21px","30px"]}
          fontStyle="normal"
          fontWeight="normal"
        >
          Chegou a hora de tirar do papel a viagem que você
          <br /> sempre sonhou.
        </Text>
      </Box>

      {isWideLogo && (
        <Box
          bgImage="url('../images/Airplane.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          width="417.15px"
          height="270.74px"
          position="absolute"
          left="869.25px"
          top="176px"
          transform=" rotate(3deg)"
        />
      )}
    </Flex>
  );
}
