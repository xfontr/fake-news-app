import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUiActionCreator } from "../../store/slices/uiSlice";
import UiStatus from "../../types/UiStatus";

const modalTimeout = 1500;

const useModal = () => {
  const dispatch = useAppDispatch();
  const { status, message } = useAppSelector(({ ui }) => ui);
  const [localStatus, setLocalStatus] = useState<UiStatus>(status);

  useEffect(() => {
    if (status === "LOADING" || status === "IDLE") {
      setLocalStatus(status);
      return;
    }

    if (status === "ERROR" || status === "SUCCESS") {
      setLocalStatus(status);
    }

    setTimeout(() => {
      setLocalStatus("IDLE");
      dispatch(setUiActionCreator({ status: "IDLE", message: "" }));
    }, modalTimeout);
  }, [status, dispatch]);

  return [message, localStatus];
};

export default useModal;
