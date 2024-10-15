import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCreate, MdDisabledByDefault } from "react-icons/md";
import OpenModalMenu from "./components/OpenModalMenu";
import OpenModalDetailMenu from "./components/OpenModalDetailMenu";
import CloseModalMenu from "./components/CloseModalMenu";

const mockData = [
  {
    id: 1,
    product: "Pizza Margherita",
    description:
      "Pizza tradicional com molho de tomate, mussarela e manjericão",
    category: "Pizzas",
    image: "",
    price: "R$ 35,00",
  },
  {
    product: "Hambúrguer Artesanal",
    description: "Pão de brioche, carne 180g, queijo cheddar, alface e tomate",
    category: "Lanches",
    image: "",
    price: "R$ 25,00",
  },
  {
    product: "Sushi Combo 15 peças",
    description: "Combinado de sushi com 5 nigiris, 5 uramakis e 5 sashimis",
    category: "Sushi",
    image: "",
    price: "R$ 45,00",
  },
  {
    product: "Salada Caesar",
    description: "Alface americana, frango grelhado, croutons e molho Caesar",
    category: "Saladas",
    image: "",
    price: "R$ 22,00",
  },
  {
    product: "Lasanha Bolonhesa",
    description: "Lasanha ao molho bolonhesa com queijo parmesão gratinado",
    category: "Massas",
    image: "",
    price: "R$ 30,00",
  },
  {
    product: "Suco de Laranja",
    description: "Suco natural de laranja gelado",
    category: "Bebidas",
    image: "",
    price: "R$ 8,00",
  },
];

export function MenuRegistration() {
  const [openModalMenu, setOpenModalMenu] = useState<boolean>(false);
  const [openModalDetailMenu, setOpenModalDetailMenu] =
    useState<boolean>(false);
  const [closeModalMenu, setCloseModalMenu] = useState<boolean>(false);

  const handleOpenModalMenu = () => {
    setOpenModalMenu(!openModalMenu);
  };
  const handleModalDetailMenu = () => {
    setOpenModalDetailMenu(!openModalDetailMenu);
  };
  const handleCloseModalMenu = () => {
    setCloseModalMenu(!closeModalMenu);
  };

  return (
    <Box padding={100}>
      <Flex alignItems={"center"}>
        <Heading as="h4" size={"md"}>
          Cadastro Cardápio
        </Heading>
        <Spacer />
        <Button
          onClick={handleOpenModalMenu}
          bg="#480e1f"
          color="#fff"
          _hover={{ bg: "#480e1f" }}
          variant="solid"
          ml={2}
        >
          Novo Produto
        </Button>
      </Flex>
      <Box borderRadius={5} mt={5} bg={"white"}>
        <Card>
          <CardBody>
            <TableContainer>
              <Table variant={"simple"}>
                <Thead>
                  <Tr>
                    <Th>Imagem</Th>
                    <Th>Produto</Th>
                    <Th>Descrição</Th>
                    <Th>Categoria</Th>
                    <Th>Preço Unitário</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {mockData.map((item) => (
                    <Tr key={item.id} _hover={{ bg: "#d8d2cb" }}>
                      <Td>{item.image}</Td>
                      <Td>{item.product}</Td>
                      <Td>{item.description}</Td>
                      <Td>{item.category}</Td>
                      <Td>{item.price}</Td>
                      <Td>
                        <Tooltip label="Detalhe">
                          <IconButton
                            onClick={handleModalDetailMenu}
                            bg={"white"}
                            aria-label={"Detalhe"}
                            color={"#480e1f"}
                            icon={<MdCreate />}
                            mr={2}
                          ></IconButton>
                        </Tooltip>
                        <Tooltip label="Desativar">
                          <IconButton
                            onClick={handleCloseModalMenu}
                            bg={"white"}
                            aria-label={"Desativar"}
                            color={"#480e1f"}
                            icon={<MdDisabledByDefault />}
                            mr={2}
                          ></IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              {/* Componente de páginação */}
            </TableContainer>
          </CardBody>
        </Card>
        <OpenModalMenu
          isOpen={openModalMenu}
          handleClose={handleOpenModalMenu}
        />
        <OpenModalDetailMenu
          isOpen={openModalDetailMenu}
          handleClose={handleModalDetailMenu}
        />
        <CloseModalMenu
          isOpen={closeModalMenu}
          handleClose={handleCloseModalMenu}
        />
      </Box>
    </Box>
  );
}
