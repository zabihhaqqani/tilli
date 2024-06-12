import menuItems from '@/data/menuItems';
import {
    NavigationMenu,
    NavigationMenuList,
} from '../ui/navigation-menu';
import MenuSection from './MenuSection';

const Navmenu = () => {
    const sections = menuItems.filter((item) =>
        ['Products', 'Services', 'Resources', 'Industries'].includes(
            item.title
        )
    );
    return (
        <NavigationMenu className="mx-2 ml-[20px] md:block hidden">
            <NavigationMenuList>
                {sections.map((section) => (
                    <MenuSection
                        key={section.title}
                        title={section.title}
                        submenu={section.submenu}
                    />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navmenu;
