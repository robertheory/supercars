'use client';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Car } from '@/intefaces';
import { updateCar } from '@/services/car';
import { EditCarForm, editCarFormSchema } from '@/utils/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';

type EditCarFormComponentProps = {
  car: Car;
};

const EditCarFormComponent = ({ car }: EditCarFormComponentProps) => {
  const { data: session } = useSession();
  const { toast } = useToast();

  const form = useForm<EditCarForm>({
    resolver: zodResolver(editCarFormSchema),
    defaultValues: {
      name: car.name,
      brand: car.brand,
      price: car.price,
      color: car.color,
      image: car.image,
      model: car.model,
      year: car.year,
    },
  });

  const onSubmit = async (data: EditCarForm) => {
    try {
      const token = session!.user!.access_token;

      const newCar = {
        id: car.id,
        ...data,
      } as Car;

      await updateCar(newCar, token);

      toast({
        title: 'Carro editado com sucesso!',
        description: 'O carro foi editado com sucesso!',
      });
    } catch {
      toast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao editar o carro!',
        variant: 'destructive',
      });
    }
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Editar Carro #{car.id}</DialogTitle>
        <DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carro</FormLabel>
                    <FormControl>
                      <Input placeholder='Carro...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='brand'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marca</FormLabel>
                    <FormControl>
                      <Input placeholder='Marca...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='model'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modelo</FormLabel>
                    <FormControl>
                      <Input placeholder='Modelo...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='w-full flex flex-row justify-between gap-2'>
                <FormField
                  control={form.control}
                  name='year'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ano</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Ano...'
                          {...field}
                          type='number'
                          onChange={(e) => {
                            field.onChange(Number(e.target.value));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='color'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cor</FormLabel>
                      <FormControl>
                        <Input placeholder='Cor...' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Foto</FormLabel>
                    <FormControl>
                      <Input placeholder='Foto...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='price'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Preço...'
                        {...field}
                        type='number'
                        onChange={(e) => {
                          field.onChange(Number(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='w-full flex flex-row justify-between gap-2'>
                <Button type='submit' variant='secondary'>
                  Salvar
                </Button>

                <Button
                  type='reset'
                  variant='default'
                  onClick={() => form.reset()}
                >
                  Reiniciar
                </Button>
              </div>
            </form>
          </Form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default EditCarFormComponent;
