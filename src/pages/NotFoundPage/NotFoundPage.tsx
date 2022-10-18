import Button from "../../components/Button/Button";
import paths from "../../config/paths";

const NotFoundPage = (): JSX.Element => (
  <section>
    <h2>Don't worry, we still have plenty of stuff for you</h2>
    <p>You should definitely check our latest news!</p>
    <Button to={paths.news}>Read the news</Button>
  </section>
);

export default NotFoundPage;
