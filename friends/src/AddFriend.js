import React, {useState} from "react"
import axiosWithAuth from "./axiosWithAuth";


const AddFriend = () => {
    const [state, setState] = useState({name: "", age: "", email: ""})

    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post(
            "/api/friends", 
            {name: state.name, age: state.age, email: state.email},
        )
        .then(resp => {
            console.log(resp);
        })
        .catch(error => {
            console.log(error);
        })
        setState({name: "", age: "", email: ""});
    }
    
    return (
        <div className="add-friend">
            <h1>Add Friend</h1>
            <form onSubmit={e => {handleSubmit(e)}}>
                <label>
                    Name:&nbsp;&nbsp;
                    <input onChange={e => {handleChange(e)}} name="name" value={state.name}/>
                </label>
                <br/>
                <label>
                    Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input onChange={e => {handleChange(e)}} type="number" name="age" value={state.age}/>
                </label>
                <br/>
                <label>
                    Email:&nbsp;&nbsp;&nbsp;
                    <input onChange={e => {handleChange(e)}} type="email" name="email" value={state.email}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddFriend