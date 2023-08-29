import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore, } from "react-redux";
import { loadHabits } from '../actions';
import Habits from './Habits';
import AddHabit from './AddHabit';


function App() {
  const dispatch = useDispatch();
  const store = useStore();
  const [habitsList, newHabitsList] = useState([]);
  const storeHabit = useSelector((state) => state.handleChange.habitsList)


  useEffect(() => {
    fetchdata()
  }, [])


  async function fetchdata(){
    let habitsFetched = await axios.get("https://habittrackerapi.onrender.com/api/")
    // console.log(habitsList.data.habitsList)
    dispatch(loadHabits(habitsFetched.data.habitsList))
    // console.log(store.getState().handleChange.habitsList[0].name)
    newHabitsList(...habitsList, store.getState().handleChange.habitsList)
    
    // console.log(habitsList)
  }

  return (
    <div className="App bg-light">
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning fixed-top" style={{padding: "0px"}}>
            {/* <div class="container-fluid"> */}
              <img className='ps-5' src='https://cdn-icons-png.flaticon.com/256/6782/6782244.png' style={{height: "70px"}}></img>
              <span style={{paddingLeft: "30%", fontSize: "25px", color: "#414d73", fontWeight: "bolder", fontFamily: "monospace"}}>HABIT TRACKER REACT</span>
            {/* </div> */}
          </nav>
     <AddHabit />
     {habitsList.map(habit => (
      <>
      <Habits 
        key={habit.id}
        habitsName = {habit}
      />
      </>
      
     ))}
    </div>
  );
}

export default App;
