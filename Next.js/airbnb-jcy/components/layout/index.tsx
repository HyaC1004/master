import { AppBar, createTheme, ThemeProvider, Box } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import CloneHeader from "./clone-header";
import CloneNav from "./clone-nav";

type Props = { children: ReactNode };
export default function DefaultLayout({ children }: Props) {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <AppBar position="fixed" color="inherit" elevation={0} sx={{ mb: 3 }}>
        <CloneHeader />
        <CloneNav />
      </AppBar>
      <Container maxWidth={"xl"} sx={{ py: 10 }}>
        {children}
      </Container>
    </Container>
  );
}
