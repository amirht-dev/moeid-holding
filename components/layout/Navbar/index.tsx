import Image from 'next/image';
import React from 'react';
import NavLinkGroup from '@/components/ui/NavLinkGroup';

function Navbar() {
  return (
    <header className="container flex items-center justify-between ">
      <Image src="/images/logo/logo-light.png" alt="moeid holding" width={200} height={50} />
      <NavLinkGroup
        linkClassName='text-base-content/40'
        links={[
          {
            label: 'صفحه اصلی',
            href: '/',
          },
          {
            label: 'مسابقه ها',
            href: '/competitions',
          },
          {
            label: 'رویدادها',
            href: '/events',
          },
          {
            label: 'تماس باما',
            href: '/contact-us',
          },
          {
            label: 'درباره ما',
            href: '/about-us',
          },
        ]}
      />
    </header>
  );
}

export default Navbar;
