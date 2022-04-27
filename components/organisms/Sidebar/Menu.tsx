import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

interface Props {
  title: string;
  href: string;
  icon: string;
  isActive: boolean;
}

const MenuSidebarComponent = ({
  title, isActive, href, icon,
}: Props) => {
  const className = cx({
    'item mb-30': true,
    active: isActive,
  });
  return (
    <div className={className}>
      <div className="icon me-3">
        <Image src={icon} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href} passHref>
          <span className="text-lg text-decoration-none">{title}</span>
        </Link>
      </p>
    </div>
  );
};

export default MenuSidebarComponent;
