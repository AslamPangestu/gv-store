import Link from 'next/link';
import Image from 'next/image';

interface Props {
  isLoggedIn: boolean;
}

const AuthNavbarComponent = ({ isLoggedIn }: Props) => {
  if (isLoggedIn) {
    const MENUS = [
      { title: 'My Profile', href: '/member' },
      { title: 'Wallet', href: '/' },
      { title: 'Account Setting', href: '/member/settings' },
      { title: 'Log Out', href: '/' },
    ];
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <div
            className="dropdown-toggle ms-lg-40"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src="/img/avatar-1.png"
              className="rounded-circle"
              width={40}
              height={40}
            />
          </div>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            {MENUS.map((item) => (
              <li key={item.title}>
                <Link href={item.href} passHref>
                  <a
                    className="dropdown-item text-lg color-palette-2"
                    href="dummy"
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in" passHref>
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
          href="dummy"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
};

export default AuthNavbarComponent;
