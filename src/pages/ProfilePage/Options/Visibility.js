import classes from "./Visibility.module.css"
import { useState } from "react"
import DownArrow from "../../../components/DownArrow";

const Visibility = () => {
    const [visibilityState, setVisibilityState] = useState("Private");
    const [toggleDropDown, setToggleDropDown] = useState(false)
    const handleVisibility = () => {
        setToggleDropDown(!toggleDropDown)
    }
    const changeVisibility = (e) => {
        setVisibilityState(e.target.textContent)
        setToggleDropDown(!toggleDropDown)
    }
    return (
        <div className={classes.main}>
            <div className={classes.config} onClick={handleVisibility}>
                <p className={classes.profileName}>Profile Visibility</p>
                <p className={classes.visibilityState}>{visibilityState}</p>
                <span><DownArrow /></span>
            </div>
            { toggleDropDown && <div className={classes.ul}>
                    <ul>
                        <li onClick={changeVisibility}>Public</li>
                        <li onClick={changeVisibility}>Clients only</li>
                        <li onClick={changeVisibility}>Private</li>
                    </ul>
                </div>
            }
        </div>
    )
}
export default Visibility;