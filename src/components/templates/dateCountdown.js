import React from "react";

    const date1 = new Date();
    const date2 = new Date("03/08/2020");

    // To calculate the time difference of two dates 
    const Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        
const DateCountdown = () => {
    return (

            <span>{Math.round(Difference_In_Days)}</span>

    )
}

export default DateCountdown