'use client';

import {
  TableCell,
  TableRow as TableRowComponent,
} from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { Car } from '@/intefaces';
import { updateCar } from '@/services/car';
import { EditCarForm } from '@/utils/validations';
import { useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import { Dialog, DialogPortal, DialogTrigger } from '../ui/dialog';
import EditCarFormComponent from './EditCarForm';

type CarTableRowProps = {
  car: Car;
};

const CarTableRow = ({ car }: CarTableRowProps) => {
  const { data: session } = useSession();
  const { toast } = useToast();

  const handleUpdateCar = async (data: EditCarForm) => {
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
    <Dialog>
      <DialogPortal>
        <EditCarFormComponent car={car} handleSubmit={handleUpdateCar} />
      </DialogPortal>

      <TableRowComponent
        className="
      hover:bg-gray-100 transition-colors duration-200 cursor-pointer
        border-solid border-b border-gray-200
      "
      >
        <TableCell className="font-medium">
          <DialogTrigger asChild>
            <Button variant="outline" type="button">
              Editar
            </Button>
          </DialogTrigger>
        </TableCell>
        <TableCell className="font-medium">{car.id}</TableCell>
        <TableCell>{car.name}</TableCell>
        <TableCell>{car.brand}</TableCell>
        <TableCell>{car.model}</TableCell>
        <TableCell>{car.year}</TableCell>
        <TableCell className="text-right">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(car.price)}
        </TableCell>
      </TableRowComponent>
    </Dialog>
  );
};

export default CarTableRow;
