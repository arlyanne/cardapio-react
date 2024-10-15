import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

const mockOrderDetails = [
  {
    id: 1,
    table: "Mesa 1",
    date: "10/10/2024",
    time: "12:30",
    attendant: "João",
    paymentMethod: "Cartão de Crédito",
    totalAmount: "R$ 45,90",
    orders: [
      { name: "Pizza Margherita", quantity: 1, price: "R$ 30,00" },
      { name: "Refrigerante", quantity: 2, price: "R$ 7,45" },
    ],
  },
];

export default function ModalOpenDetailGenerateOrder({ isOpen, handleClose }: Props) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={handleClose}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent maxWidth="70%">
        <ModalCloseButton />
        <ModalBody bg="#ededed" pb={6}>
          <Box>
            <Flex alignItems={"center"}>
              <Heading as="h4" size={"md"}>
                Detalhes do Pedido
              </Heading>
              <Spacer />
            </Flex>

            {/* Iterar sobre os pedidos */}
            {mockOrderDetails.map((order) => (
              <Box key={order.id} borderRadius={5} mt={5} bg={"white"} p={5}>
                <Heading as="h5" size="sm" mb={4}>
                  Informações do Pedido
                </Heading>
                <Text><strong>Mesa:</strong> {order.table}</Text>
                <Text><strong>Data:</strong> {order.date}</Text>
                <Text><strong>Hora:</strong> {order.time}</Text>
                <Text><strong>Atendente:</strong> {order.attendant}</Text>
                <Text><strong>Forma de Pagamento:</strong> {order.paymentMethod}</Text>
                <Text><strong>Valor Total:</strong> {order.totalAmount}</Text>
                <Box mt={5}>
                  <Heading as="h5" size="sm" mb={4}>
                    Itens do Pedido:
                  </Heading>
                  {order.orders.map((item, index) => (
                    <Box key={index} mb={3}>
                      <Text>
                        <strong>{item.name}</strong> - Quantidade: {item.quantity} - Preço: {item.price}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
            <Box mt={5}>
              <Heading as="h5" size="sm">
                Resumo de Recebimentos:
              </Heading>
              <Flex mt={2} alignItems="center">
                <Box mr={4}><strong>Dinheiro:</strong> R$ 50,00</Box>
                <Box mr={4}><strong>PIX:</strong> R$ 25,00</Box>
                <Box mr={4}><strong>Cartão:</strong> R$ 45,00</Box>
                <Box fontWeight="bold"><strong>Total:</strong> R$ 120,00</Box>
              </Flex>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
  )
}
