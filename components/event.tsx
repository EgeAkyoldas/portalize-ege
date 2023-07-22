import React from 'react';

interface EventCardProps {
  imageUrl: string;
  date: string;
  time: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, date, time, title }) => {
  return (
    <div className="bg-[#222222] flex flex-col gap-6 w-full bg-cover items-center pt-3 pb-10 px-5 rounded-[40px]">
      <img src={imageUrl} className="h-1/3 min-w-0 w-full" alt="Event Cover" />
      <div className="self-stretch flex flex-row gap-4 items-center ml-6 mr-5">
        <div className="bg-white flex flex-row mb-1 gap-1 items-center pl-6 pr-10 py-1 rounded-lg">
          <div className="whitespace-nowrap text-4xl font-['Gilroy'] font-bold text-[#272727] mt-px w-32 shrink-0">
            {date}
          </div>
          <div className="whitespace-nowrap text-xl font-['Gilroy'] font-light text-[#272727] self-end mb-1 w-[109px] shrink-0">
            / {time}
          </div>
        </div>
        <div className="relative flex flex-col w-[926px]">
          <div className="w-48 h-12 bg-[linear-gradient(95deg,_#3b29ff_28%,#9c4fff_310%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-1 left-[736px] flex flex-col items-end pt-2 pb-1 px-10 rounded-[32px]">
            <div className="text-2xl font-['Gilroy'] font-bold text-white ml-4 w-5/6 h-full cursor-pointer">
              ENROLL
            </div>
          </div>
          <div className="text-4xl font-['Gilroy'] font-bold text-white mr-16 h-full">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
