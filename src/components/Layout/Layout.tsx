import { PropsWithChildren } from "react";
import Advertisement from "../Advertisement/Advertisement";

const BasicLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <header className="header">
      <span>Raging news</span>
    </header>
    <main className="main">{children}</main>
    <footer className="footer">For Cleverpy © 2022</footer>
  </>
);

const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <BasicLayout>
      <div className="main__content">{children}</div>
      <aside className="main__sidebar">
        <Advertisement className="container--sticky" />
      </aside>
    </BasicLayout>
  </>
);

export default Layout;
