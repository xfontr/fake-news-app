import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const root = document.getElementById("root")!;

const Modal = (): JSX.Element => {
  const Portal = ({ children }: PropsWithChildren): JSX.Element =>
    createPortal(children, root);

  return (
    <Portal>
      <div className="modal"></div>
    </Portal>
  );
};

export default Modal;
