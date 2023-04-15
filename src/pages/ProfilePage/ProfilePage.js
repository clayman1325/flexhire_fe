import classes from "./ProfilePage.module.css";
import { useState } from "react";
import Header from "./Header";
import Availability from "./Availability";
import Visibility from "./Visibility"
import Share from "./Share.js";


const ProfilePage = () => {
    const [availabilityState, setAvailabilityState] = useState(false);

    return (
        <body className={classes.body}>
            <div className={classes.header}>
               <Header />
            </div>
            <div className={classes.options}>
                <div className={classes.share}>
                    { availabilityState && <Share /> }
                </div>
                <div className={classes.availability}>
                    <Availability state={availabilityState} setState={setAvailabilityState}/>
                </div>
                <div className={classes.visibility}>
                { availabilityState && <Visibility /> }
                </div>
            </div>
            <div className={classes.background}>

            </div>
            <div className={classes.main}>

            </div>
        </body>
    )
}

export default ProfilePage;