import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro ao registrar.");

      navigate("/login");
    } catch (err: any) {
      setErro(err.message);
    }
  };

  return (
    <VStack spacing={6} maxW="600px" w="100%" minW="300px" mx="auto" mt="6" p="4">

      {erro && <Text color="red.500" fontSize="md">{erro}</Text>}

      <FormControl>
        <FormLabel fontSize="lg">Nome</FormLabel>
        <Input
          size="lg"
          fontSize="md"
          w="100%"
          minW="280px"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="lg">Email</FormLabel>
        <Input
          size="lg"
          fontSize="md"
          type="email"
          w="100%"
          minW="280px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="lg">Senha</FormLabel>
        <Input
          size="lg"
          fontSize="md"
          type="password"
          w="100%"
          minW="280px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
      </FormControl>

      <Button
        colorScheme="teal"
        size="lg"
        fontSize="lg"
        w="100%"
        minW="280px"
        onClick={handleSubmit}
      >
        Cadastrar
      </Button>

      <Text>
        Já tem uma conta?{" "}
        <Link as={RouterLink} to="/login" color="teal.500" fontWeight="bold">
          Entre aqui
        </Link>
      </Text>
    </VStack>
  );
}