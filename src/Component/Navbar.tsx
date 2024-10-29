import { BiHome, BiSpeaker } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { MdEvent } from "react-icons/md";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed bottom-0 w-full h-[60px] bg-white flex justify-around items-center border-t border-gray-200 text-[24px] z-50 md:hidden">
            <Link to="/" className="flex flex-col items-center text-black hover:border-t border-purple-400 w-[60px] py-2">
                <BiHome />
                <p className="text-xs">Home</p>
            </Link>
            <div  className="flex flex-col items-center text-black hover:border-t border-purple-400 w-[60px] py-2">
                <MdEvent />
                <p className="text-xs">Events</p>
            </div>
            <div className="flex flex-col items-center text-black hover:border-t border-purple-400 w-[60px] py-2">
                <BiSpeaker />
                <p className="text-xs">Speakers</p>
            </div>
            <div  className="flex flex-col items-center text-black hover:border-t border-purple-400 w-[60px] py-2">
                <GoReport />
                <p className="text-xs">Reports</p>
            </div>
            <div className="flex flex-col items-center text-black hover:border-t border-purple-400 w-[60px] py-2">
                <Profile isCollapsed={false} name="" email="" imageUrl="" />
                <p className="text-xs">Profile</p>
            </div>
        </div>
    );
};

export default Navbar;
