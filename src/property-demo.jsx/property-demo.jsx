
import { DataGrid } from "../component-libary/data-grid"

export function PropertyDemo()
{
    return(
        <div className="container-fluid">
            <DataGrid theme={'table-primary table-striped'} caption="Employee Table - Updated Nov 2023" fields={["First Name", "Last Name", "Designation"]} data={[{FirstName:"Raj", LastName:"Kumar", Designation:"Manager"}, {FirstName:"Kiran", LastName:"Rao", Designation:"Developer"}]} />
            <DataGrid theme={'table-warning table-bordered'} caption="Product Details" fields={["Name", "Price"]} data={[{Name:"TV", Price:34000}, {Name:"Mobile", Price:12300.33}, {Name:"Watch", Price:4600.33}]} />
        </div>
    )
}   