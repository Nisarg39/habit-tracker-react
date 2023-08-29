import { useState } from "react";
import Dates from "./Dates";
import axios from "axios";

function Habits(props){
    // const [habits, newHabits] = useState([])
    // console.log(props.habitsName)

    async function deleteHabit(event){
        // console.log(event.currentTarget.id);
        const result = await axios
        .get(`https://habittrackerapi.onrender.com/api/delete/`, 
        {
        params: { id: event.currentTarget.id },
        });
        
        window.location.reload()
    }
    return (
      <div className="bg-primary-subtle text-emphasis-primary shadow  border-top">
        <figure style={{marginBottom: "0px", backgroundColor: "#414d73"}} className="p-2 ps-5 ">
          <blockquote className="blockquote text-light fs-6">
            <p style={{display: "inline-block", width: "95%" , marginBottom: "0px"}}>{props.habitsName.name}</p>
            <button type="button" onClick={deleteHabit} id={props.habitsName._id} className="btn-close bg-light" aria-label="Close"></button>
          </blockquote>
          <figcaption className="blockquote-footer text-light " style={{marginBottom: "0px"}}>
          {props.habitsName.desc}
          </figcaption>
          
        </figure>







        {/* <h1>{props.habitsName.name}</h1>
        <h3>{props.habitsName.desc}</h3>
        <button onClick={deleteHabit} id={props.habitsName._id}>
          Delete
        </button> */}
        <div className="" style={{ overflowX: "scroll", paddingTop: "1%", paddingBottom: "2%", backgroundColor: "#99BBFF"}}>
          <Dates
            key={props.habitsName._id}
            habitId={props.habitsName.id}
            dates={props.habitsName.dates}
          />
        </div>
      </div>
    );
}

export default Habits;