import { Flex, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { items } from "../../utils/catalogItems";
import { useShoppingCart } from "./../../context/ShoppingCartContext";

interface Props {
  id: number;
  quantity: number;
  hasRemoveButton?: boolean
}

export const CartItem = ({ id, quantity, hasRemoveButton = true }: Props) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <HStack w="100%" m="1rem 0">
      <Image
        borderRadius="full"
        boxSize="80px"
        src={item.image}
        alt={item.image}
        objectFit="cover"
      />
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Stack>
          <HStack>
            <Text fontWeight="bold">{item.name}</Text>
            <Text fontSize={12} opacity={0.8}>
              x{quantity}
            </Text>
          </HStack>
          <Text fontWeight="bold" opacity={0.6}>
            R$ {item.price.toFixed(2).replace('.', ',')}
          </Text>
        </Stack>
        <Text>
          R$ {(item.price * quantity).toFixed(2).replace('.', ',')}
        </Text>
      </Flex>
      {hasRemoveButton && (
        <IconButton
          aria-label="remove"
          colorScheme="red"
          icon={<FiTrash2 />}
          onClick={() => removeFromCart(id)}
        />
      )}
    </HStack>
  );
};
