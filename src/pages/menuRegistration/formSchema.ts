import * as yup from 'yup';

export const createMenuFormSchema = () => {
    return yup.object().shape({
      product: yup.string().required('O nome do produto é obrigatório'),
      description: yup.string(),
      category: yup.string().required('A categoria é obrigatória'),
      image: yup.string().url('A URL da imagem deve ser válida'),
      price: yup.string().required('O preço é obrigatório')
    });
  };

  export interface RegistrationMenu {
    id: string;
    product: string;
    description?: string;
    category: string;
    image?: string;
    price: string;
}

