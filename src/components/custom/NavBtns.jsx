import navBtns from '@/data/navBtns';
import { Button } from '../ui/button';

const NavBtns = () => {
    return (
        <div className="flex gap-3" id="btns">
            {navBtns.map((btn) => (
                <a href={btn.url} key={btn.title}>
                    <Button>{btn.title}</Button>
                </a>
            ))}
        </div>
    );
};

export default NavBtns;
