import React, { useState } from 'react';

interface TempPlacesProps {
  title: string;
  backgroundImage: string;
  total: number;
}

const TempPlaces: React.FC<TempPlacesProps> = ({ title, backgroundImage, total }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className={`${
        expanded
          ? 'bg-[url(https://file.rendit.io/n/2t7HTrwbmVsETD9cxXcj.png)] bg-no-repeat bg-cover flex flex-col gap-16 w-full h-[603px] px-8 py-12 rounded-xl cursor-pointer'
          : 'flex flex-row justify-end w-full h-64 bg-no-repeat bg-cover items-end pb-4 px-8 rounded-xl cursor-pointer'
      }`}
      style={divStyle}
      onClick={handleToggle}
    >
      {expanded ? (
        <div className="flex flex-row items-center justify-between mb-3 ml-5 pr-5">
          <div className="flex flex-col gap-1 items-start mt-8">
            <div className="whitespace-nowrap font-['Gilroy'] font-light text-white">
              Owner: Nodaud
            </div>
            <div className="whitespace-nowrap text-5xl font-['Gilroy'] font-bold text-white self-stretch">
              {title}
            </div>
          </div>
          <div className="flex flex-row gap-4 self-end justify-self-end">
            <div className="text-5xl font-['Gilroy'] font-bold text-white shrink-0">{total}</div>
            <img
              src="https://file.rendit.io/n/GP5lnzdMqP1O2MjXaz4G.svg"
              className="min-h-0 min-w-0 w-10 shrink-0"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between w-full h-64 items-end pb-4 px-8">
          <div className="whitespace-nowrap text-5xl font-['Gilroy'] font-bold text-white mr-[832px] w-[314px] shrink-0">
            {title}
          </div>
          <div className="flex flex-row gap-4">
            <div className="text-5xl font-['Gilroy'] font-bold text-white shrink-0">{total}</div>
            <img
              src="https://file.rendit.io/n/GP5lnzdMqP1O2MjXaz4G.svg"
              className="min-h-0 min-w-0 w-10 shrink-0"
            />
          </div>
        </div>
      )}

      {expanded && (
        <div className="text-2xl font-['Gilroy'] font-bold text-white h-[43.35%] ml-5 mr-56">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br />
        </div>
      )}

      {expanded && (
        <button className="bg-[linear-gradient(95deg,_#3b29ff_28%,#9c4fff_310%)] bg-cover bg-50%_50% bg-blend-normal self-end flex flex-col items-center pt-1 pb-2 px-16 rounded">
          <div className="whitespace-nowrap text-2xl font-['Gilroy'] font-bold text-white w-16">
            Jump
          </div>
        </button>
      )}
    </div>
  );
};

export default TempPlaces;