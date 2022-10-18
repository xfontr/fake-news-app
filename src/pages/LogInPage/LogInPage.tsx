import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import paths from "../../config/paths";
import schema from "../../data/logInForm.schema";
import useForm from "../../hooks/useForm/useForm";
import { useAppDispatch } from "../../store/hooks";
import { setUiActionCreator } from "../../store/slices/uiSlice";

const LogInPage = (): JSX.Element => {
  const { values, loadProps } = useForm(schema);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (): void => {
    dispatch(
      setUiActionCreator({
        status: "SUCCESS",
        message: "User logged in",
      })
    );
    navigate(paths.root);
  };

  return (
    <Form {...{ values, loadProps, schema }} onSubmit={handleSubmit}>
      <Button>Log in</Button>
    </Form>
  );
};

export default LogInPage;
