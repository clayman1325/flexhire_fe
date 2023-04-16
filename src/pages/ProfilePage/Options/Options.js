import classes from "./Options.module.css";
import { useState } from "react";
import Share from "./Share";
import Visibility from "./Visibility";
import Availability from "./Availability";

const Options = (props) => {
    const [availabilityState, setAvailabilityState] = useState(false);

    return (
        <div className={classes.main}>
            <div className={props.classes.share}>
                { availabilityState && <Share /> }
            </div>
            <div className={props.classes.availability}>
                <Availability state={availabilityState} setState={setAvailabilityState}/>
            </div>
            <div className={props.classes.visibility}>
                { availabilityState && <Visibility /> }
            </div>
        </div>
    )
}

export default Options;