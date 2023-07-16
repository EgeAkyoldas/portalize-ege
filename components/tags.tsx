import React, { useState } from "react";

interface TagsProps {
  title: string;
}

const Tags: React.FC<TagsProps> = ({ title }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      className={`flex flex-col items-center rounded-[29px] ${
        active
          ? "bg-[linear-gradient(115deg,_rgba(59,_42,_255,_0.69)_47%,rgba(155,_78,_255,_0.69)_134%)]"
          : "bg-[#262626]"
      }`}
      onClick={handleClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
    >
      <div className="font-['Gilroy'] font-light text-white px-14 py-4">{title}</div>
    </button>
  );
};

export default Tags;
