import { VStack, Text } from "@chakra-ui/react";
import RegisterForm from "../../components/auth/register-form";

export default function RegisterPage() {
  return (
    <VStack mt={10}>
      <Text fontSize="2xl">Cadastro</Text>
      <RegisterForm />
    </VStack>
  );
}
