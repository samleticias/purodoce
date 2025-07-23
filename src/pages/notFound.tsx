import { Box, Flex, Text } from "@chakra-ui/react";
import { Footer } from "../components/footer";

function NotFound() {
  return (
    <Box>
      <Flex w="100%" h="80vh" justifyContent="center" alignItems="center">
        <Text fontSize={20} fontWeight="bold">404 - Page not found</Text>
      </Flex>
      <Footer />
    </Box>
  );
}

export default NotFound;
