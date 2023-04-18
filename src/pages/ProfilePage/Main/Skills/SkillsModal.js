import classes from "./SkillsModal.module.css";
import Skill from "./Skill";
import Button from '@mui/material/Button';

const SkillsModal = (props) => {
    const generalSkills = () => {
        const skills = [
            {name:"Algorithms",years:5},
            {name:"DataStructures",years:3},
            {name:"Agile",years:1},
            {name:"Leadership",years:1},
            {name:"Figma",years:5}
        ];
        return (
            <ul>
                {
                    skills.map((skill) => <li> <Skill skill={skill} /> </li>)
                }
            </ul>
        )
    }
    const frontendSkills = () => {
        const skills = [
            {name:"Javascript",years:5},
            {name:"React",years:3},
            {name:"Vue",years:1},
            {name:"Html5",years:5},
            {name:"CSS3",years:5}
        ];
        return (
            <ul>
                {
                    skills.map((skill) => {
                        console.log(skill)
                        return (<li> <Skill skill={skill} /> </li>)
                    })
                }
            </ul>
        )
    }
    const backendSkills = () => {
        const skills = [
            {name:"NodeJs",years:2},
            {name:"Ruby",years:3},
            {name:"Python",years:1},
        ];
        return (
            <ul>
                {
                    skills.map((skill) => <li> <Skill skill={skill} /> </li>)
                }
            </ul>
        )
    }
    const handleClose = () => {
        props.setToggle(!props.toggle)
    }
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <header>
                    <h2> Skills </h2>
                </header>
                <body>
                    <div className={classes.skills}>
                        <div>
                            <h3> General Skills: </h3>
                        </div>
                        <div>
                            {generalSkills()}
                        </div>
                    </div>
                    <div className={classes.skills}>
                        <div>
                            <h3> FrontEnd Skills: </h3>
                        </div>
                        <div>
                            {frontendSkills()}
                        </div>
                    </div>
                    <div className={classes.skills}>
                        <div>
                            <h3> Backend Skills: </h3>
                        </div>
                        <div>
                            {backendSkills()}
                        </div>
                    </div>
                </body>
                <footer className={classes.footer}>
                    <Button variant="contained" onClick={handleClose}> Close </Button>
                </footer>
            </div>
        </div>
    )
}
export default SkillsModal;