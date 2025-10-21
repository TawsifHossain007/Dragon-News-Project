import React, { useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn, handleForgetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => navigate(location.state ? location.state : "/"))
      .catch((err) => console.error(err));
  };

  const handleForget = () => {
    const email = emailRef.current?.value;
    handleForgetPassword(email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-[15px]">Email Address</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
            />
            <label className="label font-semibold text-[15px]">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <button type="button" onClick={handleForget} className="link link-hover">
                Forgot password?
              </button>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-[15px] text-center pt-2">
              Don’t Have An Account?{" "}
              <span className="text-red-500">
                <Link to="/auth/register">Register</Link>
              </span>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
