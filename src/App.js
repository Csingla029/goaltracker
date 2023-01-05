import React, {useState} from 'react';
import "./App.css";
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
let data = [
    {
        title:"Do all exercises!",
        id:'g1'
    },
    {
        title:"Finish the course!",
        id:'g2'
    }
];

const App = () => {
    const [initaldata,finaldata] = useState(data); 
    const addHandler = (enteredText) => {
        finaldata(prevGoals => {
            const updatedGoals = [...prevGoals];
            console.log("hi");
            updatedGoals.unshift({ title: enteredText, id: Math.random().toString() });
            console.log(updatedGoals)
            return updatedGoals;
        } );

    };
    const deleteItemHandler = goalId => {
        finaldata(prevGoals => {
          const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
          return updatedGoals;
        });
      };
     
    return(
        <div>
           
            <div className="goalform">
            <CourseForm onAddgoal={addHandler}></CourseForm>
            </div>
            <div className="goals">
                {initaldata.length===0 ? <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>:<CourseList items={initaldata} onDeleteItem={deleteItemHandler}></CourseList>}
            </div>
        </div>
    );
};

export default App;