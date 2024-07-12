
import { useReducer } from "react";

let initialState = {count: 0};          

function reducer(state, action){
    switch(action.type){
        case "join":
        return {count: state.count + 1};
        case "exit":
        return {count: state.count - 1};
    }
}

export function ReducerDemo(){

    const [state, dispatch] = useReducer(reducer, initialState);

    function JoinClick(){
        dispatch({type: "join"});
    }
    function ExitClick(){
        dispatch({type: "exit"});
    }

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <button onClick={JoinClick} className="btn btn-success">Join</button>
                <button onClick={ExitClick} className="btn btn-danger ms-2">Exit</button>
            </div>
            <h2>Live Broadcast</h2>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/bjxTIcuzB6k?si=7ra5xoGtO94-ozjA">
            </iframe>
            <div>
                Live Viewers : {state.count}
            </div>
         </div>
    )
}

