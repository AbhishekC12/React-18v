import React from "react";

export function BindingDate()
{
    var departure = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var weekdays = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"]
    return(
        <>
        Departure : {weekdays[departure.getDay()]},{departure.getDate()},{months[departure.getMonth()]} - {departure.getFullYear()}
        </>
    )
}