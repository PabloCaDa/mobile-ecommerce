import { RestrictedContainerLayout } from "./RestrictedContainerLayout";
import { FullContainerLayout } from "./FullContainerLayout";
import { matchPath, useLocation } from "react-router-dom";
import { PageLayoutProps } from "@/types";

export const LayoutSwitcher = ({ children }: PageLayoutProps) => {
  const location = useLocation();
  console.log(location.pathname);
  const isPhoneDetailsPage = !!matchPath("/phones/:id", location.pathname);

  if (isPhoneDetailsPage) {
    return <RestrictedContainerLayout>{children}</RestrictedContainerLayout>;
  }

  return <FullContainerLayout>{children}</FullContainerLayout>;
};
