import React, {useState} from "react"

const Friend = props => {
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({age: "", name: "", email: ""});

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.updateFriend(props.id, form);
        setIsEditing(false);
    }

    return (
        <div className="friend">
            {
                isEditing 
                ?
                <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Name:&nbsp;&nbsp;
                    <input onChange={e => {handleChange(e)}} name="name" value={form.name}/>
                </label>
                <br/>
                <label>
                    Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input onChange={e => {handleChange(e)}} type="number" name="age" value={form.age}/>
                </label>
                <br/>
                <label>
                    Email:&nbsp;&nbsp;&nbsp;
                    <input onChange={e => {handleChange(e)}} type="email" name="email" value={form.email}/>
                </label>
                <br/>
                <button type="button" onClick={e => setIsEditing(false)}>Cancel</button>
                <button type="submit">Save</button>
            </form>
                :
                    <p>
                        Name: {props.name}<br/>
                        Email: {props.email}<br/>
                        Age: {props.age}<br/>
                        <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                        <button type="button" onClick={() => props.deleteFriend(props.id)}>Delete</button>
                    </p>
            }
        </div>
    )
}

export default Friend;