import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialMedia = () => {
    return (
        <div className="flex gap-3 mx-2">
            <Facebook className="cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-100 p-2 rounded-full h-10 w-10 " />
            <Instagram className="cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-100 p-2 rounded-full h-10 w-10 " />
            <Linkedin className="cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-100 p-2 rounded-full h-10 w-10" />
            <Twitter className="cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-100 p-2 rounded-full h-10 w-10" />
        </div>
    );
};

export default SocialMedia;
