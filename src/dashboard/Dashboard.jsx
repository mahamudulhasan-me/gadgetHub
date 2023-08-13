import React from "react";
import { FaUsers, FaWaveSquare } from "react-icons/fa";
import { HiReceiptTax } from "react-icons/hi";
import { Link } from "react-router-dom";
import targetBG from "../assets/images/target-bg.png";
import ReviewAnalytics from "./AllCharts/ReviewAnalytics/ReviewAnalytics";
import CustomerChart from "./AllCharts/TinnyLineChart/CustomerChart";
import RevenueChart from "./AllCharts/TinnyLineChart/RevenueChart";
import SingleSummaryCard from "./SingleSummryCard/SingleSummaryCard";
import TopDeals from "./TopDeals/TopDeals";
const Dashboard = () => {
  return (
    <div className="md:grid grid-cols-12 gap-5">
      <div className="col-span-8 w-full space-y-5">
        <ReviewAnalytics />
        <div className="md:grid grid-cols-2 text-gray-600 gap-5">
          <SingleSummaryCard
            icon={FaUsers}
            title="Total Customers"
            quantity={102580}
            percentage={40}
            bgColor="bg-violet-600"
            textColor="text-violet-600"
            chartName={<CustomerChart color={"#845ADF"} />}
          />
          <SingleSummaryCard
            icon={HiReceiptTax}
            title="Total Revenue"
            quantity={`$${56562}`}
            percentage={25}
            bgColor="bg-cyan-500"
            textColor="text-cyan-500"
            chartName={<RevenueChart color={"#23B7E5"} />}
          />
          <SingleSummaryCard
            icon={FaWaveSquare}
            title="Total Customers"
            quantity={102580}
            percentage={-12}
            bgColor="bg-green-500"
            textColor="text-green-500"
            chartName={<RevenueChart color={"#22C55E"} />}
          />
          <SingleSummaryCard
            icon={FaWaveSquare}
            title="Total Deals"
            quantity={2530}
            percentage={19}
            bgColor="bg-orange-500"
            textColor="text-orange-500"
            chartName={<RevenueChart color={"#F97316"} />}
          />
        </div>
      </div>
      <div className="col-span-4 space-y-5 ">
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
        <TopDeals />
      </div>
    </div>
  );
};

export default Dashboard;
