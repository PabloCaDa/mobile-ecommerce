import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const RestrictedContainerLayout = ({ children }: PageLayoutProps) => {
  return <div className="lg:w-[1200px] mx-auto">{children}</div>;
};
