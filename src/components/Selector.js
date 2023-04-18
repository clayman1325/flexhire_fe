import classes from "./Selector.module.css";

const Selector = (props) => {
    return (
        <div className={classes.main}>
            <p>{props.name}</p>
        </div>
    )
}
export default Selector;