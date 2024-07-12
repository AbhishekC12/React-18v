
import { useState } from "react"

export function ReactFormDemo()
{
    const [userDetails, setUserDetails] = useState({UserName:'', Password:'', Mobile:'', City:'', Gender:''});
    const [errors, setErrors] = useState({UserName:'', Password:'', Mobile:'', City:'', Gender:''})

    function handleNameChange(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password,
            Mobile: userDetails.Mobile,
            City: userDetails.City,
            Gender: userDetails.Gender
        })
    }
    function handlePasswordChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value,
            Mobile: userDetails.Mobile,
            City: userDetails.City,
            Gender: userDetails.Gender
        })
    }
    function handleMobileChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: userDetails.Password,
            Mobile: e.target.value,
            City: userDetails.City,
            Gender: userDetails.Gender
        })
    }
    function handleCityChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: userDetails.Password,
            Mobile: userDetails.Mobile,
            City: e.target.value,
            Gender: userDetails.Gender
        })
    }

    function handleGenderChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: userDetails.Password,
            Mobile: userDetails.Mobile,
            City: userDetails.City,
            Gender: e.target.value
        })
    }

    function handleNameBlur(e){
        if(e.target.value==""){
            setErrors({UserName: 'User Name Required'});
        } else {
            setErrors({UserName: ''});
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(userDetails.UserName==""){
            setErrors({
                UserName: 'User Name Required'
            })
        } else {
            alert(JSON.stringify(userDetails));
        }
    }

    return (
        <div className="container-fluid">
           <form className="w-25" onSubmit={handleFormSubmit}>
           <h3>Register User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={handleNameBlur} onBlur={handleNameBlur} onChange={handleNameChange} className="form-control" /></dd>
                <dd className="text-danger">{errors.UserName}</dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePasswordChange} className="form-control" /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" onChange={handleMobileChange} className="form-control" /></dd>
                <dt>City</dt>
                <dd>
                    <select onChange={handleCityChange} className="form-select">
                        <option>Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Gender</dt>
                <dd>
                    <input type="radio" onChange={handleGenderChange} name="gender" value="Male" /> <label>Male</label>
                    <input type="radio" onChange={handleGenderChange} name="gender" value="Female" /> <label>Female</label>
                </dd>
            </dl>
            <button type="submit" className="btn btn-primary w-100">Register</button>
           </form>
        </div>
    )
}
