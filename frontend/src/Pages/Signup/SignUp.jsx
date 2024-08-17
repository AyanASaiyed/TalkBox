import React from "react";
import GenderBox from "./GenderBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <h1 className="text-3xl font-semibold text-center text-yellow-500">
        TalkBox
      </h1>
      <div className="w-full p-6 rounded-lg shadow-md bg-yellow-200 bg-clip-padding backdrop0filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign Up
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="'Jack Jones'"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="'jackjones15"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password Again"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderBox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-yellow-200">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
