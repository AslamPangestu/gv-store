import Link from 'next/link';
import Image from 'next/image';

const BrandComponent = () => (
  <Link href="/" passHref>
    <a className="navbar-brand" href="dummy">
      <Image src="/icon/logo.svg" width={60} height={60} />
    </a>
  </Link>
);

export default BrandComponent;
