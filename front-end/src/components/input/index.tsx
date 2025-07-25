import { Text, VStack, Input as ChakraInput, InputProps } from "@chakra-ui/react"
import InputMask from "react-input-mask"

interface Props extends InputProps {
  label: string
  type: string
  mask?: string
  required?: boolean
}

export const Input = ({ label, type, mask, required = false, ...rest }: Props) => {
  return (
    <VStack w="100%">
      <Text w="100%" align="start">{label}</Text>
      {mask ? (
        <ChakraInput
          as={InputMask}
          type={type}
          required={required}
          mask={mask}
          {...rest}
        />
      ) : (
        <ChakraInput
          type={type}
          required={required}
          {...rest}
        />
      )}
    </VStack>
  )
}