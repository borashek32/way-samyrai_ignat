import React from 'react'
import classes from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        return props.deleteAffairCallback(props.affair._id)
    } // need to fix

    return (
        <div className={classes.someClass}>
            <p>{props.affair.name} - {props.affair.priority}</p>

            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
