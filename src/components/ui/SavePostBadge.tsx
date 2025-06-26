import React, { useState } from "react";
import redHeart from  "../../../public/LikeRed.png";
import grayHeart from  "../../../public/likeGray.png";
import postSave from  "../../../public/postSave.png";
import isPostSaved from  "../../../public/isPostSaved.png";
import isDocumented from  "../../../public/isDocumented.png";


interface SavePostBadgeProps {
  type:  "savePost" | "document";
  initialActive?: boolean;
}

export function SavePostBadge({ type, initialActive = false }: SavePostBadgeProps) {
  const [isActive, setIsActive] = useState(initialActive);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const renderIcon = () => {
    if (type === "document") {
      return (
        <img
          src={isActive ? isDocumented : isDocumented}
          alt="document"
          className="w-4 h-5"
        />
      );
    } else if (type == "savePost") {
       return (
          <img
          src={isActive ? isPostSaved : postSave}
          alt="savePost"
          className="w-4 h-5"
        />
       );
    }
  };

  return (
    <div className="self-stretch my-auto rounded-[50px] cursor-pointer" onClick={handleClick}>
        {renderIcon()}
      </div>
  );
}
