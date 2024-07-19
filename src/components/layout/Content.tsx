import React from "react";

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="w-full flex-grow items-center justify-center p-4">
      <article className="m-4 mx-auto max-w-screen-lg rounded-lg border bg-white p-4">
        {children}
      </article>
    </main>
  );
};

export default Content;
