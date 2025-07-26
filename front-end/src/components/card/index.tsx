import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  Box
} from "@chakra-ui/react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CatalogItem } from "../../types/products";
import { isAuthenticated } from "../../utils/auth";
import { useShoppingCart } from "./../../context/ShoppingCartContext";

function formatarPreco(preco: number) {
  return preco.toFixed(2).replace('.', ',');
}

export const Card = ({ id, name, image, details, price }: CatalogItem) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const navigate = useNavigate();

  return (
    <Flex
      flexDirection={{
        base: "column",
        md: "row",
        lg: "row",
      }}
      p="2rem"
      maxW="600px"
      gap={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        borderRadius="full"
        boxSize="200px"
        src={image}
        alt={image}
        objectFit="cover"
      />
      <Flex
        gap={1}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box w="100%" justifyContent="space-between">
          <Text fontWeight="bold">{name}</Text>
          <Text fontWeight="bold">R$ {formatarPreco(price)}</Text>
        </Box>
        <Text align="justify">{details}</Text>
        {quantity >= 1 ? (
          <>
            <HStack>
              <IconButton
                aria-label="decrease"
                variant="ghost"
                color="primary"
                icon={<FiMinus />}
                onClick={() => decreaseCartQuantity(id)}
              />
              <Text>{quantity}</Text>
              <IconButton
                aria-label="increase"
                variant="ghost"
                color="primary"
                icon={<FiPlus />}
                onClick={() => increaseCartQuantity(id)}
              />
              <IconButton
                aria-label="remove"
                colorScheme="red"
                icon={<FiTrash2 />}
                onClick={() => removeFromCart(id)}
              />
            </HStack>
          </>
        ) : (
          <>
            <Button
              colorScheme="red"
              color="white"
              onClick={() => {
                if (!isAuthenticated()) {
                  navigate("/login");
                } else {
                  increaseCartQuantity(id);
                }
              }}
            >
              Adicionar ao carrinho
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
