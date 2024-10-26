import { ImCancelCircle } from 'react-icons/im';
import ImageStack from './ImageStack';

interface EventCardProps {
  isOpen: boolean;
  onClose: () => void;
  eventData: {
    name: string;
    date: string;
    description: string;
    speakers: string[];
  };
}

const EventCard: React.FC<EventCardProps> = ({ isOpen, onClose, eventData }) => {
  const images = [
    'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729476906/Image_y1xfcp.jpg',
    'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729476907/Avatar_1_vcmpm8.jpg',
    'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729476906/Avatar_2_ck571i.jpg',
  ];

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 bg-transparent w-full h-full flex justify-center items-center dark:bg-gray-900 text-black dark:text-white">
      <div className="bg-white w-[90%] sm:w-[400px] h-auto mt-1 rounded shadow-md relative">
        <div className="p-6">
          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">{eventData.name}</h1>
            <ImCancelCircle onClick={onClose} className="cursor-pointer" />
          </div>
          <p className="text-xs text-gray-500">{eventData.date}</p>
          <p className="text-xs text-gray-500 mb-4">{eventData.description}</p>

          {/* Image Stack */}
          <ImageStack images={images} />

          {/* Speakers */}
          <p className="text-sm mt-4">
            {eventData.speakers.length} Guest Speakers: {eventData.speakers.join(', ')}
          </p>
        </div>

        {/* Action Buttons with gray background */}
        <div className="bg-gray-200 p-4 rounded-b-md">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button className="text-sm bg-white shadow-md border p-2 w-full sm:w-auto">
              Edit
            </button>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="text-sm bg-red-400 shadow-md border p-2 w-full sm:w-auto">
                Delete
              </button>
              <button className="text-sm bg-purple-400 shadow-md border p-2 w-full sm:w-auto">
                Mark as completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
