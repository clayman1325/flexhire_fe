import classes from "./ProfilePage.module.css";
import Header from "./Header";
import Options from "./Options/Options";
import BackgroundPhoto from "./background_photo.jpg"
import Main from "./Main/Main";
const ProfilePage = () => {
    return (
        <body className={classes.body}>
            <div className={classes.header}>
               <Header />
            </div>
            <div className={classes.options}>
                <Options classes={classes} />
            </div>
            <div className={classes.background}>
                <img src={BackgroundPhoto} alt="background image" />
            </div>
            <div className={classes.main}>
                <Main />
            </div>
        </body>
    )
}

export default ProfilePage;