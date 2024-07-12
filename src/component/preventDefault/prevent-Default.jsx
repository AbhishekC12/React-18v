
export function EventBinding(){

    function handleSubmitClick(e){
        alert("Form will submit its data to Server - API");
        e.preventDefault();
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmitClick}>
               User Name <input type="text" name="UserName" /> <button type="submit">Submit</button>
            </form>
        </div>
    )
}
