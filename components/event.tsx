import React from 'react';

interface EventCardProps {
  imageUrl: string;
  date: string;
  time: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, date, time, title }) => {
  return (
    <div className="bg-[#222222] flex flex-col md:gap-6 gap-2 w-full bg-cover items-center md:pt-3 md:pb-5 md:px-5  rounded-[32px]">
      <img src={imageUrl} className="md:h-1/3 min-w-0 w-full" alt="Event Cover" />
      <div className="self-stretch flex md:flex-row flex-col justify-between gap-2 items-center md:px-4">
        <div className="bg-white flex flex-row gap-1 items-center justify-center rounded-lg md:px-4 md:py-2 px-2 py-1">
          <div className="whitespace-nowrap md:text-4xl text-l font-['Gilroy'] font-bold text-[#272727]  shrink-0">
            {date}
          </div>
          <div className="whitespace-nowrap md:text-xl text-l font-['Gilroy'] font-light text-[#272727] self-end shrink-0">
            / {time}
          </div>
        </div>
        <div className="relative flex md:flex-row flex-col items-center gap-2 md:gap-6 mb-2 md:my-0">
          <div className="md:text-4xl text-l font-['Gilroy'] font-bold md:text-white text-center w-auto">
            {title}
          </div>
          <div className="w-auto h-auto bg-[linear-gradient(95deg,_#3b29ff_28%,#9c4fff_310%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat items-end rounded-[32px] px-8 py-2">
            <div className="md:text-2xl font-['Gilroy'] font-bold md:text-white h-full cursor-pointer">
              ENROLL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
