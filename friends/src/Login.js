import React, {useState} from "react";
import {axiosWithAuth} from "./axiosWithAuth";

const Login = props => {
    const [state, setState] = useState({username: "", password: "", isLoading: false});

    const login = e => {
        e.preventDefault();
        
        setState({...state, isLoading: true});
        
        axiosWithAuth()
        .post(
            "http://localhost:5000/api/login", 
            {username: state.username, password: state.password}
        )
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.payload);
            props.history.push("/friends_list");
            setState({...state, isLoading: false});
        })
        .catch(error => {
            console.log(error)
            setState({...state, isLoading: false});
        });
    };

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="login">
            {
                state.isLoading 
                ?
                    <p>Loading...</p>
                :
                    <form onSubmit={(e) => login(e)}>
                        <input
                            type="text"
                            name="username"
                            value={state.username}
                            onChange={e => handleChange(e)}
                        /><br/>
                        <input
                            type="password"
                            name="password"
                            value={state.password}
                            onChange={e => handleChange(e)}
                        />
                        <button>Login in</button>
                    </form>
            }
            
        </div>
    );
}

export default Login;