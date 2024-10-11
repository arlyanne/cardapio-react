import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

// const mockData = [

// ];

export default function OpenModalDetailMenu({ isOpen, handleClose }: Props) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        size="lg"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacing={6}>
            <FormControl>
              <FormLabel>Nome Produto</FormLabel>
              <Input ref={initialRef}/>
            </FormControl>
            <FormControl>
              <FormLabel>Descrição</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
            <FormLabel>Categoria</FormLabel>
            <Select>
              <option value='option1'></option>
              <option value='option1'>Massas</option>
              <option value='option2'>Lanches</option>
              <option value='option3'>Bebidas</option>
              <option value='option3'>Pizzas</option>
              <option value='option3'>Sushi</option>
            </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Preço de Venda</FormLabel>
              <Input />
            </FormControl>
            <FormControl >
              <FormLabel>Imagem</FormLabel>
              <Input />
            </FormControl>
            </SimpleGrid>
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
