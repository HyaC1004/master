import { Container } from "@mui/system"
import { ReactNode } from "react"
import Footer from "./footer"
import Header from "./header"
import Nav from "./nav"

export default function Layout ({children}: {children: ReactNode}) {
    return(
        <Container maxWidth={false}>
            <Header />
            <Nav />
            {children}
            <Footer />
        </Container>
    )
}