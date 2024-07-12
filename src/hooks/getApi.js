import { useEffect, useState } from "react";

export function useApi(url)
{
    const [data, setdata] = useState()
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(responseData=> {
            setdata(responseData);
        })
    },[url])
    return data;
}