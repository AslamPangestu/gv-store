import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Menu from './Menu';
import Auth from './Auth';
import ToggleMenu from './ToggleMenu';

const NavbarComponent = () => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1];

  const isActive = (link: string) => {
    const itemPath = link.split('/')[1];
    return itemPath === currentPath;
  };

  const MENUS = [
    { title: 'Home', href: '/' },
    { title: 'Games', href: '/games' },
    { title: 'Rewards', href: '/rewards' },
    { title: 'Discover', href: '/discover' },
    { title: 'Global Rank', href: '/global-rank' },
  ];

  return (
    <header>
      <div className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/" passHref>
            <a className="navbar-brand" href="dummy">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              {MENUS.map((item) => (
                <Menu
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  isActive={isActive(item.href)}
                />
              ))}
              <Auth isLoggedIn />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
