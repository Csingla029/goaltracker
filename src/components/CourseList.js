import React from 'react';
import "./CourseList.css";
const CourseList = (props) => {
    
    const deleteHandler = (e, id) =>{
        console.log(props.onDeleteItem)
        props.onDeleteItem(id)
    }
    console.log(props.items);
    return(
            
            <ul className="goal-list">
                {props.items.map( (goal) => 
                (<li key={goal.id} id={goal.id} className='goal-item' onClick={(e) => deleteHandler(e, goal.id)}>{goal.title}</li>))}
            
            </ul>
        
    );
};
export default CourseList;