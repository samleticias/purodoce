import { Button as ChakraButton, ButtonProps, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props extends ButtonProps {
  label: string;
  link?: string;
}

export const Button = ({ label, link, ...rest }: Props) => {
  return (
    <ChakraButton {...rest}>
      {link ? <Link to={link}>{label}</Link> : label}
    </ChakraButton>
  );
};
