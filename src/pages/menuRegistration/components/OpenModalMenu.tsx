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
import React, { useCallback, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { createMenuFormSchema, RegistrationMenu } from "../formSchema";
import axios from "axios";
import Swal from "sweetalert2";
import ImageUpload from "../../../components/ImageUpload";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  updateProductList: () => void;
}

export default function OpenModalMenu({
  isOpen,
  handleClose,
  updateProductList,
}: Props) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const handlePriceChange = (e) => {
  const value = e.target.value
      .replace(/\D/g, "") // Remove tudo que não é dígito
      .replace(/(\d)(\d{8})$/, "$1.$2") // Adiciona ponto antes dos últimos 2 dígitos
      .replace(/(\d)(\d{5})$/, "$1.$2") // Adiciona ponto antes dos últimos 5 dígitos
      .replace(/(\d)(\d{2})$/, "$1,$2"); // Adiciona vírgula antes dos últimos 2 dígitos
    e.target.value = `R$ ${value}`; // Formata como moeda
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationMenu>({
    resolver: yupResolver(createMenuFormSchema()) as any,
  });

  const handleImageChange = (file: File | null) => {
    setImageFile(file); // Atualiza o estado com o arquivo da imagem
  };

  const handleCreateRegistrationMenu: SubmitHandler<RegistrationMenu> =
    useCallback(
      async (data) => {
        try {
          const productData = {
            ...data,
            price: parseFloat(data.price.replace(/[R$]/g,"").replace(",", ".")),
            image: imageFile ? URL.createObjectURL(imageFile) : undefined,
          };
          await axios.post("http://localhost:3001/product", productData);
          reset();
          handleClose();
          updateProductList();
          Swal.fire({
            icon: "success",
            title: "Produto cadastrado com sucesso!",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          handleClose();
          console.error("Error ao tentar cadastrar produto", error);
          Swal.fire({
            icon: "error",
            title: "Erro ao cadastrar produto",
            text: "Por favor, tente novamente.",
            confirmButtonText: "OK",
          });
        }
      },
      [reset, handleClose, updateProductList, imageFile]
    );

  return (
    <>
      <Modal
        size="md"
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
                  <Input
                    placeholder="R$ 0,00"
                    {...register("price", { onChange: handlePriceChange })} // Chama a função ao mudar o valor
                    className={errors.price ? "input-error" : ""}
                  />
                  <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Imagem</FormLabel>
                  <ImageUpload onImageChange={handleImageChange} />
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
