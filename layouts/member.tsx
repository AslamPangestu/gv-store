import Sidebar from 'components/organisms/Sidebar';

interface Props {
  children: JSX.Element;
}

const MemberLayout = ({ children }:Props) => (
  <section className="overview overflow-auto">
    <Sidebar />
    <main className="main-wrapper">
      {children}
    </main>
  </section>
);

export default MemberLayout;
