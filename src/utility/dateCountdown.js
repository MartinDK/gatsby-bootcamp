import React from "react";


const DateCountdown = (props) => {

    const currentDate = new Date()
    const eventDate = new Date(props.date)
    
    // To calculate the time difference of two dates 
    const Difference_In_Time = eventDate.getTime() - currentDate.getTime()
    
    // To calculate the no. of days between two dates 
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

    return (

            <span>{Math.round(Difference_In_Days)}</span>

    )
}

export default DateCountdown