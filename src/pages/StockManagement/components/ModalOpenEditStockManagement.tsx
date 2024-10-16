import {
  Button,
  FormControl,
  FormLabel,
  Image,
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

export default function ModalOpenEditStockManagement({
  isOpen,
  handleClose,
}: Props) {
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
        <ModalContent>
          <ModalHeader>Editar Produto no Estoque</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacing={6}>
              <FormControl>
                <FormLabel>Produto</FormLabel>
                <Input ref={initialRef} />
              </FormControl>
              <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Select>
                  <option value="option1"></option>
                  <option value="option1">Massas</option>
                  <option value="option2">Lanches</option>
                  <option value="option3">Bebidas</option>
                  <option value="option3">Pizzas</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Quantidade</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Preço Unitário</FormLabel>
                <Input />
              </FormControl>
              <Image
                alt="Imagem do Produto"
                boxSize="150px"
                objectFit="cover"
                mt={4}
              />
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button bg="#480e1f" color={"#fff"} mr={3}>
              Salvar
            </Button>
            <Button onClick={handleClose}>Cancela</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
