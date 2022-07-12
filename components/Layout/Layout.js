import Header from './Header';
import Footer from './Footer';
import AccentImages from './AccentImages';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <>{children}</>
            <Footer />
            <AccentImages />
        </>
    );
};

export default Layout;
