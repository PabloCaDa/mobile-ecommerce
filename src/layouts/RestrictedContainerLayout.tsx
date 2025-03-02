import { PageLayoutProps } from "@/types";

export const RestrictedContainerLayout = ({ children }: PageLayoutProps) => {
  return <div className="lg:w-[1200px] mx-auto px-1 lg:px-0">{children}</div>;
};
