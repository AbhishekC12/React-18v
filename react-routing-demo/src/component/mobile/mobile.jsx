import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Mobile()
{
    const [mobiles,setMoile] = useState([{Name:"Realme - C15",Category:"realme"},{Name:"Iphone - 14 Pro",Category:"iphone"},{Name:"Iphone-15 Pro Max",Category:"iphone"}])

    const params = useParams('')

    return(
        <div className="container-fluid">
            <header>
                <h3>Mobile You Searching For - {params.category.toUpperCase()}</h3>
            </header>
            <table width="400" border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        mobiles.filter(mobile=> mobile.Category === params.category).map(item=>
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Category}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}