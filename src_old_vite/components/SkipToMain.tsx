import React from 'react';

const SkipToMain = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#049704] text-white px-4 py-2 rounded-md z-50"
    >
      Skip to main content
    </a>
  );
};

export default SkipToMain;