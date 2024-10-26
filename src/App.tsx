import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import RootLayout from "./Layout/RootLayout";
import Profile from "./Component/Profile";
import Event from "./Page/Event";
import Report from "./Page/Report";
import Speakers from "./Page/Speakers";


const App = () => {
  return ( 
    <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/event" element={<Event/>} />
      <Route path="/report" element={<Report/>} />
      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/profile" element={<Profile isCollapsed={false} name={""} email={""} imageUrl={""} />} />
    </Route>
  </Routes>
   );
}
 
export default App;