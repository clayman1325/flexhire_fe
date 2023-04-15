
import classes from "./Availability.module.css";

const Availability = (props) => {
    const toggleHandler = () => {
        props.setState(!props.state)
    }

    return (
        <div>
            <label>
                <input type="checkbox" defaultChecked={props.state} onClick={toggleHandler} />
                <span className={classes.span} />
            </label>
            <strong> Open to opportunities </strong>
        </div>
    )
}
export default Availability;