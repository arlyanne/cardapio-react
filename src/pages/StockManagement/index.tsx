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
import { MdAdd, MdEdit, MdDelete, MdDisabledByDefault } from "react-icons/md";
import ModalOpenStockManagement from "./components/ModalOpenStockManagement";
import ModalOpenEditStockManagement from "./components/ModalOpenEditStockManagement";
import ModalCloseStockManagement from "./components/ModalCloseStockManagement";

const mockStockData = [
  { id: 1, image: "", productName: "Pizza Margherita", category: "Pizzas", quantity: 15, price: "R$ 45,90" },
  { id: 2, image:"", productName: "Hambúrguer Duplo", category: "lanches", quantity: 8, price: "R$ 29,90" },
  { id: 3, image:"", productName: "Lasanha à Bolonhesa", category: "Massas", quantity: 5, price: "R$ 38,50" },
  { id: 4, image:"", productName: "Refrigerente lata", category: "Bebidas", quantity: 12, price: "R$ 5,00" },
];

export function StockManagement() {

  const [modalOpenStockManagement, setModalOpenStockManagement] = useState<boolean>(false)
  const [modalOpenEditStockManagement, setModalOpenEditStockManagement] = useState<boolean>(false)
  const [modalCloseStockManagement, setModalCloseStockManagement] = useState<boolean>(false)
  const handleModalOpenStockManagement = () => {
    setModalOpenStockManagement(!modalOpenStockManagement)
  }
  const handleModalOpenEditStockManagement = () => {
    setModalOpenEditStockManagement(!modalOpenEditStockManagement)
  }
  const handleModalCloseStockManagement = () => {
    setModalCloseStockManagement(!modalCloseStockManagement)
  }

  return (
    <Box padding={100}>
      <Flex alignItems={"center"}>
        <Heading as="h4" size={"md"}>
          Gestão de Estoque
        </Heading>
        <Spacer />
        <Button
          onClick={handleModalOpenStockManagement}
          leftIcon={<MdAdd />}
          bg="#480e1f"
          color="#fff"
          _hover={{ bg: "#480e1f" }}
          variant="solid"
          ml={2}
        >
          Adicionar Produto
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
                    <Th>Categoria</Th>
                    <Th>Quantidade</Th>
                    <Th>Preço Unitário</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {mockStockData.map((item) => (
                    <Tr key={item.id} _hover={{ bg: "#d8d2cb" }}>
                      <Td>{item.image}</Td>
                      <Td>{item.productName}</Td>
                      <Td>{item.category}</Td>
                      <Td>{item.quantity}</Td>
                      <Td>{item.price}</Td>
                      <Td>
                        <Tooltip label="Editar Produto">
                          <IconButton
                            onClick={handleModalOpenEditStockManagement}
                            bg={"white"}
                            aria-label={"Editar"}
                            color={"#480e1f"}
                            icon={<MdEdit />}
                            mr={2}
                          ></IconButton>
                        </Tooltip>
                        <Tooltip label="Desativar Produto">
                          <IconButton
                            onClick={handleModalCloseStockManagement}
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
        <ModalOpenStockManagement
          isOpen={modalOpenStockManagement}
          handleClose={handleModalOpenStockManagement}
        />
        <ModalOpenEditStockManagement
          isOpen={modalOpenEditStockManagement}
          handleClose={handleModalOpenEditStockManagement}
        />
        <ModalCloseStockManagement 
          isOpen={modalCloseStockManagement}
          handleClose={handleModalCloseStockManagement}
        />
      </Box>
    </Box>
  );
}
