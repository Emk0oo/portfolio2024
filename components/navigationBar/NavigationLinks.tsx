import Link from 'next/link';
import React from 'react';

interface NavigationLinksProps {
  href: string;
  children: React.ReactNode;
}

const NavigationLinks = ({ href, children }: NavigationLinksProps) => {
  return (
    <Link href={href}>
      <p className='text-2xl text-slate-400 uppercase hover:text-white transition-colors duration-300'>
        {children}
      </p>
    </Link>
  );
}

export default NavigationLinks;
