import { useState } from "react";
import Menu from "../Menu/Menu";
import routes from "../../pages";
import { getClass } from "../../utils/getClass/getClass";

const BurgerMenu = (): JSX.Element => {
  const [isMenuVisible, setVisibility] = useState(false);

  const toggleVisibility = (): void => {
    setVisibility(!isMenuVisible);
  };

  return (
    <nav
      className={getClass("burger", isMenuVisible ? "burger--open" : undefined)}
    >
      <div
        data-testid="burger__icon"
        className="burger__icon"
        onClick={toggleVisibility}
      >
        <div
          className={`burger__line${
            isMenuVisible ? " burger__line--crossed" : ""
          }`}
        ></div>
      </div>

      {isMenuVisible && <Menu {...{ routes, toggleVisibility }} />}
    </nav>
  );
};

export default BurgerMenu;
