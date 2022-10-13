import { PropsWithChildren } from "react";
import Advertisement from "../Advertisement/Advertisement";

const BasicLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <header className="header">
      <h1>Lorem ipsum</h1>
    </header>
    <main className="main">{children}</main>
    <footer className="footer">For Cleverpy 2022</footer>
  </>
);

const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <BasicLayout>
      <div className="main__content">{children}</div>
      <aside className="main__sidebar">
        <Advertisement isSticky={true} />
      </aside>
    </BasicLayout>
  </>
);

export default Layout;
