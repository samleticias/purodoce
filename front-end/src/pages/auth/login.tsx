import { VStack, Text } from "@chakra-ui/react";
import LoginForm from "../../components/auth/login-form";

export default function LoginPage() {
  return (
    <VStack mt={10}>
      <Text fontSize="2xl">Login</Text>
      <LoginForm />
    </VStack>
  );
}
