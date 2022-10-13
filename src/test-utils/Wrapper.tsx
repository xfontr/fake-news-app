import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";

const Wrapper = ({ children }: PropsWithChildren): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default Wrapper;
