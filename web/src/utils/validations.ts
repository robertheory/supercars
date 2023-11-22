import * as z from 'zod';

const maxYear = new Date().getFullYear() + 1;

export const editCarFormSchema = z.object({
  name: z
    .string({
      required_error: 'Carro é obrigatório',
    })
    .min(2, { message: 'Carro deve ter no mínimo 2 caracteres' }),
  brand: z
    .string({
      required_error: 'Marca é obrigatória',
    })
    .min(2, { message: 'Marca deve ter no mínimo 2 caracteres' }),
  model: z
    .string({
      required_error: 'Modelo é obrigatório',
    })
    .min(2, { message: 'Modelo deve ter no mínimo 2 caracteres' }),
  year: z
    .number({
      invalid_type_error: 'Ano deve ser um número',
      required_error: 'Ano é obrigatório',
    })
    .min(1900, { message: 'Ano deve ser maior que 1900' })
    .max(maxYear, { message: `Ano deve ser menor que ${maxYear}` }),
  color: z
    .string({
      required_error: 'Cor é obrigatória',
    })
    .min(2, { message: 'Cor deve ter no mínimo 2 caracteres' }),
  image: z
    .string()
    .url({
      message: 'Imagem deve ser uma URL válida',
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: 'Preço deve ser um número',
      required_error: 'Preço é obrigatório',
    })
    .min(0, { message: 'Preço deve ser maior ou igual a 0' }),
});

export type EditCarForm = z.infer<typeof editCarFormSchema>;
