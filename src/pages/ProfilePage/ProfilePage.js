import classes from "./ProfilePage.module.css";
import Header from "./Header";

const ProfilePage = () => {
    return (
        <body className={classes.body}>
            <div className={classes.header}>
               <Header />
            </div>
            <div className={classes.background}>
                <div>
                    <buttom> Share </buttom>
                </div>
                <div>
                    <toggle> Open to opportunities </toggle>
                </div>
                <div>
                    <div> Profile visibility </div>
                </div>

            </div>
            <div className={classes.options}>

            </div>
            <div className={classes.main}>

            </div>
        </body>
    )
}

export default ProfilePage;