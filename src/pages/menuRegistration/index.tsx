import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Image,
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
import axios from "axios";
import { RegistrationMenu } from "./formSchema";
import ConfirmationModal from "../../components/ModalClose";

export function MenuRegistration() {
  const [openModalMenu, setOpenModalMenu] = useState<boolean>(false);
  const [listRegistrationMenu, setListRegistrationMenu] = useState<RegistrationMenu[]>([]);
  const [selectMenu, setSelectMenu] = useState<RegistrationMenu | null>(null);
  const [disableMenuProduct, setDisableMenuProduct] = useState(false)

  const handleOpenModalMenu = () => {
    setSelectMenu(null);
    setOpenModalMenu(true);
  };

  const handleCloseModalMenu = () => {
    setOpenModalMenu(false);
    setSelectMenu(null);
  };

  const handleModalEditMenu = (item: RegistrationMenu) => {
    setSelectMenu(item);
    setOpenModalMenu(true);
  };

  const handleDisableMenuProduct = () => {
    setDisableMenuProduct(false)
  }
  const handleOpenMenuProduct = () => {
    setDisableMenuProduct(true)
  }

  const handleConfirm = () => {
    console.log("Produto desativado!");
    handleDisableMenuProduct(); // Fecha o modal após a confirmação
  };


  // Função para listar os registros
  const handleListRegistrationMenu = async () => {
    try {
      const resp = await axios.get("http://localhost:3001/product");
      setListRegistrationMenu(resp.data);
    } catch (error) {
      console.error("Error ao buscar lista de produtos cadastrados", error);
    }
  };

  useEffect(() => {
    handleListRegistrationMenu();
  }, [selectMenu]);

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
                      <Td>
                        <Image src={item.image}>
                        </Image></Td>
                      <Td>{item.product}</Td>
                      <Td>{item.description}</Td>
                      <Td>{item.category}</Td>
                      <Td>{`R$ ${(parseFloat(item.price) || 0).toFixed(2).replace(".", ",")}`}</Td>
                      <Td>
                        <Tooltip label="Editar">
                          <IconButton
                            onClick={() => handleModalEditMenu(item)}
                            bg={"white"}
                            aria-label={"Editar"}
                            color={"#480e1f"}
                            icon={<MdCreate />}
                            mr={2}
                          />
                        </Tooltip>
                        <Tooltip label="Desativar">
                          <IconButton
                            onClick={handleOpenMenuProduct}
                            bg={"white"}
                            aria-label={"Desativar"}
                            color={"#480e1f"}
                            icon={<MdDisabledByDefault />}
                            mr={2}
                          />
                        </Tooltip>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>

        <OpenModalMenu
          isOpen={openModalMenu}
          handleClose={handleCloseModalMenu}
          updateProductList={handleListRegistrationMenu}
          editMenu={selectMenu ?? undefined}
        />
        <ConfirmationModal
          isOpen={disableMenuProduct}
          handleClose={handleDisableMenuProduct}
          onConfirm={handleConfirm}
          message="Você tem certeza que deseja desativar este produto?"
        />
      </Box>
    </Box>
  );
}