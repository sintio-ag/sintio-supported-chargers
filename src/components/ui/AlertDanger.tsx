import React from "react";

// Step 1: Define a type for the component's props
type AlertDangerProps = {
  message: string; // Add a message prop
};

// Step 2: Modify the function to accept props
const AlertDanger: React.FC<AlertDangerProps> = ({ message }) => {
  return (
    <div className="not-prose rounded-md border-l-4 border-red-500 bg-red-50 px-4 md:mx-auto md:px-8">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3 self-center">
            <span className="font-semibold text-red-600">Error</span>
            <p className="mt-1 text-red-600">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDanger;
