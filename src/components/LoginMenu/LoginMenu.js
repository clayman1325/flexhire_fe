import { useState } from "react";
import classes from "./LoginMenu.module.css";

import Menu from "./Menu"
import ProfileImg from "./profile_img.jpeg"
import DownArrow from "../DownArrow.js"

const LoginMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropDown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className={classes.main}>
        <div  className={classes.img}>
            <img src={ProfileImg} />
        </div>
        <div className={classes.user}> <p>WELCOME </p> <p>DAVID MEJIA!</p> </div>
        <div className={classes.logInMenu}>
            <div>
                <button onClick={handleDropDown}>
                    <DownArrow />
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