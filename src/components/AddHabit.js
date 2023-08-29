import { useState } from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { loadHabits } from "../actions";

function AddHabit(){
    const [habit, newHabit] = useState();
    const [desc, newDesc] = useState();
    const dispatch = useDispatch();

    async function habitAdd(){
        let habitBody = {
            habit: habit,
            desc: desc
          }
        
        // using axios for sending request
        const result = await axios.post("https://habittrackerapi.onrender.com/api/add", habitBody, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        });

        // console.log(result)
        dispatch(loadHabits(result.data.habitsList))

        window.location.reload()
        
    }

    function changeTitle(event){
        newHabit(event.target.value)
    }

    function changeDesc(event){
        newDesc(event.target.value)
    }

    return (
      <div >
        <div class="row g-3" style={{width: "70%", marginLeft: "20%", marginTop: "5%", marginBottom: "2%"}}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Habit"
              aria-label="Habit"
              onChange={changeTitle}
            ></input>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Description"
              aria-label="Description"
              onChange={changeDesc}
            ></input>
          </div>
            <div class="col">
                <button onClick={habitAdd} type="button" class="btn btn-warning">Add</button>
            </div>
        </div>







        {/* <label>HabitName</label>
        <input onChange={changeTitle}></input>
        <label>Description</label>
        <input onChange={changeDesc}></input>
        <button onClick={habitAdd}>Add</button> */}
      </div>
    );
}

export default AddHabit;