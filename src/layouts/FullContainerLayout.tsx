import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const FullContainerLayout = ({ children }: PageLayoutProps) => {
  return <div className="w-full px-1 lg:px-4 pb-1 mx-auto">{children}</div>;
};
