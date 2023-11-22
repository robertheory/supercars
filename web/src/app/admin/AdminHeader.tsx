'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const AdminHeader = () => {
  return (
    <div
      className={`
        w-full flex flex-col justify-start items-center p-4 bg-slate-50 gap-2
        md:flex-row md:justify-between md:items-center md:gap-0
    `}
    >
      <h1 className='text-2xl font-bold'>Super Carros Admin</h1>

      <p>
        Você está logado como <strong>administrador</strong>.
      </p>

      <Button type='button' onClick={() => signOut()}>
        Finalizar sessão
      </Button>
    </div>
  );
};

export default AdminHeader;
