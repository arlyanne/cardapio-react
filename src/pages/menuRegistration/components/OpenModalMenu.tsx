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
import React, { useCallback, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { createMenuFormSchema, RegistrationMenu } from "../formSchema";
import axios from "axios";
import Swal from "sweetalert2";
import { formatCurrency, handlePriceChange } from "../../../utils/currencyUtils";
import { ImageUpload } from "../../../components/ImageUpload";


interface Props {
  isOpen: boolean;
  handleClose: () => void;
  updateProductList: () => void;
  editMenu?: RegistrationMenu;
}

export default function OpenModalMenu({
  isOpen,
  handleClose,
  updateProductList,
  editMenu,
}: Props) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [imageFile, setImageFile] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,

  } = useForm<RegistrationMenu>({
    resolver: yupResolver(createMenuFormSchema()) as any,
  });

  const handleImageChange = (file: string | null) => {
    setImageFile(file); // Atualiza o estado com o arquivo da imagem
  };

  const handleCreateProduct = async (body: any) => {
    await axios.post("http://localhost:3001/product", body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    resetForm();
    updateProductList();
    Swal.fire({
      icon: "success",
      title: "Produto cadastrado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const handleUpdateProduct = async (body: any) => {
    await axios.put(`http://localhost:3001/product/${editMenu.id}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    resetForm();
    updateProductList();
    Swal.fire({
      icon: "success",
      title: "Produto atualizado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const handleCreateRegistrationMenu: SubmitHandler<RegistrationMenu> = useCallback(
    async (data) => {
      try {
        const body = {
          product: data.product,
          description: data.description,
          category: data.category,
          price: data.price.replace(/[R$]/g, "").replace(",", ".") || '',
          image: imageFile
        }
        console.log(editMenu)
        if (editMenu) {
          await handleUpdateProduct(body)
        } else {
          await handleCreateProduct(body)
        }
      } catch (error) {
        handleClose();
        Swal.fire({
          icon: "error",
          title: "Erro ao cadastrar produto",
          text: "Por favor, tente novamente.",
          confirmButtonText: "OK",
        });
      }
    },
    [handleCreateProduct, handleUpdateProduct, imageFile, editMenu]
  );

  // Reset do formulário e imagem ao fechar o modal
  const resetForm = () => {
    reset();
    setImageFile(null);
    handleClose();
  };

  useEffect(() => {
    if (editMenu && Object.keys(editMenu).length > 0) {
      setValue("product", editMenu.product || "");
      setValue("description", editMenu.description || "");
      setValue("category", editMenu.category || "");
      setValue("price", formatCurrency(parseFloat(editMenu.price || "")));
      setValue("image", editMenu.image || "");
    } else {

    }
  }, [editMenu, setValue]);

  return (
    <Modal
      size="md"
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={resetForm}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{editMenu ? "Editar Produto" : "Cadastrar Novo Produto"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form" onSubmit={handleSubmit(handleCreateRegistrationMenu)}>
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
                  <option value=""></option>
                  <option value="Massas">Massas</option>
                  <option value="Lanches">Lanches</option>
                  <option value="Bebidas">Bebidas</option>
                  <option value="Pizzas">Pizzas</option>
                  <option value="Sushi">Sushi</option>
                </Select>
                <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.price}>
                <FormLabel>Preço de Venda</FormLabel>
                <Input
                  placeholder="R$ 0,00"
                  {...register("price", { onChange: handlePriceChange })}
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
              <Button
                type="submit"
                bg="#480e1f"
                color="#fff"
                _hover={{ bg: "#480e1f" }}
                variant="solid"
                mr={3}
              >
                {editMenu ? "Editar" : "Salvar"}
              </Button>
              <Button onClick={resetForm}>Cancelar</Button>
            </ModalFooter>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
