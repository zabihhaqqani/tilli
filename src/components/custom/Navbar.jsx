import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navmenu from './Navmenu';
import NavBtns from './NavBtns';
import SocialMedia from './SocialMedia';
import MobileNav from './MoblieNav';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <nav>
            <div className="flex lg:fixed md:fixed items-center bg-white border py-2 w-full lg:justify-center h-[80px] z-100 justify-between lg:px-5 lg:z-50 md:z-50 lg:pl-4">
                <img
                    src="https://tilli.pro/wp-content/uploads/2023/03/tilli-software-logo.png"
                    alt="logo"
                    className="w-[100px] lg:m-0 ml-4"
                />
                <div className="lg:flex hidden">
                    <Navmenu />
                    <NavBtns />
                    <SocialMedia />
                </div>
                {!showMobileNav ? (
                    <Menu
                        size={30}
                        className="absolute right-8 cursor-pointer lg:hidden flex z-50"
                        onClick={() => setShowMobileNav(true)}
                    />
                ) : (
                    <X
                        size={30}
                        className="absolute right-8 cursor-pointer lg:hidden flex z-50"
                        onClick={() => setShowMobileNav(false)}
                    />
                )}
            </div>
            <div
                className={`absolute     top-0 left-0 w-full h-full   transform transition-transform duration-300 ease-in-out ${
                    showMobileNav
                        ? 'translate-x-0'
                        : '-translate-x-full'
                }`}
            >
                {' '}
                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;
