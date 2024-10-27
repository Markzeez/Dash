// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { CiExport } from 'react-icons/ci';

// const data = [
//   {
//     name: 'Cloud Innovation Summit',
//     date: '2024-10-15',
//     speaker: 'Jane Doe',
//     status: 'Completed',
//   },
//   {
//     name: 'BlockChain Renovations Conference',
//     date: '2024-11-15',
//     speaker: 'Dr Peter Smith',
//     status: 'In Progress',
//   },
//   {
//     name: 'AI in Healthcare Symposium',
//     date: '2024-12-1',
//     speaker: 'Dr Aisha Malik',
//     status: 'Completed',
//   },
//   {
//     name: 'Future of Fintech Forum',
//     date: '2024-10-25',
//     speaker: 'John Lee',
//     status: 'Completed',
//   },
//   {
//     name: 'Data Analytics in Business',
//     date: '2024-10-15',
//     speaker: 'Rachel Moore',
//     status: 'Completed',
//   },
//   {
//     name: 'Sustainable Energy Expo',
//     date: '2024-10-15',
//     speaker: 'Prof. Alan Green',
//     status: 'Completed',
//   },
//   {
//     name: 'Web3 Interface Workshop',
//     date: '2024-10-19',
//     speaker: 'Emily Zhang',
//     status: 'Completed',
//   },
//   {
//     name: 'Cybersecurity for Startups',
//     date: "2024 - 10 - 19",
//     speaker: 'Kevin Adams',
//     status: 'In-Progress',
//   },
//   {
//     name: 'Smart Cities Forum',
//     date: "2024 - 10 - 18",
//     speaker: 'Dr. Maria Hernandez',
//     status: 'In-Progress',
//   },
//   {
//     name: 'Tech Safari Mixer',
//     date: '2024-10-15',
//     speaker: 'Guest Panel',
//     status: 'In-Progress',
//   },
//   {
//     name: 'Cloud Innovation Summit',
//     date: '2024-10-15',
//     speaker: 'Jane Doe',
//     status: 'Completed',
//   },
//   {
//     name: 'Cloud Innovation Summit',
//     date: '2024-10-15',
//     speaker: 'Jane Doe',
//     status: 'Completed',
//   },
// ];

// const Downside = () => {

//   return (
//     <div className="w-[100%] mt-2 dark:bg-gray-900 text-black dark:text-white">
//       <h1 className="font-semibold text-xl"> Events History</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 xl:grid-cols-4 sm:items-center  gap-4 text-center py-5  dark:bg-gray-900 text-black dark:text-white">
//         <div className="relative w-[300px] max-w-[400px] ">
//           <input
//             type="text"
//             className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full outline-none dark:bg-gray-900 text-black dark:text-white"
//             placeholder="Search..."
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-500"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M12.9 14.32a8 8 0 111.414-1.414l4.858 4.858a1 1 0 01-1.414 1.414l-4.858-4.858zM14.5 8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>

//         <select className="rounded p-2 w-[90px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Date</option>
//         </select>
//         <select className="rounded p-2 w-[90px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Status</option>
//         </select>
//         <select className="rounded p-2 w-[90px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Name</option>
//         </select>
//         <span>Display 100 resulting</span>
//         <select className="rounded p-2 w-[130px] dark:bg-gray-900 text-black dark:text-white">
//           <option value="">Most Recent</option>
//           <option value="">Oldest</option>
//           <option value="">Newest</option>
//         </select>
//         <BsThreeDotsVertical className="p-2 w-[35px] h-[40px] border" />
//         <span className="p-2 w-[100px] h-[30px] border flex flex-row gap-2">
//           <CiExport className="" /> Export
//         </span>
//       </div>

