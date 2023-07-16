import React, { useState, useRef } from 'react';

const AgeSlider = () => {
  const [startAge, setStartAge] = useState(0);
  const [endAge, setEndAge] = useState(100);
  const startCircleRef = useRef(null);
  const endCircleRef = useRef(null);
  const sliderRef = useRef(null);

 const handleStartDrag = (e) => {
  const startX = e.clientX;
  const startOffsetX = startCircleRef.current.getBoundingClientRect().left;
  const sliderOffsetX = sliderRef.current.getBoundingClientRect().left;
  const startDragOffset = startX - startOffsetX;
  const maxPosition = endCircleRef.current.getBoundingClientRect().left - startOffsetX;
  const minPosition = sliderOffsetX - startOffsetX;
  document.onmousemove = (e) => {
    const newX = e.clientX - startOffsetX + startDragOffset;
    const newPosition = Math.max(minPosition, Math.min(maxPosition, newX));
    const newStartAge = Math.round(((newPosition - minPosition) / (maxPosition - minPosition)) * 100);
    setStartAge(newStartAge);
    setEndAge(Math.max(newStartAge, endAge));
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};

const handleEndDrag = (e) => {
  const endX = e.clientX;
  const endOffsetX = endCircleRef.current.getBoundingClientRect().left;
  const sliderOffsetX = sliderRef.current.getBoundingClientRect().left;
  const endDragOffset = endX - endOffsetX;
  const minPosition = startCircleRef.current.getBoundingClientRect().left - endOffsetX;
  const maxPosition = sliderOffsetX + sliderRef.current.offsetWidth - endOffsetX;
  document.onmousemove = (e) => {
    const newX = e.clientX - endOffsetX + endDragOffset;
    const newPosition = Math.max(minPosition, Math.min(maxPosition, newX));
    const newEndAge = Math.round(((newPosition - minPosition) / (maxPosition - minPosition)) * 100);
    setEndAge(newEndAge);
    setStartAge(Math.min(newEndAge, startAge));
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};


const selectedRangeStyle = {
    background: `linear-gradient(to right, #4F46E5 ${startAge}%, #4F46E5 ${startAge}%, transparent ${startAge}%, transparent ${endAge}%, #4F46E5 ${endAge}%, #4F46E5 ${endAge}%)`,
  };

  

  return (
    <div
      className="w-3/5 h-2 bg-gray-200 rounded-full relative cursor-pointer"
      ref={sliderRef}
    >
      <div
  className="w-8 h-8 bg-[linear-gradient(115deg,_rgba(59,_42,_255,_0.69)_47%,rgba(155,_78,_255,_0.69)_134%)] rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-center flex items-center justify-center"
  style={{ left: `${(startAge / 100) * 100}%` }}
  onMouseDown={handleStartDrag}
  ref={startCircleRef}
>
  <span className="text-white text-l font-bold">{startAge}</span>
</div>

      <div
        className="w-8 h-8 bg-[linear-gradient(115deg,_rgba(59,_42,_255,_0.69)_47%,rgba(155,_78,_255,_0.69)_134%)] rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer text-center flex items-center justify-center "
        style={{ right: `${(1 - endAge / 100) * 100}%` }}
        onMouseDown={handleEndDrag}
        ref={endCircleRef}
      >
        <span className="text-white text-l font-bold ">{endAge}</span>
      </div>
      <div className="h-full absolute bg-[linear-gradient(115deg,_rgba(59,_42,_255,_0.69)_47%,rgba(155,_78,_255,_0.69)_134%)] rounded-full z-50" style={selectedRangeStyle} />
    </div>
  );
};

export default AgeSlider;
