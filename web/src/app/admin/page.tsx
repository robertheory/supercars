import AdminHeader from '@/components/AdminHeader';
import CarsTable from '@/components/CarsTable';

const Admin = async () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center gap-2'>
      <AdminHeader />

      <CarsTable />
    </div>
  );
};

export default Admin;
