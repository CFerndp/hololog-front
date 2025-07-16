import React from "react";

const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
    {children}
  </h1>
);

export default H1;
