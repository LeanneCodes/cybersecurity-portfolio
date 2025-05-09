import React, { useEffect } from "react";

const CVModal = ({ cvOpen, toggleCVModal }) => {
  // Close modal when clicking outside of it
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      toggleCVModal();
    }
  };

  useEffect(() => {
    if (cvOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cvOpen]);

  if (!cvOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[150] px-2"
      onClick={handleClickOutside}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Close Button */}
        <button
          onClick={toggleCVModal}
          className="absolute top-3 right-3 text-2xl text-black hover:text-red-500 z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* PDF Viewer for Medium and Larger Screens */}
        <div className="hidden xs:block">
          <object
            data="/LeanneGoldsmith_CV.pdf"
            type="application/pdf"
            className="w-full h-[80vh]"
          >
            <p className="p-4 text-center">
              Your browser doesn’t support PDF viewing.{" "}
              <a
                href="/LeanneGoldsmith_CV.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the CV in a new tab
              </a>
              .
            </p>
          </object>
        </div>

        {/* Fallback for Small Screens */}
        <div className="block xs:hidden p-6 text-center">
          <p className="mb-4 text-black font-medium">
            PDF viewing isn't supported on some mobile devices.
          </p>
          <a
            href="/LeanneGoldsmith_CV.pdf"
            download
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Download CV
          </a>
          <p className="mt-2 text-sm text-gray-600">
            Or open in a new tab for better viewing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
