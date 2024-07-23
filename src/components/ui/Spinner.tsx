import React from "react";

// Define a type for the size prop that only allows 'small', 'medium', or 'large'
type Size = "small" | "medium" | "large";

// Define the props for the Spinnter component
interface SpinnterProps {
  size?: Size; // Optional size prop
}

// Update the component to use SpinnterProps for its props type
const Spinnter: React.FC<SpinnterProps> = ({ size = "medium" }) => {
  // Determine the size classes based on the size prop
  const sizeClasses =
    size === "medium"
      ? "h-10 w-10 border-4"
      : size === "large"
        ? "h-20 w-20 border-8"
        : "h-5 w-5 border-2";

  return (
    <div className="flex justify-center">
      <div
        className={`${sizeClasses} animate-spin rounded-full border-gray-300 border-t-sintio-dark-blue`}
      />
    </div>
  );
};

export default Spinnter;
