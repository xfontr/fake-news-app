import { useState } from "react";
import routes from "../../pages";
import Menu from "../Menu/Menu";

const NavigationMenu = (): JSX.Element => {
  const [isMenuVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isMenuVisible);
  };

  return (
    <nav className="burger">
      <div
        data-testid="burger-icon"
        className="burger-icon"
        onClick={toggleVisibility}
      >
        <div
          className={`burger-line${
            isMenuVisible ? " burger-line--crossed" : ""
          }`}
        ></div>
      </div>

      {isMenuVisible && <Menu {...{ routes, toggleVisibility }} />}
    </nav>
  );
};

export default NavigationMenu;
