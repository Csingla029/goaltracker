import React,{ useState } from 'react';
import "./CourseForm.css"

const CourseForm = (props) => {
    const [enteredvalue,newvalue] = useState(''); 
    const changeHandler = (event) => {
        newvalue(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        // console.log("enteredvalue");
        // console.log(enteredvalue);
        if (enteredvalue.trim().length === 0)
        {
            return;
        }
        props.onAddgoal(enteredvalue);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="formblock">
                <label>Course Goal</label>
                <input type="text" onChange={changeHandler} />
            </div>
            <button className="button" type="submit">Add Goal</button>
        </form>
    );
};
export default CourseForm;