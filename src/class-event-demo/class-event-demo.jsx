
import React from "react";

export class ClassEventDemo extends React.Component
{
     constructor(){
        super();
        this.state = {
            Msg: ""
        }
        this.InsertClick = this.InsertClick.bind(this);
     }

     InsertClick(){
        this.setState({
            Msg: "Record Inserted"
        })
     }

     render(){
        return(
            <div className="container-fluid">
                <button onClick={this.InsertClick}>Insert</button>
                <p>{this.state.Msg}</p>
            </div>
        )
     }
}
