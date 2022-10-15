import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import paths from "../../config/paths";

const Breadcrumbs = (): JSX.Element => {
  const { pathname } = useLocation();
  const userPaths = pathname.split("/");
  userPaths.splice(0, 1);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="breadcrumbs">
      <Link key={"home"} to={paths.root}>
        FakeNews
      </Link>

      {userPaths.map((path, index) =>
        index === userPaths.length - 1 ? (
          ` / ${path}`
        ) : (
          <Link key={path} to={`/${path}`}>
            {` / ${path}`}
          </Link>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
