

import { useState } from "react";


export function SortClass()
{
    const [sortClass, setSortClass] = useState('bi bi-sort-alpha-down btn btn-danger');

    function handleSortClick(){
        setSortClass((sortClass=='bi bi-sort-alpha-down btn btn-danger')?'bi bi-sort-alpha-up btn btn-danger':'bi bi-sort-alpha-down btn btn-danger');
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <button onClick={handleSortClick} className={sortClass}></button>
        </div>
    )
}