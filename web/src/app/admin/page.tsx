import CarsTable from '@/components/CarsTable';
import AdminHeader from './AdminHeader';

const Admin = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-2">
      <AdminHeader />

      <div className="w-full flex flex-col justify-start items-center gap-2">
        <h2 className="text-2xl font-bold">Gerenciar carros</h2>
        <p>
          Aqui você pode visualizar, editar e deletar os carros cadastrados.
        </p>
      </div>

      <div className="w-full min-h-screen flex flex-col justify-start items-center p-4">
        <CarsTable />
      </div>
    </div>
  );
};

export default Admin;