//       <div className='mt-2 dark:bg-gray-900 text-black dark:text-white '>
//       <table className="min-w-full  border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 text-black dark:text-white">
//       <thead className=''>
//           <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//             <th className="py-3 px-6 text-left">Event Name</th>
//             <th className="py-3 px-6 text-left">Date</th>
//             <th className="py-3 px-6 text-center">Speaker</th>
//             <th className="py-3 px-6 text-center">Status</th>
//           </tr>
//         </thead>
//         {data?.map((item) =>(<tbody className="text-gray-600 text-sm">
//           <tr className="border-b border-gray-200 hover:bg-gray-100">
//             <td className="py-3 px-6 text-left">{item.name}</td>
//             <td className="py-3 px-6 text-left">{item.date}</td>
//             <td className="py-3 px-6 text-center">{item.speaker}</td>
//             <td className="py-3 px-6 text-center">
//               <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
//               {item.status}
//               </span>
//             </td>

//           </tr>

//         </tbody>))}

//       </table>
//       </div>

//     </div>
//   );
// };

// export default Downside;

import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiExport } from 'react-icons/ci';
import { TfiControlSkipBackward, TfiControlSkipForward } from 'react-icons/tfi';
import EventCard from './EventCard';

interface EventData {
  name: string;
  date: string;
  speaker: string;
  status: string;
  description?: string; // Optional field for modal details
}

const data: EventData[] = [
  {
    name: 'Cloud Innovation Summit',
    date: '2024-10-15',
    speaker: 'Jane Doe',
    status: 'Completed',
  },
  {
    name: 'BlockChain Renovations Conference',
    date: '2024-11-15',
    speaker: 'Dr Peter Smith',
    status: 'In Progress',
  },
  {
    name: 'AI in Healthcare Symposium',
    date: '2024-12-1',
    speaker: 'Dr Aisha Malik',
    status: 'Completed',
  },
  {
    name: 'Future of Fintech Forum',
    date: '2024-10-25',
    speaker: 'John Lee',
    status: 'Completed',
  },
  {
    name: 'Data Analytics in Business',
    date: '2024-10-15',
    speaker: 'Rachel Moore',
    status: 'Completed',
  },
  {
    name: 'Sustainable Energy Expo',
    date: '2024-10-15',
    speaker: 'Prof. Alan Green',
    status: 'Completed',
  },
  {
    name: 'Web3 Interface Workshop',
    date: '2024-10-19',
    speaker: 'Emily Zhang',
    status: 'Completed',
  },
  {
    name: 'Cybersecurity for Startups',
    date: '2024 - 10 - 19',
    speaker: 'Kevin Adams',
    status: 'In-Progress',
  },
  {
    name: 'Smart Cities Forum',
    date: '2024 - 10 - 18',
    speaker: 'Dr. Maria Hernandez',
    status: 'In-Progress',
  },
  {
    name: 'Tech Safari Mixer',
    date: '2024-10-15',
    speaker: 'Guest Panel',
    status: 'In-Progress',
  },
  {
    name: 'Cloud Innovation Summit',
    date: '2024-10-15',
    speaker: 'Jane Doe',
    status: 'Completed',
  },
  {
    name: 'Cloud Innovation Summit',
    date: '2024-10-15',
    speaker: 'Jane Doe',
    status: 'Completed',
  },
  {
     name: 'AI in Healthcare Symposium',
        date: '2024-12-1',
        speaker: 'Dr Aisha Malik',
        status: 'Completed',
      },
      {
        name: 'Future of Fintech Forum',
        date: '2024-10-25',
        speaker: 'John Lee',
        status: 'Completed',
      },
      {
        name: 'Data Analytics in Business',
        date: '2024-10-15',
        speaker: 'Rachel Moore',
        status: 'Completed',
      },
      {
        name: 'Sustainable Energy Expo',
        date: '2024-10-15',
        speaker: 'Prof. Alan Green',
        status: 'Completed',
      },
      {
        name: 'Web3 Interface Workshop',
        date: '2024-10-19',
        speaker: 'Emily Zhang',
        status: 'Completed',
      },
      {
        name: 'Cybersecurity for Startups',
        date: "2024 - 10 - 19",
        speaker: 'Kevin Adams',
        status: 'In-Progress',
      },
      {
        name: 'Smart Cities Forum',
        date: "2024 - 10 - 18",
        speaker: 'Dr. Maria Hernandez',
        status: 'In-Progress',
      },
      {
        name: 'Tech Safari Mixer',
        date: '2024-10-15',
        speaker: 'Guest Panel',
        status: 'In-Progress',
      },
      {
        name: 'Cloud Innovation Summit',
        date: '2024-10-15',
        speaker: 'Jane Doe',
        status: 'Completed',
      },
      {
        name: 'Cloud Innovation Summit',
        date: '2024-10-15',
        speaker: 'Jane Doe',
        status: 'Completed',
      }
];

