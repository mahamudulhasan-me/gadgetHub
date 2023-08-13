import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import CustomerProfile from "./CustomerProfile";

const CustomerLi = ({ customer, index }) => {
  const { name, email, phone, address, picture } = customer;
  //   bg-[#F0F1F7]
  const [modalOpen, setModalOpen] = useState(false);

  const handleCustomerProfile = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <tr className=" text-center space-y-3">
      <td>{index + 1}</td>
      <td className="flex items-center gap-2">
        <img src={picture} className="w-12 h-12 rounded-full" alt="" />{" "}
        <p>{name}</p>
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="flex gap-2 items-center justify-center text-2xl mb-3">
        <button>
          <HiX className="text-rose-600 mb-3 cursor-pointer" />
        </button>
        <FaUserEdit className="text-orange-600 mb-3 cursor-pointer" />
      </td>
      <td>
        <button
          onClick={handleCustomerProfile}
          className="bg-violet-600 px-2 py-1 rounded-lg text-white"
        >
          View Details
        </button>
        {/* Pass modalOpen and closeModal as props to the Modal */}
        <CustomerProfile
          isOpen={modalOpen}
          onClose={closeModal}
          customer={customer}
        />
      </td>
    </tr>
  );
};

export default CustomerLi;
