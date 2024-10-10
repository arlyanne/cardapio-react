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

import { MdClose, MdDehaze } from "react-icons/md";
import OpenModalCashier from "./modal/OpenModalCashier";
import OpenModalCashierDetail from "./modal/OpenModalCashierDetail";
import CloseModalCashier from "./modal/CloseModalCashier";
import { useState } from "react";


const mockData = [
  {
    id: 1,
    date: "22/12/2024",
    time: "18:59",
    initialValue: "R$ 10,00",
    responsible: "Funcionário1",
  },
  {
    id: 2,
    date: "23/12/2024",
    time: "09:30",
    initialValue: "R$ 20,00",
    responsible: "Funcionário2",
  },
  {
    id: 3,
    date: "24/12/2024",
    time: "14:00",
    initialValue: "R$ 30,00",
    responsible: "Funcionário3",
  },
];

export default function Cashier() {
  const [openModalCashier, setOpenModalCashier] = useState<boolean>(false);
  const [openModalCashierDetail, setOpenModalCashierDetail] = useState<boolean>(false);
  const [closeModalCashier, setCloseModalCashier] = useState<boolean>(false);
  
  const handleOpenModalCashier = () => {
    setOpenModalCashier(!openModalCashier);
  };

  const handleOpenModalCashierDetail = () => {
    setOpenModalCashierDetail(!openModalCashierDetail);
  };

  const handleCloseModalCashier = () => {
    setCloseModalCashier(!closeModalCashier);
  };

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
          variant="outline"
          ml={2}
        >
         Novo Caixa
        </Button>
      </Flex>
      <Box borderRadius={5} mt={5} bg={"white"}>
        <Card>
          <CardBody>
            <TableContainer>
              <Table variant={"simple"}>
                <Thead>
                  <Tr>
                    <Th>Data</Th>
                    <Th>Hora</Th>
                    <Th>Valor Inicial</Th>
                    <Th>Responsável</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {mockData.map((item) => (
                    <Tr key={item.id} _hover={{ bg: "#d8d2cb" }}>
                      <Td>{item.date}</Td>
                      <Td>{item.time}</Td>
                      <Td>{item.initialValue}</Td>
                      <Td>{item.responsible}</Td>
                      <Td>
                        <Tooltip label="Detalhe">
                          <IconButton
                            onClick={handleOpenModalCashierDetail}
                            bg={"white"}
                            aria-label={"Detalhe"}
                            color={"#480e1f"}
                            icon={<MdDehaze />}
                            mr={2}
                          ></IconButton>
                        </Tooltip>
                        <Tooltip label="Fechar Caixa">
                          <IconButton
                            onClick={handleCloseModalCashier}
                            bg={"white"}
                            aria-label={"Fechar Caixa"}
                            color={"#480e1f"}
                            icon={<MdClose />}
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
        <OpenModalCashier
            isOpen={openModalCashier}
             handleClose={handleOpenModalCashier}
        />
        <OpenModalCashierDetail
            isOpen={openModalCashierDetail}
            handleClose={handleOpenModalCashierDetail} 
        />
        <CloseModalCashier
            isOpen={closeModalCashier}
            handleClose={handleCloseModalCashier}
        />
      </Box>
    </Box>
  );
}
