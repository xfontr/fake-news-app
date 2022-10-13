import { PropsWithChildren } from "react";
import Advertisement from "../Advertisement/Advertisement";
import PageHeading from "../PageHeading/PageHeading";

export const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <header className="header">
      <span>FakeNews</span>
    </header>
    <main className="main">{children}</main>
    <footer className="footer">For Cleverpy © 2022</footer>
  </>
);

export const PageLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <PageHeading
      heading={{
        title: "Come see the latest news",
        subtitle:
          "We gather the freshest and most recent news in Barcelona, totally unopinionated.",
      }}
    />
    <div className="main__content">{children}</div>
    <aside className="main__sidebar">
      <Advertisement className="container--sticky" />
    </aside>
  </>
);
