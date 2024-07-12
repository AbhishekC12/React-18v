import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export function TutorialVideos(){

    const [cookies, setCookie, removeCookie] = useCookies(['uname']);
    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies.uname==null){
            navigate("/login");
        }
    },[]);

    function handleSignoutClick(){
        removeCookie('uname');
        navigate("/login");
    }

    return(
        <div>
            <h3>Our Tutorial Videos - {cookies.uname} - <button onClick={handleSignoutClick} className="btn btn-link"> Signout </button> </h3>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/tm7kVn8abSg"></iframe>
        </div>
    )
}