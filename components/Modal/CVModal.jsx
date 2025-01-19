import React from "react";

const CVModal = ({ cvOpen, toggleCVModal }) => {
  if (!cvOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[150]">
      <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">My CV</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleCVModal}
          >
            ✖
          </button>
        </div>
        <div className="p-4">
          <iframe
            src="/LeanneGoldsmith_CV.pdf"
            title="CV PDF"
            className="w-full h-[60vh]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
