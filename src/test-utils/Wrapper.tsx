import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: PropsWithChildren): JSX.Element => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

export default Wrapper;
