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
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
    }

    // Clean up by restoring body scroll on component unmount or when cvOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cvOpen]); // Dependency on cvOpen to trigger effect when modal state changes

  if (!cvOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[150]"
      onClick={handleClickOutside} // Close modal on outside click
    >
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3">
        <iframe
          src="/LeanneGoldsmith_CV.pdf"
          title="CV PDF"
          className="w-full h-[80vh] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default CVModal;
