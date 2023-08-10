import React from "react";

const SectionHead = ({ children }) => {
  return (
    <div className="border-b border-gray-300 mb-12 relative">
      <h1 className="font-semibold text-3xl mb-4">{children}</h1>
      <div className="w-16 h-1 bg-p1 absolute -bottom-0.5"></div>
    </div>
  );
};

export default SectionHead;
