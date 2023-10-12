import { NextPage } from "next";
import { Container, Flex, Stack, Heading, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <Container maxW="1200px">
      <Flex h="80vh" alignItems="center" justifyContent="center">
        <Stack spacing="4" align="center">
          <Heading>Marketplace</Heading>
          <Button as={NextLink} href="/buy">Shop NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
