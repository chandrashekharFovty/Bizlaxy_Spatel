import React from "react";

interface GalleryItem {
  id: string;
  imageUrl: string;
}

interface ProfileGalleryProps {
  items: GalleryItem[];
}

const ProfileGallery: React.FC<ProfileGalleryProps> = ({ items }) => {
  return (
    <div className="dark:bg-gray-800 dark:text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] pt-2 z-10">
      {items.map((item) => (
        <div key={item.id} className="w-full">
          <img
            src={item.imageUrl}
            alt={`Gallery item ${item.id}`}
            className="dark:bg-gray-800 dark:text-white w-full h-auto object-cover aspect-square"
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileGallery;
