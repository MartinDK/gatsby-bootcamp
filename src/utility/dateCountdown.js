import React from "react";


const DateCountdown = (props) => {

    const currentDate = new Date()
    const eventDate = new Date(props.date)
    
    // calculate the time difference of two dates 
    const Difference_In_Time = eventDate.getTime() - currentDate.getTime()
    
    // calculate the no. of days between two dates 
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

    return (

            <span>{Math.abs(Math.round(Difference_In_Days))}</span>

    )
}

export default DateCountdown