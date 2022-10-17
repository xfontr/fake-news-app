import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import schema from "../../data/logInForm.schema";
import useForm from "../../hooks/useForm/useForm";

const LogInPage = (): JSX.Element => {
  const { values, loadProps } = useForm(schema);

  return (
    <Form {...{ values, loadProps, schema }}>
      <Button>Log in</Button>
    </Form>
  );
};

export default LogInPage;
