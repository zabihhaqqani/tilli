import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const MenuSection = ({ title, submenu }) => (
    <NavigationMenuItem>
        <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
        <NavigationMenuContent className="p-3">
            <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-1 lg:w-[280px] text-[12px]">
                {submenu.map((item) => (
                    <a
                        key={item.title}
                        href={item.url}
                        className="p-2 cursor-pointer hover:bg-gray-200 rounded-md transition-all block px-4"
                    >
                        {item.title}
                    </a>
                ))}
            </ul>
        </NavigationMenuContent>
    </NavigationMenuItem>
);
export default MenuSection;
