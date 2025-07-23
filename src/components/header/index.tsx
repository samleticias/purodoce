import {
  Box,
  Flex,
  Text,
  HStack,
  useMediaQuery,
  Image,
  Button as ChakraButton,
  IconButton,
  useDisclosure,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { Menu } from "../menu";
import logo from "../../assets/logo-puro-doce.svg";
import { Button } from "../button";
import { FiShoppingCart } from "react-icons/fi";
import { Cart } from "../cart";
import { useShoppingCart } from './../../context/ShoppingCartContext';

const NavButtons = () => {
  return (
    <HStack spacing={4}>
      <Button
        label="Home"
        link="/"
        variant="outline"
        colorScheme="whiteAlpha"
        color="white"
      />
      <Button
        label="About"
        variant="outline"
        colorScheme="whiteAlpha"
        color="white"
      />
    </HStack>
  );
};

export default function Header() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");

  const { cartQuantity } = useShoppingCart()

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Cart isOpen={isOpen} onClose={onClose} />
      <Flex
        w={{
          base: "425px",
          md: "720px",
          lg: "1080px",
        }}
        justifyContent="space-between"
        alignItems="center"
        p="1rem"
      >
        <HStack>
          <Image maxW="50px" src={logo} alt="PuroDoce" objectFit="cover" />
          <Text
            pb={{
              base: "0.5rem",
              md: "0px",
              lg: "0px",
            }}
            size="lg"
            color="white"
            fontWeight="bold"
          >
            PuroDoce
          </Text>
        </HStack>
        <HStack>
          <HStack>
            {isMobile ? (
              <Menu
                options={[
                  { label: "Home", link: "/" },
                  { label: "About", link: "/about" },
                ]}
              />
            ) : (
              <NavButtons />
            )}
          </HStack>
          <Box as="button" onClick={onOpen}>
          <Avatar bg="transparent" icon={<FiShoppingCart color="#fff" />}>
            <AvatarBadge border="none" color="white">
              {cartQuantity ? cartQuantity : <></>}
            </AvatarBadge>
          </Avatar>
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
