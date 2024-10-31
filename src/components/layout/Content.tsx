import React from "react";

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="w-full flex-grow items-center justify-center p-4">
      <article>{children}</article>
    </main>
  );
};

export default Content;
