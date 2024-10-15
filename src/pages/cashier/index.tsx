import {
  Alert,
  AlertIcon,
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

import { MdDehaze } from "react-icons/md";
import OpenModalCashier from "../cashHistory/components/ModalOpenCashier";
import { useState } from "react";
import ModalOrderDetails from "./components/ModalOrderDetails";

const mockData = [
  {
    order: 1,
    time: "18:30",
    attendant: "João",
    totalValue: "R$ 22,00",
    paymentMethod: "Cartão de Débito",
  },
  {
    order: 2,
    time: "19:02",
    attendant: "Maria",
    totalValue: "R$ 10,00",
    paymentMethod: "Cartão de Crédito",
  },
  {
    order: 3,
    time: "19:22",
    attendant: "Maria",
    totalValue: "R$ 10,00",
    paymentMethod: "Cartão de Crédito",
  },
];

export default function Cashier() {
  const [openModalCashier, setOpenModalCashier] = useState<boolean>(false);
  const [openModalOrderDetail, setOpenModalOrderDetail] = useState<boolean>(false);

  const handleOpenModalCashier = () => {
    setOpenModalCashier(!openModalCashier);
  };

  const handleOpenModalOrderDetail = () => {
    setOpenModalOrderDetail(!openModalOrderDetail);
  }

  return (
    <Box padding={100}>
      <Flex alignItems={"center"}>
        <Heading as="h4" size={"md"}>
          Caixa
        </Heading>
        <Spacer />
        <Button
          onClick={handleOpenModalCashier}
           bg="#480e1f"
           color="#fff"
          _hover={{ bg: "#480e1f" }}
          variant="solid"
          ml={2}
        >
          Novo Caixa
        </Button>
      </Flex>
      <Box borderRadius={5} mt={5} bg={"white"}>
        <Card>
          <CardBody>
            {mockData.length > 0 ? (
              <TableContainer>
                <Table variant={"simple"}>
                  <Thead>
                    <Tr>
                      <Th>Pedido</Th>
                      <Th>Horário</Th>
                      <Th>Atendente</Th>
                      <Th>Valor</Th>
                      <Th>Forma de Pagamento</Th>
                      <Th>Ações</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {mockData.map((item) => (
                      <Tr key={item.order} _hover={{ bg: "#d8d2cb" }}>
                        <Td>{item.order}</Td>
                        <Td>{item.time}</Td>
                        <Td>{item.attendant}</Td>
                        <Td>{item.totalValue}</Td>
                        <Td>{item.paymentMethod}</Td>
                        <Td>
                          <Tooltip label="Detalhe">
                            <IconButton
                              onClick={handleOpenModalOrderDetail}
                              bg={"white"}
                              aria-label={"Detalhe"}
                              color={"#480e1f"}
                              icon={<MdDehaze />}
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
            ) : (
              <Alert status="info">
                <AlertIcon />
                Nenhum Caixa Aberto!
              </Alert>
            )}
          </CardBody>
        </Card>
        <OpenModalCashier
          isOpen={openModalCashier}
          handleClose={handleOpenModalCashier}
        />
      </Box>
      <ModalOrderDetails
         isOpen={openModalOrderDetail}
         handleClose={handleOpenModalOrderDetail}/>
    </Box>
  );
}
