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
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[150]"
      onClick={handleClickOutside}
    >
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={toggleCVModal}
          className="absolute top-3 right-3 text-2xl text-black hover:text-red-500 z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        <iframe
          src="/LeanneGoldsmith_CV.pdf"
          title="CV PDF"
          className="w-full h-[80vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default CVModal;
