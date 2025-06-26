// FollowButton.tsx
import React from "react";

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
}

export const FollowButton: React.FC<FollowButtonProps> = ({
  isFollowing,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-1 py-1 text-sm font-mediam ${
        isFollowing ? " text-blue-800" : "text-blue-800"
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};