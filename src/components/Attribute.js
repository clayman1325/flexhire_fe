import { useState } from "react";
import classes from "./Attribute.module.css";

const Attribute = (props) => {
    const [name, setName] = useState(props.name || "Edit attribute")
    const handleEdit = () => {
        alert("Edit your attriubute name and value")
    }
    return (
        <div className={classes.body} onClick={handleEdit}>
            <p>{name}</p>
            <svg className={classes.attribute_svg}>
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
        </div>
    )
}
export default Attribute;

