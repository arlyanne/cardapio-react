import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

export default function ModalCloseStockManagement({ isOpen, handleClose }: Props) {
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
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel mt={5}>Deseja Desativar o Produto do Estoque?</FormLabel>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button bg="#480e1f" color={"#fff"} mr={3}>
              Desativar
            </Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
