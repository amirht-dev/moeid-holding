'use client';

import React from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Image from 'next/image';
import { links } from '@/data/constants';
import NavLink from '@/components/ui/NavLink';
import {BiSolidPhoneCall} from "react-icons/bi"

type MenuProps = {
  open: boolean;
  onClose: () => void;
};

const menuVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: .2
    }
  },
  close: {
    opacity: 0,
    scale: .7
  },
};

const linkVariants: Variants = {
  open: {
    opacity: 1,
    y: 0
  },
  close: {
    opacity: 0,
    y: 20
  }
}

function Menu({ open, onClose }: MenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="glass fixed inset-5 z-50 flex flex-col divide-y-2 p-5 md:hidden rounded-md"
          variants={menuVariants}
          initial='close'
          animate='open'
          exit='close'
        >
          <div className="flex items-center justify-between pb-5">
            <Image
              src="/images/logo/logo-light.png"
              alt="logo"
              width={148}
              height={37}
            />
            <button className="text-2xl" onClick={onClose}>
              &times;
            </button>
          </div>

          <ul className="flex flex-col gap-7 flex-1 pt-5">
            {
              links.map((link, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <NavLink className="font-bold" disActiveClassName="text-base-content/40" activeClassName="text-base-content" href={link.href}>{link.label}</NavLink>
                </motion.li>
              ))
            }
          </ul>

          <button className="bg-secondary self-center text-sm rounded-full text-white flex items-center gap-3 px-7 py-3">
            <BiSolidPhoneCall />
            <span>
            شماره تماس: ۹۱۰۱۶۶۶۸-۰۲۱
            </span>
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>);
}

export default Menu;
