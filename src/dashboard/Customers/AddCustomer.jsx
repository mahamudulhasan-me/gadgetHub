import React from "react";
import { HiX } from "react-icons/hi";
const AddCustomer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-slate-900 opacity-70"></div>
      <div className="bg-white relative p-4 rounded-md shadow-md z-10 w-1/2 mx-auto">
        <button
          className="absolute -top-5 -right-5 ring rounded-full text-rose-600"
          onClick={onClose}
        >
          <HiX className="text-2xl" />
        </button>
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
          <form
            novalidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label for="firstname" className="text-sm">
                    First name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label for="address" className="text-sm">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="city" className="text-sm">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="state" className="text-sm">
                    State / Province
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="zip" className="text-sm">
                    ZIP / Postal
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCustomer;
