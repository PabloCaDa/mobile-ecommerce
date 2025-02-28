import { ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useLocation } from "react-router-dom";
import { PhoneSearch } from "@/components/molecules";
import { BackButton } from "@/components/atoms";

export const NavBar = () => {
  const location = useLocation();

  const isPhonesPage = location.pathname === "/phones";

  return (
    <nav
      aria-label="Navigation bar"
      className="py-2 px-1 lg:px-4 lg:min-h-[80px] sticky z-10 top-0 bg-white"
      role="navigation"
    >
      <div className="flex items-center justify-between">
        <a href="/phones" className="text-lg font-semibold">
          <img src={logo} alt="Brand logo" />
        </a>
        <div className="flex justify-between items-center w-[38px] h-[23px]">
          <a aria-label="Shopping cart" href="/cart">
            <ShoppingCart />
          </a>
        </div>
      </div>
      {isPhonesPage ? (
        <div className="mt-3">
          <PhoneSearch />
        </div>
      ) : (
        <div className="mt-2">
          <BackButton />
        </div>
      )}
    </nav>
  );
};
