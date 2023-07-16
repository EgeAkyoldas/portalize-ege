import React from 'react';

interface PlacesProps {
  title: string;
  image: string;
  total: number;
}

const Places: React.FC<PlacesProps> = ({ title, image, total }) => {
  return (
    <div
      className="w-full h-64 bg-cover bg-50%_50% bg-blend-normal"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex items-end justify-between h-full px-8 pb-4 bg-black bg-opacity-50">
        <div className="text-5xl font-['Gilroy'] font-bold text-white">{title}</div>
        <div className="text-5xl font-['Gilroy'] font-bold text-white">{total}</div>
      </div>
    </div>
  );
};

export default Places;
