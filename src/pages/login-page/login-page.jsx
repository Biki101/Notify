import React from "react";
import { Button, TextField } from "@material-ui/core";
import "./login.styles.scss";
import { useState } from "react";
import { signInStart } from "../../redux/admin/admin-action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      username: username,
      password: password,
    });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login">
      <h3>Please Login</h3>
      <form className="login-box" onSubmit={handleSubmit}>
        <label>Username</label>
        <TextField
          id="username"
          value={username}
          label="username"
          onChange={handleUsernameChange}
          variant="outlined"
        />
        <label>Password</label>
        <TextField
          id="password"
          label="password"
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          type="password"
        />
        <div className="sign">
          <Button variant="contained" type="submit">
            SIGN IN
          </Button>
          <div className="sign-up">
            <Link to="/signup">SIGN UP</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispacth) => ({
  login: (username, password) => dispacth(signInStart(username, password)),
});

export default connect(null, mapDispatchToProps)(Login);
