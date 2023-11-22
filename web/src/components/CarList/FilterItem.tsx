'use client';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { carPropsNames } from '@/data/constants';
import { Car, CarFilterKey } from '@/intefaces';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

type CarsListProps = {
  carsList: Car[];
  handleSetFilter: (key: keyof CarFilterKey, value: string) => void;
  filterType: keyof CarFilterKey;
  filters: CarFilterKey;
};

const FilterItem = ({
  handleSetFilter,
  filterType,
  carsList,
  filters,
}: CarsListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const filterItems = carsList
    .map((car) => car[filterType])
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          className='w-[200px] justify-between'
        >
          {String(filters[filterType]).toUpperCase() ||
            `Filtrar por ${carPropsNames[filterType]}`}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput
            placeholder={`Buscar por ${carPropsNames[filterType]}`}
          />
          <CommandEmpty>
            Nenhum resultado para{' '}
            <span className='font-bold'>
              {filters[filterType] || carPropsNames[filterType]}
            </span>
          </CommandEmpty>
          <CommandGroup>
            {filterItems.map((item) => (
              <CommandItem
                key={item}
                value={String(item)}
                onSelect={(value) => handleSetFilter(filterType, value)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    filters[filterType] === item ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterItem;
