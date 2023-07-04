import NavLink from '../NavLink';

type Link = {
  href: string;
  label: string;
};

type NavLinkGroupProps = {
  links: Link[];
  linkClassName?: string;
  activeLinkClassName?: string;
};

function NavLinkGroup({
  links,
  activeLinkClassName,
  linkClassName,
}: NavLinkGroupProps) {
  return (
    <ul className="flex items-center gap-4">
      {links.map((link, idx) => (
        <li key={idx}>
          <NavLink href={link.href} className={linkClassName} activeClassName={activeLinkClassName}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinkGroup;
