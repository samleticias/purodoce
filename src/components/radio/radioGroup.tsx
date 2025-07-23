import {
  Box,
  RadioGroup as ChakraRadioGroup,
  Stack,
  Radio,
  useRadioGroup,
} from "@chakra-ui/react";
import { RadioCard } from "./radioButton";

interface Props {
  options: string[];
}

export const RadioGroup = ({ options }: Props) => {
  const { getRootProps, getRadioProps } = useRadioGroup();

  const group = getRootProps();

  return (
    <Stack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Stack>
  );
};
