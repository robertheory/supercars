import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Car } from '@/intefaces';

type CarCardProps = {
  car: Car;
};

const CarCard = ({ car }: CarCardProps) => {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(car.price);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="w-full max-w-[300px] break-words">
          {car.brand} {car.name}
        </CardTitle>
        <CardDescription className="flex flex-col justify-start items-start gap-0">
          {car.year} - {car.model} - {String(car.color).toUpperCase()}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-start items-start gap-1">
        <div
          style={{
            backgroundImage: `url(${car.image || '/tesla_model_s.png'})`,
          }}
          className="
          bg-no-repeat
          bg-cover
          bg-center
          w-[300px]
          h-[300px]
          rounded-xl
          mb-2"
          role="img"
          aria-label={`${car.brand} ${car.name}`}
        />

        <h3>Preço à vista</h3>

        <p className="text-2xl font-bold">{priceFormatted}</p>
      </CardContent>
    </Card>
  );
};

export default CarCard;
