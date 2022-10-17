import { HTMLAttributes } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineDownloading } from "react-icons/md";
import useModal from "../../hooks/useModal/useModal";
import Portal from "../Portal/Portal";

const Modal = (): JSX.Element => {
  const [message, localStatus] = useModal();

  const Icon = ({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element => (
    <div {...rest} data-testid={localStatus}>
      {localStatus === "LOADING" && <MdOutlineDownloading />}
      {localStatus === "SUCCESS" && <AiFillCheckCircle />}
      {localStatus === "ERROR" && <BiErrorCircle />}
    </div>
  );

  return (
    <>
      {localStatus !== "IDLE" && (
        <Portal>
          <dialog
            className={`modal modal--${localStatus.toLowerCase()} modal--in`}
          >
            <Icon className="modal__icon" />
            <span className="modal__message">{message}</span>
          </dialog>
        </Portal>
      )}
    </>
  );
};

export default Modal;
