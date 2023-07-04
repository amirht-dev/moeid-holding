'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import type { LinkProps as NextLinkProps } from 'next/link';
import clsx from 'clsx';

type LinkProps = {
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
} & NextLinkProps;

const NavLink = ({
  className,
  activeClassName,
  children,
  href,
  ...props
}: LinkProps) => {
  const path = usePathname();
  const linkHref = href.toString()
  const splitPath = path.split('/')
  const splitHref = linkHref.split('/')
  const isActive = path.startsWith(linkHref) && splitPath[1] === splitHref[1];
  return (
    <NextLink
      className={clsx(className, isActive && activeClassName)}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default NavLink;
