import { useRouter } from 'next/router';

import Profile from './Profile';
import Menu from './Menu';
import Footer from './Footer';

const SidebarComponent = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const MENUS = [
    { title: 'Overview', icon: '/icon/overview.svg', href: '/member' },
    { title: 'Transactions', icon: '/icon/bucket.svg', href: '/member/transactions' },
    { title: 'Messages', icon: '/icon/chat.svg', href: '/member/messages' },
    { title: 'Card', icon: '/icon/card.svg', href: '/member/cards' },
    { title: 'Rewards', icon: '/icon/reward.svg', href: '/member/rewards' },
    { title: 'Settings', icon: '/icon/gear.svg', href: '/member/settings' },
    { title: 'Log Out', icon: '/icon/on-off.svg', href: '/member/logout' },
  ];
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {MENUS.map((item) => (
            <Menu
              key={item.title}
              title={item.title}
              href={item.href}
              icon={item.icon}
              isActive={currentPath === item.href}
            />
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default SidebarComponent;
