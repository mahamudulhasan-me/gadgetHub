import ReviewAnalyticsChart from "./ReviewAnalyticsChart";

const ReviewAnalytics = () => {
  return (
    <div className="bg-white rounded-md w-full">
      <div className="border-b px-2 py-3">
        <p className="border-l-4 font-semibold border-violet-700 px-1">
          Review Analytics
        </p>
      </div>
      <div className="text-gray-600 mt-5">
        <p className="px-2">Revenue Analytic with sales and profit (USD)</p>
        <ReviewAnalyticsChart />
      </div>
    </div>
  );
};

export default ReviewAnalytics;
