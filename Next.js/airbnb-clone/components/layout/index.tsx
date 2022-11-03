import { Container } from "@mui/system"
import { ReactNode } from "react"
import Footer from "./footer"
import Header from "./header"
import Nav from "./nav"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main:'#E05F5F',
        light:'#F75CA9',
        dark: '#CF3A3A',
        contrastText: '#000',
      }
    },
})
export default function Layout ({children}: {children: ReactNode}) {
    return(
        <ThemeProvider theme={theme}>
        <Container maxWidth={false}>
            <Header />
            <Nav />
            {children}
            <Footer />
        </Container>
        </ThemeProvider>
    )
}