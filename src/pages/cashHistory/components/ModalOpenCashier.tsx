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

} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

export default function ModalOpenCashier({isOpen, handleClose}: Props) {
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
          <ModalHeader>Abertura de Caixa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Valor Inicial</FormLabel>
              <Input ref={initialRef} placeholder="R$" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Observação.:</FormLabel>
              <Input placeholder="Obs.:" />
            </FormControl>
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
};
