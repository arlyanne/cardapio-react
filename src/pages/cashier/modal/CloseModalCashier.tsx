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
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

export default function CloseModalCashier({ isOpen, handleClose }: Props) {
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
          <ModalHeader>Fechamento de Caixa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel mt={5}>Valor Total</FormLabel>
              <Input ref={initialRef} placeholder="R$" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button bg="#480e1f" color={"#fff"} mr={3}>
              Encerrar
            </Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
