import classes from "./Skill.module.css"

const Skill = (props) => {
    console.log(props)
    return (
        <div className={classes.main}>
            <p className={classes.p}>{props.skill.name}</p> <span className={classes.span}>{props.skill.years} yrs</span>
        </div>
    )
}
export default Skill;