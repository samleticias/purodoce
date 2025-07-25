import { Flex, VStack } from "@chakra-ui/react";
import { Footer } from "../components/footer";

function About() {
  return (
    <VStack>
      <Flex height="80vh" justifyContent="center" alignItems="center">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSppj6y7Ns8HoHl0LePMOsJ6Pn6SeyEOSdlcdgTm7LEG8nUkf3zombBTTZmjXe8QEYZezThK6qN69kC/embed?start=true&loop=true&delayms=3000"
          width="960"
          height="569"
        />
      </Flex>
      <Footer />
    </VStack>
  );
}

export default About;
