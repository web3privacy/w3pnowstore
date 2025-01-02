import { cn, pressable } from "@coinbase/onchainkit/theme";
import { useCallback, useState } from "react";
import { ExternalLinkSvg } from "src/svg/ExternalLinkSvg";
import { MenuSvg } from "src/svg/MenuSvg";
import OnchainKitShopSvg from "src/svg/Logo";
import type { NavbarLinkReact } from "src/types";

function NavbarLink({ link, label }: NavbarLinkReact) {
  return (
    <li
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2 rounded p-1",
        pressable.default,
      )}
    >
      <a
        href={link}
        className="ock-text-foreground flex items-center text-xs"
        target="_blank"
        rel="noreferrer"
      >
        {label}
        <span className="pl-1">
          <ExternalLinkSvg />
        </span>
      </a>
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="-mx-[50vw] fixed z-10 right-1/2 left-1/2  w-screen border-gray-200 border-b ock-bg-default-reverse ock-text-inverse p-5">
      <div className="mx-auto flex h-full max-w-5xl items-center px-4 py-2 lg:px-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <OnchainKitShopSvg />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavbarLink link="https://web3privacy.info/" label="Main Site" />
              <NavbarLink link="https://github.com/web3privacy" label="Github" />
              <NavbarLink link="https://twitter.com/web3privacy" label="X" />
            </ul>
          </nav>
          <button
            type="button"
            className={cn("md:hidden", pressable.default)}
            onClick={toggleMenu}
          >
            <MenuSvg />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-[white] md:hidden">
          <ul className="flex flex-col items-start space-y-2 px-4 py-2">
            <NavbarLink link="https://web3privacy.info/" label="Main Site" />
            <NavbarLink link="https://github.com/web3privacy" label="Github" />
            <NavbarLink link="https://twitter.com/web3privacy" label="X" />
          </ul>
        </div>
      )}
    </header>
  );
}
