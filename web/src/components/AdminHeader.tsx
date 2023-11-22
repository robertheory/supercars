'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const AdminHeader = () => {
  return (
    <>
      <h1>Admin</h1>

      <Button type='button' onClick={() => signOut()}>
        Sair
      </Button>
    </>
  );
};

export default AdminHeader;
