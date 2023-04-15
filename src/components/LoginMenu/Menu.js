import classes from "./Menu.module.css";
const Menu = () => {
    return (
        <div className={classes.menu}>
            <button> LOGOUT </button>
            <button> Developer API </button>
            <button> Api playground </button>
        </div>
    )
}
export default Menu;