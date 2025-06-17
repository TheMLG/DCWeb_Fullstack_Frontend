import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../style/login.css";
const Login = ({ onLoginSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    const { username, password } = data;
    if (username === "admin" && password === "admin") {
      setLoginError("");
      onLoginSuccess();
    } else {
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div className="loginformcontainer">
      <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
          />
        </label>
        {errors.username && <p className="error">{errors.username.message}</p>}

        <label htmlFor="password">
          Password:
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
        </label>
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Submit</button>
        {loginError && <p className="error">{loginError}</p>}
      </form>

      
    </div>
  );
};

export default Login;
