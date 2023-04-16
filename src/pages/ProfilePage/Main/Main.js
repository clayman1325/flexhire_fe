import classes from "./Main.module.css";
import Attributes from "./Attributes";
import Profile from "./Profile";

const Main = () => {
    return (
        <div className={classes.main}>
            <Attributes />
            <Profile />
            <div className={classes.skills}>
                <div className={classes.skills_button}>
                    <button> Skills </button>
                </div>
            </div>
        </div>
    )
}

export default Main;