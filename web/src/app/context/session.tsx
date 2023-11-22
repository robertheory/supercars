'use client';

import { Session } from 'next-auth';
import { SessionProvider as NextSessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface ISessionProviderProps {
  children: ReactNode;
  session: Session | null;
}

const SessionProvider = ({ children, session }: ISessionProviderProps) => (
  <NextSessionProvider session={session}>{children}</NextSessionProvider>
);
export default SessionProvider;
