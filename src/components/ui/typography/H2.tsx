import React from "react";
import { cn } from "@/lib/utils";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

const H2 = ({ children, className }: H2Props) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
  >
    {children}
  </h2>
);

export default H2;
