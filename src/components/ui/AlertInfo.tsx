import React from "react";

// Step 1: Define a type for the component's props
type AlertInfoProps = {
  message: string; // Add a message prop
};

// Step 2: Modify the function to accept props
const AlertInfo: React.FC<AlertInfoProps> = ({ message }) => {
  return (
    <div className="not-prose rounded-md border-l-4 border-blue-500 bg-blue-50 px-4 md:mx-auto md:px-8">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3 self-center">
            <span className="font-semibold text-blue-500">Note</span>
            <p className="mt-1 text-blue-500">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertInfo;
