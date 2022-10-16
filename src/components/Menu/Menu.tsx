import { Link } from "react-router-dom";
import RouteType from "../../types/RouteType";

type MenuProps = {
  routes: RouteType[];
  toggleVisibility: () => void;
};

const Menu = ({ toggleVisibility, routes }: MenuProps): JSX.Element => (
  <div className="modal-cover">
    <div
      data-testid="modal-close-area"
      className="modal-close-area"
      onClick={toggleVisibility}
    ></div>

    <section className={"navigation navigation--in"}>
      <ul className="navigation__links">
        {routes.map((route) => (
          <>
            {!route.hide && (
              <li className="navigation__link" key={route.path}>
                <Link
                  key={route.name}
                  to={route.path}
                  className="navigation__link"
                  onClick={() => {
                    toggleVisibility();
                  }}
                >
                  {route.name}
                </Link>
              </li>
            )}
          </>
        ))}
      </ul>
    </section>
  </div>
);

export default Menu;
