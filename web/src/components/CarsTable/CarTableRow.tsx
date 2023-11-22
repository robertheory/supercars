'use client';

import {
  TableCell,
  TableRow as TableRowComponent,
} from '@/components/ui/table';
import { Car } from '@/intefaces';
import { Button } from '../ui/button';
import { Dialog, DialogPortal, DialogTrigger } from '../ui/dialog';
import EditCarFormComponent from './EditCarForm';

type CarTableRowProps = {
  car: Car;
};

const CarTableRow = ({ car }: CarTableRowProps) => {
  return (
    <Dialog>
      <DialogPortal>
        <EditCarFormComponent car={car} />
      </DialogPortal>

      <TableRowComponent
        className='
      hover:bg-gray-100 transition-colors duration-200 cursor-pointer
        border-solid border-b border-gray-200
      '
      >
        <TableCell className='font-medium'>
          <DialogTrigger asChild>
            <Button variant='outline' type='button'>
              Editar
            </Button>
          </DialogTrigger>
        </TableCell>
        <TableCell className='font-medium'>{car.id}</TableCell>
        <TableCell>{car.name}</TableCell>
        <TableCell>{car.brand}</TableCell>
        <TableCell>{car.model}</TableCell>
        <TableCell>{car.year}</TableCell>
        <TableCell className='text-right'>
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
