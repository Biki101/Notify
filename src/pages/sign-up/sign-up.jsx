import React from "react";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUpStart } from "../../redux/admin/admin-action";
import "./sign-up.styles.scss";

const SignUp = ({ signUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    if (password === confirmPassword) {
      signUp({ username: username, password: password });
    }
  };

  return (
    <div className="sign-up">
      <h3>Please Sign Up</h3>
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
        <label>Confirm Password</label>
        <TextField
          id="confirm-password"
          label="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          variant="outlined"
          type="password"
        />
        <div className="sign">
          <Button variant="contained" type="submit">
            SIGN UP
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispacthToProps = (dispacth) => ({
  signUp: (adminCredentials) => dispacth(signUpStart(adminCredentials)),
});

export default connect(null, mapDispacthToProps)(SignUp);
