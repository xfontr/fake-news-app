import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import UiStatus from "../types/UiStatus";

const modalTimeout = 1500;

const useModal = () => {
  const { status, message } = useAppSelector(({ ui }) => ui);
  const [localStatus, setLocalStatus] = useState<UiStatus>(status);

  useEffect(() => {
    if (status === "LOADING") {
      setLocalStatus(status);
      return;
    }

    setTimeout(() => {
      setLocalStatus("IDLE");
    }, modalTimeout);
  }, [status]);

  return [message, localStatus];
};

export default useModal;
