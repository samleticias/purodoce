import {
  Box,
  Button as ChakraButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Button } from "../button";
import { CartItem } from "../cartItem";
import { useShoppingCart } from "./../../context/ShoppingCartContext";
import { items } from "./../../utils/catalogItems";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: Props) => {
  const { cartItems } = useShoppingCart();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Carrinho</DrawerHeader>

        <DrawerBody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} id={item.id} quantity={item.quantity} />
            ))
          ) : (
            <Flex justifyContent="center" alignItems="center">
              <Text opacity={0.6}>Não há produtos no carrinho.</Text>
            </Flex>
          )}
        </DrawerBody>

        <DrawerFooter>
          {cartItems.length > 0 && (
            <Stack w="100%">
              <Flex w="100%" justifyContent="flex-end">
                <Text fontWeight="bold" fontSize={20}>
                Subtotal:{' '}
                R$
                {
                  cartItems
                    .reduce((total, cartItem) => {
                      const item = items.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                    .toFixed(2)
                    .replace('.', ',')
                }
              </Text>
              </Flex>
              <Flex w="100%" justifyContent="flex-end" alignItems="flex-end">
                <HStack>
                  <Button label="Cancelar" onClick={onClose} />
                  <Button
                    label="Finalizar"
                    link="/checkout"
                    color="white"
                    colorScheme="red"
                    onClick={onClose}
                  />
                </HStack>
              </Flex>
            </Stack>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
