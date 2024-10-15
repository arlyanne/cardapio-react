import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

const mockData = [
  {
    id: 1,
    product: "Hamburguer Clássico",
    quantity: 2,
    unitValue: "R$ 20,00",
    totalValue: "R$ 40,00",
  },
  {
    id: 2,
    product: "Batata Frita Clássica",
    quantity: 1,
    unitValue: "R$ 10,00",
    totalValue: "R$ 10,00",
  },
  {
    id: 3,
    product: "Refrigerante Coca-Cola",
    quantity: 3,
    unitValue: "R$ 4,00",
    totalValue: "R$ 12,00",
  },
];

export default function ModalOpenGenerateOrder({ isOpen, handleClose }: Props) {
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
        <ModalContent maxW="50vw">
          <ModalHeader>Cadastrar Novo Pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacing={6}>
              <FormControl>
                <FormLabel>Produto</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                  />
                  <Input placeholder="Digite produto" ref={initialRef} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Mesa / Cliente</FormLabel>
                <Input placeholder="Digite cliente ou número da mesa" />
              </FormControl>
            </SimpleGrid>

            <TableContainer>
              <Table mt={5} size={"sm"}>
                <Thead>
                  <Tr>
                    <Th>Produto</Th>
                    <Th>Quantidade</Th>
                    <Th>Valor Unitário</Th>
                    <Th>Valor Total</Th>
                  </Tr>
                </Thead>
                <Tbody borderWidth="0">
                  {mockData.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.product}</Td>
                      <Td>
                        <HStack
                          spacing={3}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <IconButton
                            size={"xs"}
                            fontSize="0.5em"
                            isRound={true}
                            variant="solid"
                            aria-label="Done"
                            icon={<AddIcon />}
                          />
                          <Box>{item.quantity}</Box>
                          <IconButton
                            size={"xs"}
                            fontSize="0.5em"
                            isRound={true}
                            variant="solid"
                            aria-label="Done"
                            icon={<MdOutlineHorizontalRule />}
                          />
                        </HStack>
                      </Td>
                      <Td>{item.unitValue}</Td>
                      <Td>{item.totalValue}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button bg="#480e1f" color={"#fff"} mr={3}>
              Salvar
            </Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
