import classes from "./Profile.module.css";
import Attribute from "../../../components/Attribute"
import Selector from "../../../components/Selector"
import ProfilePic from "./profile_img.jpeg"

const Profile = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.img}>
                    <img src={ProfilePic} alt="user profile picture"></img>
                </div>
                <div className={classes.info}>
                    <div className={classes.top}>
                        <div className={classes.user_name}>
                            <Attribute name="David Mejia"/>
                        </div>
                        <Selector />
                        <Selector />
                    </div>
                    <div className={classes.bottom}>
                        <p> Fullstack </p>
                        <p> Frontend</p>
                        <p> Backend</p>
                        <p></p>
                        <button> Edit </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;