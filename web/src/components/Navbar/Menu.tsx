'use client';

import { menuItems } from '@/data/constants';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='absolute top-9 right-9 z-30 lg:hidden'
      >
        {isMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </button>

      <nav
        className={`
        ${isMenuOpen ? 'flex' : 'hidden'}
        flex-col
        w-[100vw]
        h-[100vh]
        fixed
        top-0
        left-0
        bg-secondary
        justify-center
        items-center
        gap-12
        text-4xl
        font-bold
        z-20

        lg:flex
        lg:flex-row
        lg:relative
        lg:w-auto
        lg:h-auto
        lg:bg-transparent
        lg:text-xl
        
        `}
      >
        {menuItems.map((section) => (
          <Link
            passHref
            href={section.href}
            key={section.name}
            onClick={() => setIsMenuOpen(false)}
            className=''
          >
            {section.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Menu;
