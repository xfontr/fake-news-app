import { HTMLAttributes } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineDownloading } from "react-icons/md";
import useModal from "../../hooks/useModal";
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
          <div
            className={
              localStatus === "ERROR"
                ? "modal modal--error"
                : "modal modal--success"
            }
          >
            <Icon className="modal__icon" />
            <span className="modal__message">{message}</span>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
