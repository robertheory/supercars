import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { listCars } from '@/services/car';
import CarTableRow from './CarTableRow';

const CarsTable = async () => {
  const carList = await listCars();

  return (
    <Table className='w-full max-w-[800px]'>
      <TableCaption>Lista de carros</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>-</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Carro</TableHead>
          <TableHead>Marca</TableHead>
          <TableHead className='text-right'>Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {carList.map((car) => (
          <CarTableRow key={car.id} car={car} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CarsTable;