import classes from "./ProfilePage.module.css";
import Header from "./Header";
import Options from "./Options/Options";

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

            </div>
            <div className={classes.main}>

            </div>
        </body>
    )
}

export default ProfilePage;