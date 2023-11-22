'use client';

import { signOut } from 'next-auth/react';

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>

      <button
        onClick={() =>
          signOut({
            callbackUrl: '/',
            redirect: true,
          })
        }
      >
        Sign out
      </button>
    </div>
  );
};

export default Admin;
