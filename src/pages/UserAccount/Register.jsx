import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SectionHead from "../../components/SectionHead";

const Register = ({ setSignInPage, signInPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  //   const { createNewUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(true);

  const navigate = useNavigate();
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassError("");
    const password = e.target.value;
    if (!/(?=.*?[A-Z])/.test(password)) {
      setPassError("At least one upper case");
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setPassError("At least one lower case");
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setPassError("At least one digit");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setPassError("At least one special character");
    } else if (password.length < 6) {
      setPassError("Minimum password length is 6 characters");
    }
    setPassword(password);
  };
  // create new user with email and password
  //   const registerUser = (e) => {
  //     e.preventDefault();
  //     if (!passError) {
  //       const form = e.target;
  //       const name = form.name.value;
  //       const photo = form.photoURL.value;
  //       createNewUser(email, password)
  //         .then((userCredential) => {
  //           const loggedUser = userCredential.user;
  //           updateProfile(loggedUser, {
  //             displayName: name,
  //             photoURL: photo,
  //           })
  //             .then(toast.success("Registration Successful"))
  //             .catch((err) => toast(err.message));
  //           navigate("/");
  //         })
  //         .catch((error) => setPassError(error.message));
  //     }
  //   };

  return (
    <>
      <SectionHead>Sign Up For Free</SectionHead>
      <form
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        // onSubmit={registerUser}
        className="space-y-4 md:w-4/5"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="signInUp-input"
        />
        {/* <input
          type="url"
          name="photoURL"
          placeholder="Photo URL"
          className="signInUp-input"
        /> */}
        <input
          type="number"
          className="signInUp-input"
          placeholder="Mobile Number"
          required
        />

        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={getEmail}
          placeholder="Email Address"
          className="signInUp-input"
        />
        <br />
        <div className="relative">
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            value={password}
            required
            onChange={getPassword}
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
        <p className="font-semibold text-rose-600">{passError}</p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            className="h-4 w-4"
            onClick={() => setAcceptTerms(!acceptTerms)}
          />
          <label htmlFor="" className="text-black">
            Accept{" "}
            <Link className="text-blue-600 hover:underline font-semibold">
              Terms & Condition
            </Link>
          </label>
        </div>
        <button
          disabled={acceptTerms}
          className={`bg-p1 text-white font-semibold w-full rounded-md py-3 ${
            acceptTerms ? "bg-opacity-70" : "bg-opacity-100"
          }`}
        >
          Sign up with email
        </button>
        <p className="text-center text-black">
          Have an account?{" "}
          <Link
            className="text-blue-600 hover:underline font-semibold"
            onClick={() => setSignInPage(!signInPage)}
          >
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
