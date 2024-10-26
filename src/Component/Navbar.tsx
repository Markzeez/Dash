import { BiHome, BiSpeaker } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { MdEvent } from "react-icons/md";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return ( 
        <div className="md:hidden lg:hidden ml-[-20px] w-[400px] h-[50px] mt-1 flex flex-row justify-around items-center border-t border-gray-200 pt-3 text-[24px]">
          <NavLink to={"/"} className="w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4"><BiHome/><p className="text-sm">Home</p></NavLink>
           <NavLink to={"/event"}  className="w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4"><MdEvent/><p className="text-sm">Events</p></NavLink>
          <NavLink to={"/speaker"} className="w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4"> <BiSpeaker/><p className="text-sm">Speakers</p></NavLink>
           <NavLink to={"/report"} className="w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4"><GoReport/><p className="text-sm">Reports</p></NavLink>
          <NavLink to={"/profile"} className="w-[100px] flex flex-col items-center hover:border-t-2 border-purple-400 pt-4 mt-[10px]"><Profile isCollapsed={false} name={""} email={""} imageUrl={""}/><p className="text-sm">Profile</p></NavLink>
        </div>
     );
}
 
export default Navbar;