import Footer from "./footer";
import Navigator from "./navigatior";

function Layout({children}) {
    return (<>
        <Navigator />
        <main>{children}</main>
        <Footer />
    </>  );
}

export default Layout;