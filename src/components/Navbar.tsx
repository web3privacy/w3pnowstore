import { useState } from 'react';
import {
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TEMPLATE_LINK,
  TWITTER_LINK,
} from 'src/links';
import OnchainKitShopSvg from 'src/svg/OnchainKitShopSvg';
import type { NavbarLinkReact } from 'src/types';

function NavbarLink({ link, label }: NavbarLinkReact) {
  return (
    <li>
      <a
        href={link}
        className='flex items-center text-gray-600 text-xs hover:text-gray-900'
      >
        {label}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, _] = useState(false);

  return (
    <header className='-mx-[50vw] fixed top-0 right-1/2 left-1/2 w-screen border-gray-200 border-b bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <div className="flex items-center space-x-3">
            <OnchainKitShopSvg />
            <span className='rounded-sm bg-gray-100 px-2 py-0.5 font-regular text-gray-700 text-xs'>
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
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className='space-y-2 px-4 py-2'>
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
