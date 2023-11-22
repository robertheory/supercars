import CarList from '@/components/CarList';
import { listCars } from '@/services/car';

const UsedCars = async () => {
  const cars = await listCars();

  return (
    <div className='w-full p-4 flex flex-col justify-start items-center gap-2'>
      <h1
        className='
        text-4xl
        font-bold
        text-gray-800
        mb-4
      '
      >
        CARROS USADOS
      </h1>

      <p>{cars.length} resultados encontrados</p>

      <CarList carsList={cars} />
    </div>
  );
};

export default UsedCars;
