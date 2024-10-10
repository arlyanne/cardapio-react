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
    id: "1",
    date: "2024-10-10",
    time: "14:30",
    attendant: "John Smith",
    table: 5,
    paymentMethod: "Cartão Crédito",
    amount: 45.5,
  },
  {
    id: "2",
    date: "2024-10-10",
    time: "15:45",
    attendant: "Emily Davis",
    table: 12,
    paymentMethod: "Dinheiro",
    amount: 22.0,
  },
  {
    id: "3",
    date: "2024-10-10",
    time: "17:20",
    attendant: "Michael Johnson",
    table: 8,
    paymentMethod: "Cartão Débito",
    amount: 60.75,
  },
  {
    id: "4",
    date: "2024-10-11",
    time: "12:10",
    attendant: "Jessica Brown",
    table: 3,
    paymentMethod: "Pix",
    amount: 30.25,
  },
  {
    id: "5",
    date: "2024-10-11",
    time: "13:50",
    attendant: "David Wilson",
    table: 9,
    paymentMethod: "Pix",
    amount: 85.1,
  },
];

export default function CashierDetail({ isOpen, handleClose }: Props) {
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
                  Detalhes Caixa
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
                            <Th>Mesa</Th>
                            <Th>Data</Th>
                            <Th>Hora</Th>
                            <Th>Atendente</Th>
                            <Th>Forma de Pagamento</Th>
                            <Th>Valor</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {mockData.map((item) => (
                            <Tr key={item.id}>
                              <Td>{item.table}</Td>
                              <Td>{item.date}</Td>
                              <Td>{item.time}</Td>
                              <Td>{item.attendant}</Td>
                              <Td>{item.paymentMethod}</Td>
                              <Td>{item.amount}</Td>
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
                <Heading as="h5" size="sm">
                  Resumo de Recebimentos:
                </Heading>
                <Flex mt={2} alignItems="center">
                  <Box mr={4}>Dinheiro: R$ 50,00</Box>
                  <Box mr={4}>PIX: R$ 25,00</Box>
                  <Box mr={4}>Cartão: R$ 45,00</Box>
                  <Box fontWeight="bold">Total: R$ 120,00</Box>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
