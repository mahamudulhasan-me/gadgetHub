import React from "react";
import { Link } from "react-router-dom";
import targetBG from "../assets/images/target-bg.png";
import ReviewAnalytics from "./AllCharts/ReviewAnalytics/ReviewAnalytics";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-7 w-full">
        <ReviewAnalytics />
      </div>
      <div className="col-span-5 ">
        <div
          style={{ backgroundImage: `url(${targetBG})` }}
          className="w-full bg-violet-900 bg-blend-overlay text-white rounded-md p-4 bg-cover bg-opacity-80 grid grid-cols-3 gap-10 items-center"
        >
          <div className="col-span-2 space-y-5">
            <h4 className="text-xl font-semibold">Your Target is Complete</h4>
            <p>
              You have compete <span className="text-orange-600">48%</span>of
              the given target, you can also check your status
            </p>
            <Link className="font-semibold underline">Click Here</Link>
          </div>
          <div class="progress-bar">
            <progress
              value="48"
              min="0"
              max="100"
              style={{ visibility: "hidden", height: 0, width: 0 }}
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
