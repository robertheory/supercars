'use client';
import { Car, CarFilterKey } from '@/intefaces';
import { useState } from 'react';
import { Button } from '../ui/button';
import CarCard from './CarCard';
import FilterItem from './FilterItem';

type CarsListProps = {
  carsList: Car[];
};

const initialFilter: CarFilterKey = {
  brand: '',
  model: '',
  year: '',
  color: '',
  name: '',
};

const CarsList = ({ carsList }: CarsListProps) => {
  const [cars, setCars] = useState<Car[]>(carsList);
  const [filter, setFilter] = useState(initialFilter);
  const [showFilters, setShowFilters] = useState(false);

  const handleSetFilter = (key: keyof CarFilterKey, value: string) => {
    const filterValue = value.toLowerCase();

    const isFilterAlreadyActive = filter[key] === filterValue;

    const newFilter = {
      ...filter,
      [key]: isFilterAlreadyActive ? '' : filterValue,
    };

    setFilter(newFilter);

    const filteredCars = cars.filter((car) => {
      const carValue = String(car[key]).toLowerCase();

      return carValue.includes(filterValue);
    });

    setCars(filteredCars);
  };

  const handleResetFilter = () => {
    setFilter(initialFilter);
    setCars(carsList);
  };

  const filterItems = Object.keys(initialFilter) as Array<keyof CarFilterKey>;

  const hasFilter = Object.values(filter).some((value) => value !== '');

  return (
    <div
      className={`
        flex flex-col justify-start items-center w-full gap-2
        lg:flex-row lg:justify-between lg:items-start
    `}
    >
      <div
        className={`
        w-full flex flex-col justify-start items-center gap-2
        lg:w-[300px] lg:sticky lg:top-[200px]
        `}
      >
        <Button
          className='w-[200px] md:hidden'
          onClick={() => setShowFilters(!showFilters)}
          variant={showFilters ? 'outline' : 'default'}
        >
          {showFilters ? 'Esconder filtros' : 'Filtrar carros'}
        </Button>

        <div
          className={`
            ${showFilters ? 'flex' : 'hidden'}
            md:flex flex-row w-full justify-center items-center gap-2 flex-wrap
        `}
        >
          {filterItems.map((filterType) => (
            <FilterItem
              key={filterType}
              carsList={cars}
              filterType={filterType}
              filters={filter}
              handleSetFilter={handleSetFilter}
            />
          ))}

          <Button
            type='reset'
            onClick={() => handleResetFilter()}
            className='min-w-[200px]'
          >
            Limprar filtros
          </Button>
        </div>
        {hasFilter && (
          <p className='font-bold text-gray-900'>{cars.length} resultados</p>
        )}
      </div>

      <div className='w-full flex flex-row flex-wrap justify-evenly items-start gap-2'>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;
