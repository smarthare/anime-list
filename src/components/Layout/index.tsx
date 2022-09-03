import { ILayoutProps } from "../../types/components";

function Layout({ children }: ILayoutProps) {
  return (
    <main>
      {children}
    </main>
  );
}

export default Layout;
