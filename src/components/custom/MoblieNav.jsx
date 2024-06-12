import React from 'react';
import menuItems from '@/data/menuItems';
import NavBtns from './NavBtns';
import SocialMedia from './SocialMedia';

const MobileNav = () => {
    return (
        <div className="absolute top-[75px]   bg-white py-3 w-full z-50 lg:hidden ">
            <ul className="overflow-y-scroll">
                {menuItems.map((menuItem, index) => (
                    <li key={index} className="py-2 px-4">
                        <a
                            href={menuItem.url}
                            className="text-gray-800 hover:text-blue-600 font-semibold"
                        >
                            {menuItem.title}
                        </a>
                        {menuItem.submenu && (
                            <ul className="ml-4">
                                {menuItem.submenu.map(
                                    (subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="py-2 px-4"
                                        >
                                            <a
                                                href={subItem.url}
                                                className="text-gray-600 hover:text-blue-600"
                                            >
                                                {subItem.title}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <NavBtns />
            <div className="my-2">
                {' '}
                <SocialMedia />
            </div>
        </div>
    );
};

export default MobileNav;
