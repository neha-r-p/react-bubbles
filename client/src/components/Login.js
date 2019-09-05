// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route

import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
    // console.log(props)
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = e => {
    console.log("form submitted");
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        //   console.log(res.data.payload)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage")
      })
      .catch(err => console.log(err.response));
  };

  return (
    <><h1 className="welcome">Welcome to the Bubble App!</h1>
    <form onSubmit={login}>
      <label>
        Username:{" "}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={changeHandler}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={changeHandler}
        />
      </label>

      <button>Submit</button>
    </form></>
  );
};

export default Login;