import { Flex, Image, Stack, Box, Text, SimpleGrid } from '@chakra-ui/react';

export default function Europa() {
  return (
    <Stack
      width={['375px', '1440px']}
      height={['2024px', '1706px']}
      background="#F5F8FA"
    >
      <Box
        bgImage="url('../images/Europa/barcelona-1024x683.jpg')"
        bgRepeat="no-repeat"
        bgPosition="center"
        width="100%"
        height={['150px', '500px']}
        bgSize="cover"
      >
        <Text
          w={['102px', '173px']}
          h={['38px', '72px']}
          position="absolute"
          left="140px"
          top="469px"
          color="#F5F8FA"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="600"
          fontSize="48px"
          lineHeight="72px"
        >
          Europa
        </Text>
      </Box>
      <Text
        position="absolute"
        width={['343px', '600px']}
        height={['146px', '211px']}
        left={['16px', '140px']}
        top={['224px', '680px']}
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="normal"
        fontSize={['14px', '24px']}
        lineHeight={['21px', '36px']}
        textAlign="justify"
        color="#47585B"
      >
        A Europa é, por convenção, um dos seis <br /> continentes do mundo.
        Compreendendo a<br /> península ocidental da Eurásia, a Europa
        <br /> geralmente divide-se da Ásia a leste pela
        <br /> divisória de águas dos montes Urais, o rio Ural, o<br /> mar
        Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <SimpleGrid
        position="absolute"
        w={['343px', '490px']}
        h={['59px', '99px']}
        left={['16px', '810px']}
        top={['386px', '736px']}
        columns={3}
      >
        <Box
          width={['60px', '98px']}
          height={['59px', '99px']}
          fontFamily="Poppins"
          fontWeight="600"
          textAlign="center"
        >
          <Text
            fontSize={['24px', '48px']}
            lineHeight={['36px', '72px']}
            color="#FFBA08"
          >
            50
          </Text>
          <Text
            fontSize={['18px', '24px']}
            lineHeight={['27px', '36px']}
            color="#47585B"
          >
            países
          </Text>
        </Box>
        <Box
          width={['60px', '98px']}
          height={['59px', '99px']}
          fontFamily="Poppins"
          fontWeight="600"
          textAlign="center"
        >
          <Text
            fontSize={['24px', '48px']}
            lineHeight={['36px', '72px']}
            color="#FFBA08"
          >
            60
          </Text>
          <Text
            fontSize={['18px', '24px']}
            lineHeight={['27px', '36px']}
            color="#47585B"
          >
            línguas
          </Text>
        </Box>
        <Box
          width="98px"
          height="99px"
          fontFamily="Poppins"
          fontWeight="600"
          textAlign="center"
        >
          <Text
            fontSize={['24px', '48px']}
            lineHeight={['36px', '72px']}
            color="#FFBA08"
          >
            27
          </Text>

          <Text
            isTruncated
            as="span"
            fontSize={['18px', '24px']}
            lineHeight={['27px', '36px']}
            color="#47585B"
          >
            cidades +100
          </Text>
        </Box>
      </SimpleGrid>

      <Box
        position="absolute"
        width={["300px","1160px"]}
        height={["1531px","700px"]}
        left={["16px","140px"]}
        top={["477px","971px"]}
      >
        <Text
          width={["164px","246px"]}
          height={["36px","54px"]}
          fontFamily="Poppins"
          fontWeight="500"
          fontStyle="normal"
          color="#47585B"
          fontSize={["24px","36px"]}
          lineHeight={["36px","54px"]}
          paddingBottom={["50px","94px"]}
        >
          Cidades +100
        </Text>
        <SimpleGrid columns={[1,4]} spacing={["20px","40px"]}>
          <Box width="256px" height="279px">
            <Image height="173px" src="../images/Europa/londres.png" />
            <Box
              background="#FFFFFF"
              height="106px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              boxSizing="border-box"
              borderRadius="4px"
            >
              <Text
                position="absolute"
                left="24px"
                paddingTop="18px"
                fontFamily="Barlow"
                fontSize="20px"
                fontWeight="600"
                lineHeight="25px"
              >
                Londres
              </Text>

              <Text
                position="absolute"
                left="24px"
                paddingTop="55px"
                fontFamily="Barlow"
                fontSize="16px"
                fontWeight="500"
                lineHeight="26px"
                color="#999999"
              >
                Reino Unido
              </Text>
            </Box>
          </Box>
          <Box width="256px" height="279px">
            <Image height="173px" src="../images/Europa/frança.png" />
            <Box
              background="#FFFFFF"
              height="106px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              boxSizing="border-box"
              borderRadius="4px"
            >
              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="18px"
                fontFamily="Barlow"
                fontSize="20px"
                fontWeight="600"
                lineHeight="25px"
              >
                Paris
              </Text>

              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="55px"
                fontFamily="Barlow"
                fontSize="16px"
                fontWeight="500"
                lineHeight="26px"
                color="#999999"
              >
                França
              </Text>
            </Box>
          </Box>
          <Box width="256px" height="279px">
            <Image height="173px" src="../images/Europa/italia.png" />
            <Box
              background="#FFFFFF"
              height="106px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              boxSizing="border-box"
              borderRadius="4px"
            >
              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="18px"
                fontFamily="Barlow"
                fontSize="20px"
                fontWeight="600"
                lineHeight="25px"
              >
                Roma
              </Text>

              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="55px"
                fontFamily="Barlow"
                fontSize="16px"
                fontWeight="500"
                lineHeight="26px"
                color="#999999"
              >
                Itália
              </Text>
            </Box>
          </Box>
          <Box width="256px" height="279px">
            <Image height="173px" src="../images/Europa/republicatcheca.png" />
            <Box
              background="#FFFFFF"
              height="106px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              boxSizing="border-box"
              borderRadius="4px"
            >
              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="18px"
                fontFamily="Barlow"
                fontSize="20px"
                fontWeight="600"
                lineHeight="25px"
              >
                Praga
              </Text>

              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="55px"
                fontFamily="Barlow"
                fontSize="16px"
                fontWeight="500"
                lineHeight="26px"
                color="#999999"
              >
                República Tcheca
              </Text>
            </Box>
          </Box>
          <Box width="256px" height="279px">
            <Image height="173px" src="../images/Europa/horlanda.png" />
            <Box
              background="#FFFFFF"
              height="106px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              boxSizing="border-box"
              borderRadius="4px"
            >
              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="18px"
                fontFamily="Barlow"
                fontSize="20px"
                fontWeight="600"
                lineHeight="25px"
              >
                Amsterdã
              </Text>

              <Text
                position="absolute"
                paddingLeft="24px"
                paddingTop="55px"
                fontFamily="Barlow"
                fontSize="16px"
                fontWeight="500"
                lineHeight="26px"
                color="#999999"
              >
                Holanda
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
