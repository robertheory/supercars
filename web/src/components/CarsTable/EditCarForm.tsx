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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';
import { Car } from '@/intefaces';
import { deleteCar } from '@/services/car';
import { EditCarForm, editCarFormSchema } from '@/utils/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { PopoverClose } from '@radix-ui/react-popover';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';

type EditCarFormComponentProps = {
  car: Car;
  handleSubmit: (data: EditCarForm) => void;
};

const EditCarFormComponent = ({
  car,
  handleSubmit,
}: EditCarFormComponentProps) => {
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

  const handleDeleteCar = async () => {
    try {
      const token = session!.user!.access_token;

      await deleteCar(car.id, token);

      toast({
        title: 'Carro deletado com sucesso!',
        description: 'O carro foi deletado com sucesso!',
      });
    } catch (error) {
      toast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao deletar o carro!',
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
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carro</FormLabel>
                    <FormControl>
                      <Input placeholder="Carro..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marca</FormLabel>
                    <FormControl>
                      <Input placeholder="Marca..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modelo</FormLabel>
                    <FormControl>
                      <Input placeholder="Modelo..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex flex-row justify-between gap-2">
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ano</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ano..."
                          {...field}
                          type="number"
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
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cor</FormLabel>
                      <FormControl>
                        <Input placeholder="Cor..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Foto</FormLabel>
                    <FormControl>
                      <Input placeholder="Foto..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Preço..."
                        {...field}
                        type="number"
                        onChange={(e) => {
                          field.onChange(Number(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex flex-row justify-between gap-2">
                <Button type="submit" variant="secondary">
                  Salvar
                </Button>

                <Button
                  type="reset"
                  variant="default"
                  onClick={() => form.reset()}
                >
                  Reiniciar
                </Button>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    className="w-full"
                  >
                    Deletar carro
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[350px] max-w-[90vw]">
                  <h2>Tem certeza que deseja deletar este carro?</h2>
                  <span className="font-bold text-lg">
                    #{car.id} - {car.name} {car.brand} {car.model} {car.year}
                  </span>

                  <div className="w-full flex flex-row justify-between gap-2 mt-4">
                    <PopoverClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => handleDeleteCar()}
                      >
                        Deletar
                      </Button>
                    </PopoverClose>

                    <PopoverClose asChild>
                      <Button
                        type="button"
                        variant="default"
                        className="w-full"
                      >
                        Cancelar
                      </Button>
                    </PopoverClose>
                  </div>
                </PopoverContent>
              </Popover>
            </form>
          </Form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default EditCarFormComponent;
