import { Menu as ChakraMenu, MenuButton, MenuButtonProps, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type OptionProps = {
  label: string;
  link: string;
}

interface Props extends MenuButtonProps {
  options: OptionProps[];
}

export function Menu({ options, ...rest }: Props) {
  return (
    <ChakraMenu variant="">
      <MenuButton
        as={IconButton}
        aria-label="menu"
        icon={<FiMenu color="#fff" />}
        variant="outline"
      />
      <MenuList>
        {options.map((item) => {
          return (
            <MenuItem key={item.label}>
              <Link to={item.link}>{item.label}</Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </ChakraMenu>
  );
}