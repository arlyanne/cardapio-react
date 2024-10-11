import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Heading, Link, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      zIndex={1}
      mb={5}
      bg="#480e1f"
      position={"fixed"}
      w={"100%"}
      p={2}
      color={"white"}
    >
      <Flex align={"center"}>
        <Flex p="2" align={"center"}>
            {/* <HamburgerIcon mr={5} fontSize={"20"} cursor={"pointer"} /> */}
            <Heading size={"md"}>Cardápio</Heading>
        </Flex>
        <Spacer />
        <Flex justify="space-between" >
          <Link href={"/cashier"} mr={5}>
            Caixa
          </Link>
          <Link href={"/cash-history"} mr={5}>
            Histórico de Caixa
          </Link>
          <Link href={"/menu-registration"} mr={5}>
            Cadastro Cardápio
          </Link>
          <Link href={"/cashier"} mr={5}>
            Gerar Pedidos
          </Link>
          <Link href={"/cashier"} mr={5}>
            Gestão de Estoque
          </Link>
        </Flex>
        <Spacer />
        <Menu isLazy>
          <MenuButton>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
            <MenuItem color="#480e1f">
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
