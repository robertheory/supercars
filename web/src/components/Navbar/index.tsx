import Link from 'next/link';
import Menu from './Menu';

const Navbar = () => (
  <nav
    className='
    fixed
    top-0
    bg-secondary
    flex
    flex-row
    justify-center
    items-center
    w-[100%]
    h-[100px]
    lg:justify-between
    p-8
    z-10
    '
  >
    <Link passHref href='/' className='link'>
      <h1 className='font-bold text-3xl flex flex-row justify-center items-center gap-2'>
        Super Carros
      </h1>
    </Link>

    <Menu />
  </nav>
);

export default Navbar;
