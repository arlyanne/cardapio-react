import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";

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
      <Flex>
        <Flex p="2" align={"center"}>
          <>
            <HamburgerIcon mr={5} fontSize={"20"} cursor={"pointer"} />
            <Heading size={"md"}>Cardápio</Heading>
          </>
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
