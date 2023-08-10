import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import bg from "../../assets/images/loginBg.jpg";
import logo from "../../assets/logo.png";
import SectionHead from "../../components/SectionHead";
import Register from "./Register";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInPage, setSignInPage] = useState(true);
  const [error, setError] = useState("");

  // user data from auth context
  //   const { logInWithGoogle, logInWithGithub, loginWithEmailAndPassword } =
  //     useContext(AuthContext);
  // navigate redirect location
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.redirectPath || "/";

  // login with google
  //   const handleGoogleSignIn = () => {
  //     logInWithGoogle()
  //       .then((user) => {
  //         const loggedUser = user.user;
  //         toast.success(`Welcome ${loggedUser.displayName}`);
  //         navigate(path);
  //       })
  //       .catch((error) => setError(error.message));
  //   };

  //login with github
  //   const handleGitHubSignIn = () => {
  //     logInWithGithub()
  //       .then((user) => {
  //         const loggedUser = user.user;
  //         toast.success(`Welcome ${loggedUser.displayName}`);
  //         navigate(path);
  //         setError("");
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //       });
  //   };

  // login with email and password
  //   const handleEmailPasswordSignIn = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     if (email && password) {
  //       loginWithEmailAndPassword(email, password)
  //         .then((user) => {
  //           const loggedUser = user.user;
  //           toast.success(`Welcome ${loggedUser.displayName}`);
  //           navigate(path);
  //           setError("");
  //         })
  //         .catch((error) => setError(error.message));
  //     }
  //   };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-[calc(100vh-5rem)] py-5 bg-cover  bg-slate-900 bg-blend-overlay flex justify-center  items-center"
    >
      <div className="md:w-3/5 px-2 md:px-0 mx-auto">
        <div className=" flex bg-slate-300 gap-1 px-6 py-3 rounded-t-xl">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <div className="md:grid grid-cols-12  ">
          <div className="col-span-5 bg-slate-950 bg-opacity-60 p-10 text-white">
            <Link to={"/"} className="md:flex  items-center gap-2">
              <img className="w-16 " src={logo} alt="" />{" "}
              <h1 className="text-p1 font-semibold text-3xl ">GadgetHub</h1>
            </Link>
            <p className="font-semibold mt-4 mb-10">
              Login using social media to get quick access
            </p>
            <div className="space-y-5">
              <Link
                // onClick={handleGoogleSignIn}
                className="socialLogin bg-green-600"
              >
                <FaGoogle /> SignIn With Google
              </Link>
              <Link
                // onClick={handleGitHubSignIn}
                className="socialLogin bg-[#171515]"
              >
                <FaGithub /> SignIn With GitHub
              </Link>
              <Link className="socialLogin bg-[#4267B2]">
                <FaFacebook /> SignIn With Facebook
              </Link>
            </div>
          </div>

          <div className="col-span-7 bg-white   p-10">
            {signInPage ? (
              <>
                <SectionHead>Login to your Account</SectionHead>
                <form
                  //   onSubmit={handleEmailPasswordSignIn}
                  className="space-y-4 md:w-4/5"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="signInUp-input"
                  />
                  <br />
                  <div className="relative">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      placeholder="Password"
                      className="signInUp-input"
                    />
                    <div
                      className="absolute top-5 text-xl right-0 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-between items-center">
                    <div>
                      <input type="checkbox" />
                      <label htmlFor=""> Remember Me</label>
                    </div>
                    <Link className="text-blue-600 hover:underline ">
                      Forget Password?
                    </Link>
                  </div>
                  {error && (
                    <p className="text-rose-500 font-semibold">
                      {error.includes("Firebase") ? error.slice(9) : error}
                    </p>
                  )}
                  <button className="bg-p1 text-white font-semibold w-full rounded-md py-3">
                    Login with email
                  </button>
                  <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      className="text-blue-600 hover:underline font-semibold"
                      onClick={() => setSignInPage(!signInPage)}
                    >
                      Sign Up Free!
                    </Link>
                  </p>
                </form>
              </>
            ) : (
              <Register
                state={path}
                setSignInPage={setSignInPage}
                signInPage={signInPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
