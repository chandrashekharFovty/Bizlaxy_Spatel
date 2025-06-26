import React, { useEffect, useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { FollowButton } from "../ui/FollowButton";
import { CountBadge } from "../ui/CountBadge";
import officialIcon from "/Official Icon.png";
import { SavePostBadge } from "../ui/SavePostBadge";
import PostPopover, { PostModal } from "./PostPopover";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const images = ["/poster03.png", "/poster01.png", "/poster02.png"];

interface PostProps {
  user: {
    name: string;
    avatar: string;
    timeAgo: string;
  };
  content: {
    title: string;
    titleLimit: number;
    description: string;
    descpLimit: number;
    isFileImage?: string;
    isFileVideo?: string;
    isFileDocument?: string;
  };
  engagement: {
    likes: string;
    comments: string;
    shares: string;
  };
  showFollowButton?: boolean;
  showMoreOptions?: boolean;
  isLiked?: boolean;
  showOfficialIcon?: boolean;
  isMediaContent?: boolean;
  onclose?: () => void;
}

export function Post({
  user,
  content,
  engagement,
  showFollowButton = false,
  showMoreOptions = false,
  showOfficialIcon = false,
  isMediaContent = false,
}: PostProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState(parseInt(engagement.likes));
  const [comment, setComment] = useState(parseInt(engagement.comments));
  const [shares, setShares] = useState(parseInt(engagement.shares));
  const [isLiked, setIsLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [postComment, setPostComment] = useState<string[]>([]);
  const [showShareUsers, setShowShareUsers] = useState(false);
const [sharedUsers, setSharedUsers] = useState<string[]>([]);

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleFollowToggle = () => setIsFollowing(!isFollowing);
  const handleComment = () => setShowComment((prev) => !prev);
 const handleShare = () => {
  setShares((prev) => prev + 1);
  setSharedUsers((prev) => [...prev, user.name]);
  setShowShareUsers(true); 
};


  const handleCommentSend = () => {
    if (commentText.trim() !== "") {
      setPostComment((prev) => [...prev, commentText.trim()]);
      setComment((prev) => prev + 1);
      setCommentText("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
   <>
    <div className="dark:border-x dark:border-gray-300 dark:glass-bg-dark dark:bg-gray-800 dark:text-white bg-white shadow p-5 rounded-xl w-full relative z-10">
      <div className="flex justify-between py-[7px]">
        <div className="flex gap-2">
          <UserAvatar src={user.avatar} />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium text-base">{user.name}</span>
              {showMoreOptions && (
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/..."
                  className="w-5"
                />
              )}
              {showOfficialIcon && <img src={officialIcon} className="w-3 h-3" />}
              {showFollowButton && (
                <FollowButton
                  isFollowing={isFollowing}
                  onClick={handleFollowToggle}
                />
              )}
            </div>
            <span className="dark:text-gray-400 text-xs text-gray-500">
              {user.timeAgo}
            </span>
          </div>
        </div>
        <div className="absolute dark:text-white top-4 right-4 z-10">
          <PostModal />
        </div>
      </div>

      <div className="text-sm mt-2.5 w-full">
        <div className="w-[660px]">
          <div className="font-semibold">{content.title}</div>
          <div className="dark:text-gray-400 text-gray-600 font-normal mt-2">
            {content.description}
          </div>

          {isMediaContent && (
            <div className="relative mt-5 border w-[650px] h-[692px] overflow-hidden rounded-2xl">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[650px] object-cover"
              />
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 p-2 text-[#BABABA] border rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 p-2 text-[#BABABA] border rounded-full"
              >
                &gt;
              </button>
              <div className="flex justify-center py-4 gap-2">
                {images.map((_, index) => (
                  <hr
                    key={index}
                    className={`h-2.5 w-2.5 border cursor-pointer rounded-full ${
                      currentIndex === index ? "bg-blue-800" : "bg-[#BABABA]"
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between text-xs font-medium mt-3">
        <div className="flex items-center gap-4">
       <div
  onClick={handleLike}
  className="flex items-center gap-1 cursor-pointer border border-gray-400 h-8 px-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
>
  {isLiked ? (
    <FaHeart className="text-lg text-red-500" />
  ) : (
    <LuHeart className="text-lg text-gray-700 dark:text-white" />
  )}
  <span className="text-sm">{likes}</span>
</div>


          <div
            onClick={handleComment}
            className="flex items-center gap-1 cursor-pointer border border-gray-400 h-8 px-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FaRegComment className="text-lg" />
            <span className="text-sm">{comment}</span>
          </div>

          <div
            onClick={handleShare}
            className="flex items-center gap-1 cursor-pointer border border-gray-400 h-8 px-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FiSend className="text-lg" />
            <span className="text-sm">{shares}</span>
          </div>
        </div>

        <div className="cursor-pointer flex ">
          <SavePostBadge type="savePost" />
        </div>
      </div>
    </div>
 {showComment && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => setShowComment(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-lg font-semibold mb-4">Comments</h3>

      {/* Comment Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        {commentText.trim() && (
          <FiSend
            onClick={handleCommentSend}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-600 cursor-pointer text-xl hover:scale-110 transition"
          />
        )}
      </div>

      {/* Comment List */}
      <div className="max-h-60 overflow-y-auto space-y-2">
        {postComment.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No comments yet.</p>
        ) : (
          postComment.map((comm, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md text-sm"
            >
              <span className="font-semibold">{user.name}:</span> {comm}
            </div>
          ))
        )}
      </div>
    </div>
  </div>
)}

   </>
  );
}
export default Post