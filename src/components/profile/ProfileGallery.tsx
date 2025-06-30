import React, { useState } from "react";
import { BiComment } from "react-icons/bi";
import { Heart } from "lucide-react";

interface GalleryItem {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

interface ProfileGalleryProps {
  items: GalleryItem[];
}

const ProfileGallery: React.FC<ProfileGalleryProps> = ({ items }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative w-full aspect-square overflow-hidden"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <img
            src={item.imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />

          {hoveredId === item.id && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4">
              <div className="flex items-center text-white gap-1">
                <Heart className="w-6 h-6" />
                <span>{item.likes}</span>
              </div>
              <div className="flex items-center text-white gap-1">
                <BiComment className="w-6 h-6" />
                <span>{item.comments}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileGallery;
