import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import menuItems from '@/data/menuItems';
import MenuSection from './MenuSection';
import navBtns from '@/data/navBtns';
import { Button } from '../ui/button';
import {
    Facebook,
    Instagram,
    Linkedin,
    Menu,
    SquareMenu,
    Twitter,
} from 'lucide-react';
import SocialMedia from './SocialMedia';
import NavBtns from './NavBtns';
import Navmenu from './Navmenu';
import MoblieNav from './MoblieNav';
import { useState } from 'react';

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <nav>
            <div className="flex  lg:fixed md:fixed items-center bg-white border py-2 w-full lg:justify-center h-[80px] z-100 justify-between lg:px-5 lg:z-50 md:z-50 lg:pl-4">
                <img
                    src="https://tilli.pro/wp-content/uploads/2023/03/tilli-software-logo.png"
                    alt="logo"
                    className="w-[100px] lg:m-0 ml-4"
                />

                <div className="lg:flex  hidden">
                    <Navmenu />
                    <NavBtns />
                    <SocialMedia />
                </div>

                <Menu
                    size={30}
                    className="absolute right-8 cursor-pointer lg:hidden flex"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                />

                {showMobileNav && <MoblieNav />}
            </div>
        </nav>
    );
};

export default Navbar;
