import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const MenuSection = ({ title, submenu }) => (
    <NavigationMenuItem>
        <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
        <NavigationMenuContent className="p-3">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {submenu.map((item, index) => (
                    <a
                        href={item.url}
                        key={index}
                        className="text-[12px]"
                    >
                        {item.title}
                    </a>
                ))}
            </ul>
        </NavigationMenuContent>
    </NavigationMenuItem>
);
export default MenuSection;
