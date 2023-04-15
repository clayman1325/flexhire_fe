import { useState } from "react";
import classes from "./LoginMenu.module.css";

import Menu from "./Menu"

const LoginMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropDown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className={classes.main}>
        <div className={classes.user}> <p>WELCOME </p> <p>DAVID MEJIA!</p> </div>
        <div className={classes.logInMenu}>
            <div>
                <button onClick={handleDropDown}>
                    <svg><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                </button>
            </div>
            <div>
                {openDropdown ? <Menu /> : <div></div>}
            </div>
        </div>
    </div>
    )
}

export default LoginMenu;