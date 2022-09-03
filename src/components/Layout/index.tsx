import { ILayoutProps } from "../../types/components";
import Header from "../Header";

function Layout({ children }: ILayoutProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default Layout;
