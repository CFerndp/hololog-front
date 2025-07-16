import React from "react";

const Muted = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground text-sm">{children}</p>
);

export default Muted;
