import Image from 'next/image';
import React from 'react';
import NavLinkGroup from '@/components/ui/NavLinkGroup';
import {CgMenuLeft} from "react-icons/cg"

function Navbar() {
  return (
    <header className="container flex items-center justify-between py-10">
      <div className="relative aspect-[4/1] w-[150px] md:w-[200px]">
        <Image src="/images/logo/logo-light.png" alt="moeid holding" fill />
      </div>
      <button className="md:hidden text-[24px]">
        <CgMenuLeft />
      </button>
      <nav className="hidden md:block">
      <NavLinkGroup
        linkClassName="font-bold"
        activeLinkClassName="text-base-content"
        disActiveLinkClassName="text-base-content/40"
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
      </nav>
      
    </header>
  );
}

export default Navbar;
