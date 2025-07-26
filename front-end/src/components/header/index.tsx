import {
  Box,
  Flex,
  Text,
  HStack,
  useMediaQuery,
  Image,
  Avatar,
  AvatarBadge,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu } from "../menu";
import logo from "../../assets/logo-puro-doce.svg";
import { Button } from "../button";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/auth";
import { Cart } from "../cart";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const NavButtons = () => {
  return (
    <HStack spacing={4}>
      <Button
        label="Início"
        link="/"
        variant="outline"
        colorScheme="whiteAlpha"
        color="white"
      />
      <Button
        label="Sobre"
        link="/about"
        variant="outline"
        colorScheme="whiteAlpha"
        color="white"
      />
    </HStack>
  );
};

export default function Header() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const { cartQuantity } = useShoppingCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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

        <HStack
          onClick={handleGoHome}
          cursor="pointer"          
          userSelect="none"        
        >
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

        <HStack spacing={4}>
          {isMobile ? (
            <Menu
              options={[
                { label: "Início", link: "/" },
                { label: "Sobre", link: "/about" },
              ]}
            />
          ) : (
            <NavButtons />
          )}

          {!isAuthenticated() ? (
            <Button
              label="Login"
              link="/login"
              variant="outline"
              colorScheme="whiteAlpha"
              color="white"
            />
          ) : (
            <Button
              label="Sair"
              variant="solid"
              colorScheme="red"
              onClick={handleLogout}
              _hover={{ bg: "red.600" }} 
            />
          )}

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