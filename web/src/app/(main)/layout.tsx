import Navbar from '@/components/Navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className='w-[100%] h-fit flex flex-col justify-start items-center gap-2 mt-[100px]'>
        {children}
      </div>
    </>
  );
}
