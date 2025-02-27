import React from "react";

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="w-full discover-yellow text-gray-100 py-2 px-6 text-center border-b border-gray-700">
      <div
        className="p-4  disc  rounded-lg "
        id="alert-additional-content-1"
        role="alert"
      >
        <div className="flex text-center items-center justify-center">
          <svg
            aria-hidden="true"
            className="shrink-0 w-6 h-6 me-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
        </div>
        <p className="text-sm disc mt-3  font-medium tracking-wide">
          Currently making some changes to the backend of{" "}
          <span className="font-bold antialiased text-white">Allview</span>. The
          platform is temporarily offline but will be back shortly.
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
