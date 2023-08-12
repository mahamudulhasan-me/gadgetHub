import React from "react";
import { Link } from "react-router-dom";

const SingleSummaryCard = ({
  icon: Icon,
  title,
  quantity,
  percentage,
  bgColor,
  textColor,
  chartName,
}) => {
  return (
    <div className="bg-white rounded-md p-3 flex gap-4">
      <div
        className={`${bgColor} text-white rounded-full w-10 h-10 flex justify-center items-center`}
      >
        <Icon />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <h1 className="text-2xl font-semibold mt-2 mb-4">
          {quantity.toLocaleString()}
        </h1>
        <Link className={`${textColor} underline font-semibold`}>View All</Link>
      </div>
      <div className="text-right">
        {chartName}
        <p
          className={
            percentage > 0
              ? "text-green-600 font-semibold"
              : "text-red-600 font-semibold"
          }
        >
          {percentage > 0 ? "+" : "-"}
          {percentage}$
        </p>
        <p>this month</p>
      </div>
    </div>
  );
};

export default SingleSummaryCard;
