import * as yup from 'yup';

export const createMenuFormSchema = () => {
    return yup.object().shape({
      product: yup.string().required('O nome do produto é obrigatório'),
      description: yup.string(),
      category: yup.string().required('A categoria é obrigatória'),
      price: yup.string().required("Preço é obrigatório")
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

