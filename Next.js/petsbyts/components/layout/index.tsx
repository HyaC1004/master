import { ReactNode } from "react";
import NavBar from "./navbar";

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
