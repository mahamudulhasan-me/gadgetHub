import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPlus } from "react-icons/fa";
import CustomerLi from "./CustomerLi";

const Customers = () => {
  const {
    data: customers,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/customers");
      const data = await res.json();
      return data;
    },
  });
  console.log(customers);
  return (
    <div className=" w-full bg-white rounded-md px-2">
      <div className="border-b p-2 flex items-center justify-between">
        <p className="border-l-4 font-semibold border-violet-700 px-1">
          All Customer
        </p>
        <p className="bg-[#F0F1F7] p-2 rounded-md">
          <FaPlus />
        </p>
      </div>
      <table className="w-full h-fit text-gray-600 border-spacing-5 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Join At</th>
            <th>Action</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody className="space-y-5">
          {customers?.map((customer, index) => (
            <CustomerLi customer={customer} key={customer._id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;