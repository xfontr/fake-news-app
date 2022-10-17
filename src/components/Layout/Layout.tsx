import { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";
import paths from "../../config/paths";
import PageInformation from "../../types/PageInformation";
import Advertisement from "../Advertisement/Advertisement";
import PageHeading from "../PageHeading/PageHeading";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Modal from "../Modal/Modal";

type PageLayoutProps = {
  children: ReactNode;
  pageInformation: PageInformation;
};

export const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <Modal />
    <header className="header">
      <Link to={paths.root}>FakeNews</Link>
      <BurgerMenu />
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
