import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import { CartItem } from "../components/cartItem";
import { items } from "../utils/catalogItems";
import { PersonalData } from "../components/personalData";
import { useNavigate } from "react-router-dom";
import { RadioGroup } from "../components/radio/radioGroup";
import { FiCheckCircle } from "react-icons/fi";
import { Footer } from "../components/footer";

const Finish = () => (
  <VStack w="100%" alignItems="center">
    <Icon w={20} h={20} as={FiCheckCircle} color="green" />
    <Text fontSize={20}>
      Parabéns pela sua compra! Seu pedido já está sendo preparado.
    </Text>
  </VStack>
);

function Checkout() {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((total, cartItem) => {
    const item = items.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const [step, setStep] = useState(1);

  function handleGoNextStep() {
    if (step === 4) return;
    setStep(step + 1);
  }

  function handleGoPrevStep() {
    if (step === 1) {
      navigate("/");
    }
    setStep(step - 1);
  }

  return (
    <Flex
      maxW={{
        base: "425px",
        md: "720px",
        lg: "1080px",
      }}
      w="100%"
      m="1rem"
      h="80vh"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize={20} fontWeight="bold">
          {step === 1
            ? "Confirme os Itens"
            : step === 2
            ? "Dados Pessoais"
            : step === 3
            ? "Pagamento"
            : "Pedido Finalizado"}
        </Text>
        <CircularProgress value={step} max={4} color="primary" />
      </Flex>

      <Flex
        w="100%"
        mt="1rem"
        flexDirection="column"
        justifyContent="center"
        overflow="auto"
      >
        {step === 1 && (
          <Stack>
            <Box w="100%">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  quantity={item.quantity}
                  hasRemoveButton={false}
                />
              ))}
            </Box>
            <Text w="100%" fontWeight="bold" fontSize={20} align="end">
              Subtotal: R${total}
            </Text>
          </Stack>
        )}
        {step === 2 && <PersonalData />}
        {step === 3 && (
          <VStack w="100%">
            <Box w="100%">
              <RadioGroup options={["Boleto", "Cartão de Crédito", "PIX"]} />
            </Box>
            <Text w="100%" fontWeight="bold" fontSize={20} align="end">
              Subtotal: R${total}
            </Text>
          </VStack>
        )}
        {step === 4 && <Finish />}
      </Flex>

      <HStack  w="100%" mt="1rem" justifyContent="flex-end">
        <Button onClick={handleGoPrevStep}>
          {step === 1 ? "Cancelar" : "Voltar"}
        </Button>
        <Button
          type="submit"
          color="white"
          colorScheme="red"
          onClick={handleGoNextStep}
        >
          Próximo
        </Button>
      </HStack>

      <Footer />
    </Flex>
  );
}

export default Checkout;
