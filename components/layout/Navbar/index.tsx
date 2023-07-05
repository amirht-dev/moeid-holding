'use client'

import Image from 'next/image';
import React from 'react';
import NavLinkGroup from '@/components/ui/NavLinkGroup';
import { CgMenuLeft } from 'react-icons/cg';
import { useCycle } from 'framer-motion';
import Menu from '../Menu';
import { links } from '@/data/constants';

function Navbar() {
  const [open, toggleOpen] = useCycle(false, true);
  return (
    <>
    <header className="container flex items-center justify-between py-10">
      <div className="relative aspect-[4/1] w-[150px] md:w-[200px]">
        <Image src="/images/logo/logo-light.png" alt="moeid holding" fill />
      </div>
      <button className="text-[24px] md:hidden" onClick={() => toggleOpen()}>
        <CgMenuLeft />
      </button>
      <nav className="hidden md:block">
        <NavLinkGroup
          linkClassName="font-bold"
          activeLinkClassName="text-base-content"
          disActiveLinkClassName="text-base-content/40"
          links={links}
        />
      </nav>
    </header>
    <Menu open={open} onClose={() => toggleOpen()} />
    </>
  );
}

export default Navbar;
