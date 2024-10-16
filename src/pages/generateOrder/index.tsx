import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Spacer,
  SimpleGrid,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { MdAdd, MdDehaze, MdDisabledByDefault } from "react-icons/md";
import ModalOpenGenerateOrder from "./components/ModalOpenGenerateOrder";
import ModalCloseGenerateOrder from "./components/ModalCloseGenerateOrder";
import { useState } from "react";
import ModalOpenDetailGenerateOrder from "./components/ModalOpenDetailGenerateOrder";

const mockData = [
  {
    id: 1,
    table: "Mesa 1",
    order: "Pizza Margherita",
    paymentMethod: "Cartão de Crédito",
    status: "Pago",
    totalValue: "R$ 45,90",
  },
  {
    id: 2,
    table: "Mesa 2",
    order: "Hambúrguer Duplo",
    paymentMethod: "Dinheiro",
    status: "Pendente",
    totalValue: "R$ 29,90",
  },
  {
    id: 3,
    table: "Mesa 3",
    order: "Lasanha à Bolonhesa",
    paymentMethod: "Pix",
    status: "Pago",
    totalValue: "R$ 38,50",
  },
  {
    id: 4,
    table: "Mesa 4",
    order: "Salada Caesar",
    paymentMethod: "Cartão de Débito",
    status: "Pago",
    totalValue: "R$ 22,00",
  },
  {
    id: 5,
    table: "Mesa 5",
    order: "Sopa de Legumes",
    paymentMethod: "Dinheiro",
    status: "Pendente",
    totalValue: "R$ 18,00",
  },
];

export function GenerateOrder() {
  const [modalOpenGenerateOrder, setModalOpenGenerateOrder] = useState(false);
  const [modalCloseGenerateOrder, setModalCloseGenerateOrder] = useState(false);
  const [modalOpenDetailGenerateOrder, setModalOpenDetailGenerateOrder] =
    useState(false);

  const handleModalOpenGenerateOrder = () =>
    setModalOpenGenerateOrder(!modalOpenGenerateOrder);
  const handleModalCloseGenerateOrder = () =>
    setModalCloseGenerateOrder(!modalCloseGenerateOrder);
  const handleModalOpenDetailGenerateOrder = () =>
    setModalOpenDetailGenerateOrder(!modalOpenDetailGenerateOrder);

  return (
    <Box padding={100}>
      <Flex alignItems={"center"}>
        <Heading as="h4" size={"md"}>
          Pedidos
        </Heading>
        <Spacer />
        <Button
          onClick={handleModalOpenGenerateOrder}
          leftIcon={<MdAdd />}
          bg="#480e1f"
          color="#fff"
          _hover={{ bg: "#480e1f" }}
          variant="solid"
          ml={2}
        >
          Novo Pedido
        </Button>
      </Flex>

      <Box borderRadius={5} mt={5}>
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {mockData.map((item) => (
            <Card
              key={item.id}
              border="1px solid #E2E8F0"
              boxShadow="md"
              borderRadius="md"
              _hover={{ boxShadow: "lg" }}
            >
              <CardBody>
                <Flex justifyContent="space-between" mb={2}>
                  <Text fontWeight="bold">Mesa/Cliente: {item.table}</Text>
                </Flex>

                <Flex mt={4} justifyContent="flex-end">
                  <Tooltip label="Detalhes Pedido">
                    <IconButton
                      onClick={handleModalOpenDetailGenerateOrder}
                      bg="white"
                      aria-label="Ver Detalhes"
                      color="#480e1f"
                      icon={<MdDehaze />}
                      mr={2}
                    />
                  </Tooltip>
                  <Tooltip label="Cancelar Pedido">
                    <IconButton
                      onClick={handleModalCloseGenerateOrder}
                      bg="white"
                      aria-label="Cancelar Pedido"
                      color="#480e1f"
                      icon={<MdDisabledByDefault />}
                    />
                  </Tooltip>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <ModalOpenGenerateOrder
        isOpen={modalOpenGenerateOrder}
        handleClose={handleModalOpenGenerateOrder}
      />
      <ModalCloseGenerateOrder
        isOpen={modalCloseGenerateOrder}
        handleClose={handleModalCloseGenerateOrder}
      />
      <ModalOpenDetailGenerateOrder
        isOpen={modalOpenDetailGenerateOrder}
        handleClose={handleModalOpenDetailGenerateOrder}
      />
    </Box>
  );
}
