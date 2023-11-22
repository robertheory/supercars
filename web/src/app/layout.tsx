import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Super Carros',
  description: 'Os melhores carros do mundo, você encontra aqui!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body
        className={cn(
          'w-full min-h-screen font-sans antialiased bg-slate-200',
          fontSans.variable
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
