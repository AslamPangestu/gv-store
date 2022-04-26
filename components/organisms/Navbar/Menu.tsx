import Link from 'next/link';
import cx from 'classnames';

interface Props {
  title: string;
  href: string;
  isActive: boolean;
}

const MenuNavbarComponent = ({ title, isActive, href }: Props) => {
  const className = cx({
    'nav-link': true,
    active: isActive,
  });
  return (
    <nav className="nav-item my-auto">
      <Link href={href} passHref>
        <a className={className} aria-current="page" href="dummy">
          {title}
        </a>
      </Link>
    </nav>
  );
};

export default MenuNavbarComponent;
