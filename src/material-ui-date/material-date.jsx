
import { TextField } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export function MaterialDate()
{

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="container-fluid">
                <h2>Departure</h2>
            <div className="w-25">
                <DatePicker />
            </div>
           </div>
        </LocalizationProvider>
    )
}