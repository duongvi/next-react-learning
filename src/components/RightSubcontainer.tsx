import React, { ReactNode } from "react";

interface RightSubcontainerProps {
  children?: ReactNode; // children prop can be any renderable content
}

export const RightSubcontainer: React.FC<RightSubcontainerProps> = ({ children }) => {
  return <div className="flex flex-col">
    {children}
  </div>;
}