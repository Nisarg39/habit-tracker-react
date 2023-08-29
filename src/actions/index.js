export const LOADHABITS= "LOADHABITS";
export const loadHabits = (data) => {
    return{
        type: "LOADHABITS",
        payload : data,
    }
}