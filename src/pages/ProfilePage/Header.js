import LoginMenu from "../../components/LoginMenu/LoginMenu.js";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <section className={classes.section}>
            <div className={classes.left}>
                <p> Your profile </p>
            </div>
            <div className={classes.right}>
                <LoginMenu />
            </div>
        </section>
    )
}
export default Header;