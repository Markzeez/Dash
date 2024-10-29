// import CardItem from "../Component/CardItem";
// import CardItemm from "../Component/CardItemm";
// import CardItems from "../Component/CardItems";
// import CardItemx from "../Component/CardItemx";
// import Downside from '../Component/Downside';
// import RightColumn from '../Component/RightColumn';
// import AreaCharts from "../Component/AreaCharts";

// const Home = () => {
//   return (
//     <div className="flex flex-col justify-between max-w-[1100px] w-fit h-fit ml-0 md:ml-[120px]  dark:bg-gray-900 text-black dark:text-white ">
//        <span className="lg:hidden w-[100px] h-[30px] border-2 border-dashed ml-[-5px] mt-2 p-1 border-b border-gray-300 ">Full Logo</span>
//        <h1 className="md:text-2xl text-2xl font-semibold font-sans mt-1 mb-3 ">Welcome! here's your Summary</h1>
//       <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-5 text-center  items-center ">
//         <CardItem/>
//         <CardItemm/>
//         <CardItems/>
//         <CardItemx/>
//       </div>
//       <span className='text-xl font-semibold  '>Event Registration per month</span>
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  sm:items-center sm:w-fit gap-4 py-2">
//         <div className="col-span-1">
//           <AreaCharts/>
//         </div>
//         <div className="col-span-1">
//           <RightColumn />
//         </div>
//       </div>
//       <div className=" dark:bg-gray-900 text-black dark:text-white">
//       <Downside/>
//       </div>
//     </div>
//   );
// };

// export default Home;

import CardItem from "../Component/CardItem";
import CardItemm from "../Component/CardItemm";
import CardItems from "../Component/CardItems";
import CardItemx from "../Component/CardItemx";
import Downside from '../Component/Downside';
import RightColumn from '../Component/RightColumn';
import AreaCharts from "../Component/AreaCharts";

const Home = () => {
  return (
    <div className="flex flex-col justify-between max-w-[1100px] w-full md:w-fit h-fit ml-0 md:ml-[120px] dark:bg-gray-900 text-black dark:text-white p-4">
      {/* <span className="lg:hidden w-[100px] h-[30px] border-2 border-dashed ml-[-5px] mt-2 p-1 border-gray-300">
        Full Logo
      </span> */}
      <h1 className="text-xl md:text-2xl font-semibold font-sans mt-1 mb-3">
        Welcome! here's your Summary
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-5 text-center items-center">
        <CardItem />
        <CardItemm />
        <CardItems />
        <CardItemx />
      </div>

      <span className="text-lg md:text-xl font-semibold mt-4 mb-2">
        Event Registration per month
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
        <div className="w-full">
          <AreaCharts />
        </div>
        <div className="w-full">
          <RightColumn />
        </div>
      </div>

      <div className="dark:bg-gray-900 text-black dark:text-white mt-4">
        <Downside />
      </div>
    </div>
  );
};

export default Home;
