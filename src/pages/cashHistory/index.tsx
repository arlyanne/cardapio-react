import {
    Box,
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
import { useState } from "react";
import ModalCloseCashier from "./components/ModalCloseCashier";
import ModalOpenCashier from "./components/ModalOpenCashier";
import ModalCashierDetail from "./components/ModalCashierDetail";

  
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
  
  export default function CashHistory() {
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
           Histórico de Caixa
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
                      <Th>Data</Th>
                      <Th>Hora</Th>
                      <Th>Valor Inicial</Th>
                      <Th>Responsável</Th>
                      <Th>Valor Fechamento</Th>
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
          <ModalOpenCashier
              isOpen={openModalCashier}
               handleClose={handleOpenModalCashier}
          />
          <ModalCashierDetail
              isOpen={openModalCashierDetail}
              handleClose={handleOpenModalCashierDetail} 
          />
          <ModalCloseCashier
              isOpen={closeModalCashier}
              handleClose={handleCloseModalCashier}
          />
        </Box>
      </Box>
    );
  }
  