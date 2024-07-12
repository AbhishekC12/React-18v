import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom"

export function Success()
{
    let params = useParams();

    let [search] = useSearchParams();
    
    useEffect(()=>{
        for(var item of search.entries()){
            console.log(item)
        }
    },[])
    return(
        <div className="container-fluid">
            <h3>Success... {`${params.uname}`}</h3>
        </div>
    )
}