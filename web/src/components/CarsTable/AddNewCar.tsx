'use client';

import EditCarFormComponent from '@/components/CarsTable/EditCarForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogPortal, DialogTrigger } from '@/components/ui/dialog';
import { Car } from '@/intefaces';
import { createCar } from '@/services/car';
import { EditCarForm } from '@/utils/validations';
import { useSession } from 'next-auth/react';
import { useToast } from '../ui/use-toast';

type AddNewCarProps = {
  nextId: number;
};

const AddNewCar = ({ nextId }: AddNewCarProps) => {
  const { data: session } = useSession();
  const { toast } = useToast();

  const car: Car = {
    id: String(nextId),
    name: '',
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    color: '',
    image: 'https://source.unsplash.com/random/400x400?car',
  };

  const handleCreateCar = async (data: EditCarForm) => {
    try {
      const token = session!.user!.access_token;

      const newCar = {
        ...data,
      } as Car;

      await createCar(newCar, token);

      toast({
        title: 'Carro criado com sucesso!',
        description: 'O carro foi editado com sucesso!',
      });
    } catch {
      toast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao criar o carro!',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Adicionar novo carro</Button>
      </DialogTrigger>

      <DialogPortal>
        <EditCarFormComponent car={car} handleSubmit={handleCreateCar} />
      </DialogPortal>
    </Dialog>
  );
};

export default AddNewCar;
