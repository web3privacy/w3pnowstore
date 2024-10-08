import { useState } from "react";
import {
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TEMPLATE_LINK,
  TWITTER_LINK,
} from "src/links";
import OnchainKitShopSvg from "src/svg/OnchainKitShopSvg";
import { NavbarLinkReact } from "src/types";

function NavbarLink({ link, label }: NavbarLinkReact) {
  return (
    <li>
      <a
        href={link}
        className="text-xs text-gray-600 hover:text-gray-900 flex items-center"
      >
        {label}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 w-screen fixed top-0 left-1/2 right-1/2 -mx-[50vw] bg-white">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <OnchainKitShopSvg />
            <span className="bg-gray-100 text-gray-700 text-xs font-regular px-2 py-0.5 rounded-sm">
              Template
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavbarLink link={TEMPLATE_LINK} label="FORK THIS TEMPLATE" />
              <NavbarLink link={ONCHAINKIT_LINK} label="ONCHAINKIT" />
              <NavbarLink link={GITHUB_LINK} label="GITHUB" />
              <NavbarLink link={TWITTER_LINK} label="X" />
            </ul>
          </nav>
          {/* <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-4 py-2 space-y-2">
            <NavbarLink link={TEMPLATE_LINK} label="FORK THIS TEMPLATE" />
            <NavbarLink link={ONCHAINKIT_LINK} label="ONCHAINKIT" />
            <NavbarLink link={GITHUB_LINK} label="GITHUB" />
            <NavbarLink link={TWITTER_LINK} label="X" />
          </ul>
        </div>
      )}
    </header>
  );
}
