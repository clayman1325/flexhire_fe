import classes from "./Main.module.css";
import Button from '@mui/material/Button';
import skills_classes from "./Skills/SkillsModal.module.css";
import Attributes from "./Attributes";
import { useState } from "react";
import Profile from "./Profile";
import SkillsModal from"./Skills/SkillsModal";

const Main = () => {
    const [toggleSkills, setToggleSkills] = useState(false);
    const handleSkillsModal = () => {
        setToggleSkills(!toggleSkills)
    }

    return (
        <div className={classes.main}>
            { toggleSkills && <div className={skills_classes.skillModal}><SkillsModal toggle={toggleSkills} setToggle={setToggleSkills}/></div>}
            <Attributes />
            <Profile />
            <div className={classes.skills}>
                <div className={classes.skills_button}>
                <Button variant="contained" onClick={handleSkillsModal}> Skills </Button>
                </div>
            </div>
        </div>
    )
}

export default Main;