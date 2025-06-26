// InfoCarousel.tsx
import React, { useEffect, useState } from "react";

export interface InfoBox {
  title: string;
  descp: string;
}

export interface InfoBoxProps {
  InfoBoxes: InfoBox[];
}

export default function InfoCarousel({ InfoBoxes }: InfoBoxProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(i => (i + 1) % InfoBoxes.length);
    }, 3000);
    return () => clearInterval(id);
  }, [InfoBoxes.length]);

  const { title, descp } = InfoBoxes[currentIndex];

  return (
    <div className="w-[420px] max-w-[500px] flex justify-center h-screen overflow-hidden px-5">
      <div className="w-full h-full overflow-hidden">
      <h2 className="text-2xl font-semibold mb-2 h-[31px]">{title}</h2>
      <p className="text-lg font-normal h-[99px] mt-[10px] overflow-hidden">{descp}</p>
      <div className="flex mt-5 gap-2">
        {InfoBoxes.map((_, idx) => (
          <hr
            key={idx}
            className={`h-[6px] cursor-pointer rounded-3xl bg-white 
                ${idx === currentIndex ? "active w-16 opacity-100 -space-x-4" : "inactive bg-blue-200 opacity-50 -space-x-1 w-8"}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
