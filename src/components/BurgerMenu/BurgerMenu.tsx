import { useState } from "react";
import Menu from "../Menu/Menu";
import routes from "../../pages";

const BurgerMenu = (): JSX.Element => {
  const [isMenuVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isMenuVisible);
  };

  return (
    <nav className="burger">
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