// Pagination Logic
const paginate = (
  data: EventData[],
  currentPage: number,
  rowsPerPage: number
) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  return data.slice(startIndex, startIndex + rowsPerPage);
};

const Downside: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const paginatedData = paginate(data, currentPage, rowsPerPage);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const toggleDetails = (index: number) => {
    setSelectedEvent(paginatedData[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const Pagination: React.FC = () => (
    <div className="py-4">
      <button
        className={`px-4 py-2 border rounded-full ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
      >
        <TfiControlSkipBackward />
      </button>
      <span>{`${currentPage} of ${totalPages}`}</span>
      <button
        className={`px-4 py-2 border rounded-full ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
      >
        <TfiControlSkipForward />
      </button>
    </div>
  );

  return (
    <div className="w-full mt-2 dark:bg-gray-900 text-black dark:text-white px-4 md:px-2">
      <h1 className="font-semibold text-xl">Events History</h1>

      {/* Search and Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-center py-5">
        <div className="relative w-full max-w-[400px] mx-auto lg:max-w-[250px]">
          <input
            type="text"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full outline-none dark:bg-gray-900 text-black dark:text-white"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.858 4.858a1 1 0 01-1.414 1.414l-4.858-4.858zM14.5 8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:gap-4 w-full lg:w-auto items-center justify-between">
          <select className="rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white">
            <option value="">Date</option>
            <option value="">Time</option>
          </select>
          <select className="rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white">
            <option value="">Status</option>
            <option value="Completed">Complete</option>
            <option value="In-Progress">In-Progress</option>
          </select>
          <select className="rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white">
            <option value="">Name</option>
            <option value="">Speakers</option>
          </select>
        </div>

        <span className="">Display {rowsPerPage} results</span>
        <div className="flex flex-row justify-between items-center gap-2">
          Sort:
          <select className="rounded p-2 w-full lg:w-[130px] dark:bg-gray-900 text-black dark:text-white">
            <option value="MostRecent">Most Recent</option>
            <option value="Oldest">Oldest</option>
            <option value="Newest">Newest</option>
          </select>
        </div>

        {/* Export & Options */}
        <div className="flex items-center gap-10">
          <BsThreeDotsVertical className="p-2 w-[35px] h-[40px] border-2 dark:border-white" />
          <span className="p-2 w-[100px] h-[40px] flex items-center gap-2 border-2 dark:border-white">
            <CiExport className="" /> Export
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="mt-2 overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Event Name</th>
              <th className="py-3 px-6 text-center hidden md:table-cell">
                Date
              </th>
              <th className="py-3 px-6 text-center hidden md:table-cell">
                Speaker
              </th>
              <th className="py-3 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => toggleDetails(index)}
              >
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-center hidden md:table-cell">
                  {item.date}
                </td>
                <td className="py-3 px-6 text-center hidden md:table-cell">
                  {item.speaker}
                </td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      item.status === 'Completed'
                        ? 'bg-green-200 text-green-600'
                        : 'bg-yellow-200 text-yellow-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventCard
          isOpen={isModalOpen}
          onClose={closeModal}
          eventData={{
            name: selectedEvent.name,
            date: selectedEvent.date,
            description: selectedEvent.description || '',
            speakers: selectedEvent.speaker.split(', '), // Assuming speakers are separated by commas
          }}
        />
      )}

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Downside;
