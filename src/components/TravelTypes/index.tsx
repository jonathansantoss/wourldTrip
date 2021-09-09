import { Box, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';

export function TravelTypes() {
  const isTravelTypes = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Box
      position="absolute"
      top={['249px', '549px']}
      left={['50px', '140px']}
      h={['120px', '145px']}
      w={['275px', '1160px']}
    >
      {isTravelTypes && (
        <SimpleGrid columns={[2, 5]} spacing={[10, 146]}>
          <Box w="158px" h="145px" bgImage="./images/Nightlife.png" />
          <Box w="85px" h="145px" bgImage="./images/Beach.png" />
          <Box w="113px" h="145px" bgImage="./images/Modern.png" />
          <Box w="100px" h="145px" bgImage="./images/Classic.png" />
          <Box w="101px" h="145px" bgImage="./images/More.png" />
        </SimpleGrid>
      )}

      {!isTravelTypes && (
        <Box w="136px" h="21px">
          <Text
            position="absolute"
            top="10px"
            w="8px"
            h="8px"
            background="#FFBA08"
            borderRadius="5px"
          />
          <Text
            position="absolute"
            top="0px"
            left="8px"
            w="120px"
            h="100%"
            fontSize="18px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="27px"
            textAlign="center"
            color="#47585B"
          >
            vida nortuna
          </Text>
        </Box>
      )}

      {!isTravelTypes && (
        <Box position="absolute" left="207px" top="0px" w="68px" h="24px">
          <Text
            position="absolute"
            top="10px"
            w="8px"
            h="8px"
            background="#FFBA08"
            borderRadius="5px"
          />
          <Text
            position="absolute"
            top="0px"
            left="8px"
            w="52px"
            h="100%"
            fontSize="18px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="27px"
            textAlign="center"
            color="#47585B"
          >
            praia
          </Text>
        </Box>
      )}

      {!isTravelTypes && (
        <Box position="absolute" top="48px" w="68px" h="24px">
          <Text
            position="absolute"
            top="10px"
            w="8px"
            h="8px"
            background="#FFBA08"
            borderRadius="5px"
          />
          <Text
            position="absolute"
            top="0px"
            left="8px"
            w="87px"
            h="100%"
            fontSize="18px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="27px"
            textAlign="center"
            color="#47585B"
          >
            moderno
          </Text>
        </Box>
      )}

      {!isTravelTypes && (
        <Box position="absolute" top="48px" left="178px" w="93px" h="24px">
          <Text
            position="absolute"
            top="10px"
            w="8px"
            h="8px"
            background="#FFBA08"
            borderRadius="5px"
          />
          <Text
            position="absolute"
            top="0px"
            left="8px"
            w="77px"
            h="100%"
            fontSize="18px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="27px"
            textAlign="center"
            color="#47585B"
          >
            clássico
          </Text>
        </Box>
      )}

      {!isTravelTypes && (
        <Box position="absolute" left="89px" top="98px" w="68px" h="24px">
          <Text
            position="absolute"
            top="10px"
            w="8px"
            h="8px"
            background="#FFBA08"
            borderRadius="5px"
          />
          <Text
            position="absolute"
            top="0px"
            left="8px"
            w="80px"
            h="100%"
            fontSize="18px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="27px"
            textAlign="center"
            color="#47585B"
          >
            e mais...
          </Text>
        </Box>
      )}
    </Box>
  );
}
