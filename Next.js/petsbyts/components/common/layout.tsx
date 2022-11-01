import { ReactNode } from "react";
import Footer from "./footer";
import Navigator from "./navigatior";

function Layout(props: {children: ReactNode}) {
    return (<>
        <Navigator />
        <main>{props.children}</main>
        <Footer />
    </>  );
}

export default Layout;