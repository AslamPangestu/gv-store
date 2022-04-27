import Sidebar from 'components/organisms/Sidebar';

interface Props {
  children: JSX.Element;
  id:string
}

const MemberLayout = ({ children, id }:Props) => (
  <section className={`${id} overflow-auto`}>
    <Sidebar />
    <main className="main-wrapper">
      {children}
    </main>
  </section>
);

export default MemberLayout;
