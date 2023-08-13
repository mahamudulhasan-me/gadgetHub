import React from "react";
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import coverPhoto from "../../assets/images/target-bg.png";
const CustomerProfile = ({ isOpen, onClose, customer }) => {
  const { name, email, phone, address, picture } = customer;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-slate-900 opacity-70"></div>
      <div className="bg-white relative p-4 rounded-md shadow-md z-10">
        <button
          className="absolute -top-5 -right-5 ring rounded-full text-rose-600"
          onClick={onClose}
        >
          <HiX className="text-2xl" />
        </button>

        <img src={coverPhoto} className="h-4/5" />

        <div className="flex gap-5 pl-6">
          <img
            src={picture}
            alt=""
            className="w-20 h-20 rounded-full ring ring-violet-600 -mt-10"
          />
          <div className="text-left mt-4">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="flex  items-center gap-1">
              <FaPhoneSquareAlt /> {phone}
            </p>
            <p className="flex  items-center gap-1">
              <FaEnvelope /> {email}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-y divide-x mt-6 ">
          <div className="p-4">
            <h4 className="font-semibold">Member Since</h4>
            <p>16 Months</p>
          </div>
          <div className="p-4">
            <h4 className="font-semibold">Order</h4>
            <p>10</p>
          </div>
          <div className="p-4">
            <h4 className="font-semibold">Position</h4>
            <p>Member</p>
          </div>
        </div>
        <p className="my-2">
          Address: {address?.street}, {address?.city}, {address?.state}-{" "}
          {address?.zip}, {address?.country}
        </p>
      </div>
    </div>
  );
};

export default CustomerProfile;
