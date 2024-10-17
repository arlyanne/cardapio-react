import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
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
import React, { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { createMenuFormSchema, RegistrationMenu } from "../formSchema";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  updateProductList: () => void;
}

export default function OpenModalMenu({ isOpen, handleClose, updateProductList }: Props) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationMenu>({
    resolver: yupResolver(createMenuFormSchema()) as any,
  });

  const handleCreateRegistrationMenu: SubmitHandler<RegistrationMenu> =
    useCallback(async (data) => {
      try {
        await axios.post("http://localhost:3001/product", data)
        reset()
        handleClose()
        updateProductList()
        Swal.fire({
          icon: "success",
          title: "Produto cadastrado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });
     
      } catch (error) {
        handleClose()
        console.error("Error ao tentar cadastrar produto", error);
        Swal.fire({
          icon: "error",
          title: "Erro ao cadastrar produto",
          text: "Por favor, tente novamente.",
          confirmButtonText: "OK",
        });
      }
    }, [reset, handleClose, updateProductList]);
console.log(errors)
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
          <ModalHeader>Cadastrar Novo Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              as="form"
              onSubmit={handleSubmit(handleCreateRegistrationMenu)}
            >
              <SimpleGrid columns={2} spacing={6}>
                <FormControl isInvalid={!!errors.product}>
                  <FormLabel>Nome Produto</FormLabel>
                  <Input {...register("product")} />
                  <FormErrorMessage>{errors.product?.message}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Descrição</FormLabel>
                  <Input {...register("description")} />
                </FormControl>
                <FormControl isInvalid={!!errors.category}>
                  <FormLabel>Categoria</FormLabel>
                  <Select {...register("category")}>
                    <option value="option1"></option>
                    <option value="Massas">Massas</option>
                    <option value="Lanches">Lanches</option>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Pizzas">Pizzas</option>
                    <option value="Sushi">Sushi</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.category?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.price}>
                  <FormLabel>Preço de Venda</FormLabel>
                  <Input {...register("price")} />
                  <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Imagem</FormLabel>
                  <Input {...register("image")} />
                </FormControl>
              </SimpleGrid>
              <ModalFooter>
                <Button type="submit" bg="#480e1f" color={"#fff"} mr={3}>
                  Salvar
                </Button>
                <Button onClick={handleClose}>Cancelar</Button>
              </ModalFooter>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
