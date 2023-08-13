import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaPlus } from "react-icons/fa";
import AddCustomer from "./AddCustomer";
import CustomerLi from "./CustomerLi";

const Customers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    data: customers,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await fetch("https://gadgethub-server.vercel.app/customers");
      const data = await res.json();
      return data;
    },
  });

  const addCustomer = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {/* helmet for title  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Customers</title>
      </Helmet>
      <div className=" w-full bg-white rounded-md px-2">
        <div className="border-b p-2 flex items-center justify-between">
          <p className="border-l-4 font-semibold border-violet-700 px-1">
            All Customer
          </p>
          <p
            onClick={addCustomer}
            className="bg-[#F0F1F7] p-2 rounded-md cursor-pointer"
          >
            <FaPlus />
          </p>
        </div>
        <AddCustomer isOpen={modalOpen} onClose={closeModal} />
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
              <CustomerLi
                customer={customer}
                key={customer._id}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customers;
