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

export default function ModalCloseGenerateOrder({ isOpen, handleClose }: Props) {
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
            <FormLabel mt={5}>Deseja Cancelar Pedido?</FormLabel>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button bg="#480e1f" color={"#fff"} mr={3}>
            Sim
          </Button>
          <Button onClick={handleClose}>Não</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
}
