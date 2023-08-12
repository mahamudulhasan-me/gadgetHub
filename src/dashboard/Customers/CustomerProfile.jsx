import React, { useEffect } from "react";

const CustomerProfile = ({ isOpen, onClose, customer }) => {
  useEffect(() => {
    const handleCloseOnOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleCloseOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseOnOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded-md shadow-md z-10">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold mb-4">{customer.name}</h2>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
        {/* Add additional customer details here */}
      </div>
    </div>
  );
};

export default CustomerProfile;
