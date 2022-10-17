import { Link } from "react-router-dom";
import externalLinks from "../../data/externalLinks";
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

    <section className={`navigation navigation--in`}>
      <ul className="navigation__links">
        {routes.map((route) => (
          <>
            {!route.hide && route.name && (
              <li key={route.path} className="navigation__link">
                <Link
                  key={route.name}
                  to={route.path}
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

        {externalLinks.map(({ href, name }) => (
          <li key={name} className="navigation__link navigation__link--small">
            <a {...{ href }}>{name}</a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Menu;
