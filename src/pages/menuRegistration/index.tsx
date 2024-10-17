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
import { useEffect, useState } from "react";
import { MdAdd, MdCreate, MdDisabledByDefault } from "react-icons/md";
import OpenModalMenu from "./components/OpenModalMenu";
import OpenModalDetailMenu from "./components/OpenModalDetailMenu";
import CloseModalMenu from "./components/CloseModalMenu";
import axios from "axios";
import { RegistrationMenu } from "./formSchema";

export function MenuRegistration() {

  const [openModalMenu, setOpenModalMenu] = useState<boolean>(false);
  const [openModalDetailMenu, setOpenModalDetailMenu] = useState<boolean>(false);
  const [closeModalMenu, setCloseModalMenu] = useState<boolean>(false);
  const [listRegistrationMenu, setListRegistrationMenu] = useState<RegistrationMenu[]>([])

  const handleOpenModalMenu = () => {
    setOpenModalMenu(!openModalMenu);
  };
  const handleModalDetailMenu = () => {
    setOpenModalDetailMenu(!openModalDetailMenu);
  };
  const handleCloseModalMenu = () => {
    setCloseModalMenu(!closeModalMenu);
  };

  const handleListRegistrationMenu = async () => {
    try {
      const resp = await axios.get("http://localhost:3001/product")
        setListRegistrationMenu(resp.data)
    }catch(error) {
      console.error("Error ao buscar lista de produtos cadastrados", error)
    }
  } 

  useEffect(() => {
    handleListRegistrationMenu()
  }, [])
  
  return (
    <Box padding={100}>
      <Flex alignItems={"center"}>
        <Heading as="h4" size={"md"}>
          Cadastro Cardápio
        </Heading>
        <Spacer />
        <Button
          onClick={handleOpenModalMenu}
          leftIcon={<MdAdd />}
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
                  {listRegistrationMenu.map((item) => (
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
          updateProductList={handleListRegistrationMenu}
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
