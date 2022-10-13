import { PropsWithChildren, ReactNode } from "react";
import PageInformation from "../../types/PageInformation";
import Advertisement from "../Advertisement/Advertisement";
import PageHeading from "../PageHeading/PageHeading";

type PageLayoutProps = {
  children: ReactNode;
  pageInformation: PageInformation;
};

export const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <header className="header">
      <span>FakeNews</span>
    </header>
    <main className="main">{children}</main>
    <footer className="footer">For Cleverpy © 2022</footer>
  </>
);

export const PageLayout = ({
  children,
  pageInformation,
}: PageLayoutProps): JSX.Element => (
  <>
    <PageHeading heading={pageInformation} />
    <div className="main__content">{children}</div>
    <aside className="main__sidebar">
      <Advertisement className="container--sticky" />
    </aside>
  </>
);
