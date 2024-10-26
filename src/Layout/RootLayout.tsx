import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";

const RootLayout = () => {
    
    return ( 
        <div className="flex bg-[#ffffff] dark:bg-gray-900 text-black dark:text-white">
        <Sidebar />
        <main className="flex-grow p-6 dark:bg-gray-900 text-black dark:text-white">
            <Outlet/>
            <Navbar/>
        </main>
        
        </div>
    );
}
 
export default RootLayout;