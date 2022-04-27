import Navbar from 'components/organisms/Navbar';
import Footer from 'components/organisms/Footer';

interface Props {
  children: JSX.Element;
}

const MainLayout = ({ children }: Props) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
