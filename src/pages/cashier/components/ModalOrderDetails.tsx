import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

const mockData = [
  {
    id: 1,
    description: "Hamburguer",
    quantity: 2,
    unitValue: "R$ 50,00",
    totalValue: "R$ 100,00",
  },
  {
    id: 2,
    description: "Batata",
    quantity: 5,
    unitValue: "R$ 30,00",
    totalValue: "R$ 150,00",
  },
  {
    id: 3,
    description: "Milk-Shake",
    quantity: 1,
    unitValue: "R$ 120,00",
    totalValue: "R$ 120,00",
  },
  {
    id: 4,
    description: "Cachorro-Quente",
    quantity: 3,
    unitValue: "R$ 75,00",
    totalValue: "R$ 225,00",
  },
  {
    id: 5,
    description: "Pastel",
    quantity: 10,
    unitValue: "R$ 20,00",
    totalValue: "R$ 200,00",
  },
];

export default function ModalOrderDetails({ isOpen, handleClose }: Props) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent maxWidth="70%">
          <ModalCloseButton />
          <ModalBody bg="#ededed" pb={6}>
            <Box>
              <Flex alignItems={"center"}>
                <Heading as="h4" size={"md"}>
                  Detalhes Pedido {""}
                </Heading>
                <Spacer />
              </Flex>
              <Box borderRadius={5} mt={5} bg={"white"}>
                <Card>
                  <CardBody>
                    <TableContainer>
                      <Table variant={"simple"}>
                        <Thead>
                          <Tr>
                            <Th>Descrição</Th>
                            <Th>Quantidade</Th>
                            <Th>Valor Unitário</Th>
                            <Th>Valor Total</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {mockData.map((item) => (
                            <Tr key={item.id}>
                              <Td>{item.description}</Td>
                              <Td>{item.quantity}</Td>
                              <Td>{item.unitValue}</Td>
                              <Td>{item.totalValue}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                      {/* Componente de páginação */}
                    </TableContainer>
                  </CardBody>
                </Card>
              </Box>
              <Box mt={5}>
                <Flex mt={2} alignItems="center">
                  <Box fontWeight="bold" mr={4}>Valor total R$ 500,00</Box>
                  <Box mr={4}>Pagamento PIX: R$ 100,00</Box>
                  <Box mr={4}>Pagamento Cartão: R$ 400,00</Box>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
