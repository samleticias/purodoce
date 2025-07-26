import { Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      maxW={{
        base: "425px",
        md: "720px",
        lg: "1080px",
      }}
      w="100%"
      justifyContent="center"
      alignItems="center"
      p="1rem"
    >
      <Text>
        Development with ❤️ by{" "}
        <Link href="https://github.com/samleticias">Sammya Letícia</Link>
      </Text>
    </Flex>
  );
};
