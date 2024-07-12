

export function EventPropagation(){

    function handleNavClick(){
        alert("Navbar Clicked");
    }
    function handleHomeClick(e){
        alert("Home Button Clicked");
        e.stopPropagation();
    }

    return(
        <div className="container-fluid">
            <nav onClick={handleNavClick} className="bg-dark text-white m-4 p-4">
                <h3>Navbar</h3>
                <button onClick={handleHomeClick} className="btn btn-light">Home</button>
            </nav>
        </div>
    )
}