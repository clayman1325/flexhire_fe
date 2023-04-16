import classes from "./Attributes.module.css";
import Attribute from "../../../components/Attribute"

const Attributes = () => {
    return (
        <div className={classes.main}>
            <div className={classes.attributes_container}>
                <Attribute name="hourly rate"/>
                <Attribute name="Availability"/>
                <Attribute name="Management"/>
                <Attribute name="US eligibility"/>
            </div>
        </div>
    )
}
export default Attributes;