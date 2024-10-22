import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  onConfirm: () => void;
  message: string;
}

export default function ConfirmationModal({ isOpen, handleClose, onConfirm, message }: Props) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);


  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmação</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{message}</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            ref={finalRef}
            bg="#480e1f"
            color="#fff"
            _hover={{ bg: "#480e1f" }}
            variant="solid"
            mr={1}
            onClick={onConfirm}>
            Confirmar
          </Button>
          <Button onClick={handleClose} ml={3}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}