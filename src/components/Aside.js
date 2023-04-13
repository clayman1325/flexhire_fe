import classes from "./Aside.module.css"
import logo from "./Logo.png"

const Aside = () => {
    return (
        <aside className={classes.main}>
            <div className={classes.header}>
                <img src={logo} className={classes.logo}/>
            </div>
            <div className={classes.body}>
                <div className={classes.flex_row}>
                    <a className={classes.as}>
                        <span className={classes.links}>
                            Profile
                        </span>
                    </a>
                </div>
                <div className={classes.flex_row}>
                    <a className={classes.as}>
                        <span className={classes.links}>
                            My Jobs
                        </span>
                    </a>
                </div>
                <div className={classes.footer}>
                </div>
            </div>
        </aside>
    )
}

export default Aside;