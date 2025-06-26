import React, { useEffect, useRef, useState } from 'react';
import StoryModal, { PostModal } from './StoryModal';

export interface StoryItem {
  imageSrc: string;
  name: string;
}

interface Props {
  items: StoryItem[];
}

const Story: React.FC<Props> = ({ items }) => {
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Enable mouse wheel horizontal scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        className="w-full max-w-[700px] h-[82px] overflow-x-auto overflow-y-hidden flex gap-2 items-center px-2 scrollbar-none relative z-10"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[73px] h-[76px] border-2 border-purple-500 rounded-full cursor-pointer flex justify-center items-center"
            onClick={() => setActiveStory(item)}
          >
            <img
              src={item.imageSrc}
              alt={item.name}
              className="w-[65px] h-[68px] rounded-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className='z-50'>

      {activeStory && (
        <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
      )}
      {/* <PostModal/> */}
      </div>

    </>
  );
};

export default Story;
