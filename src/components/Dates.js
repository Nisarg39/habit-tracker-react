import { useState } from "react";
import axios from 'axios';
function Dates(props){
    // console.log(props.dates[0].day)
    // console.log(props.habitId)

    async function updateStatus(habitId,dateId, mark){
        // console.log(mark)
        // <%= HabitsList[habits]._id %>&<%= datesArray[date]._id %>&done
        const result = await axios
        .get(`https://habittrackerapi.onrender.com/api/status/${habitId}&${dateId}&${mark}`, 
            {
            headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        });

        // console.log(result)
        window.location.reload()
    }

    return (
      <div class="row" style={{marginLeft: "30px", }}>
        {props.dates.map((date) => (
            <div class="col-sm-2 mb-3 mb-sm-0" style={{ height: "200px"}}>
              <div class="card border border border-0 " style={{ height: "200px"}}>
                <div class="card-body border border-1 border-opacity-10 p-3" style={{borderRadius: "10px",boxShadow: "4.2px 8.5px 8.5px #414d73", padding: "0px"}}>
                  <h5 class="card-title text-center border-bottom border-1 border-opacity-50" >{date.day}/{date.month}/{date.year}</h5>

                  {/* Status Images */}

                   {date.status === "notdone" ?
                    <img src="https://cdn-icons-png.flaticon.com/256/11330/11330390.png" style={{width: "70px", marginLeft: "20%", marginBottom: "5%"}}></img>
                    :
                    <></>
                    }

                    {date.status === "done" ?
                    <img src="https://cdn-icons-png.flaticon.com/256/7603/7603332.png" style={{width: "75px", marginLeft: "25%"}}></img>
                    :
                    <></>
                    }

                    {date.status === "none" ?
                    <>
                    <img style={{width: "75px", marginLeft: "25%"}} src="https://static.thenounproject.com/png/1439828-200.png"></img>
                    </>
                    // <div style={{width: "75px", marginBottom: "60%"}}></div>
                    :
                    <></>
                    }
                

                {/* Buttons */}

                {date.status === "none" || date.status === "notdone" ?
                    <button 
                    style={{}} 
                    type="button" 
                    className="btn btn-success mt-3 ms-4"
                    onClick={() => updateStatus(props.habitId,date.id, "done")} id={date.id}
                    >Mark As Done</button>
                    :
                    <></>
                }

                {date.status === "done"?
                    <button style={{}} 
                    type="button" 
                    class="btn btn-danger mt-3 ms-2"
                    onClick={() => updateStatus(props.habitId,date.id, 'notdone')}
                    id={date.id}
                    >Mark As Not Done</button>
                    :
                    <></>
                }
                
                </div>
              </div>
            </div>
        ))}
      </div>
    );
}

export default Dates;