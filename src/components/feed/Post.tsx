import React, { useEffect, useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { SavePostBadge } from "../ui/SavePostBadge";
import PostPopover, { PostModal } from "./PostPopover";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import officialIcon from "/Official Icon.png";

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
  const [showFullDescription, setShowFullDescription] = useState(false);

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

  const truncatedDescription =
    content.description.length > content.descpLimit
      ? content.description.slice(0, content.descpLimit)
      : content.description;

  return (
    <div className="flex gap-6 items-start">
      {/* Left: Post Card */}
      <div className="flex flex-col dark:border dark:border-gray-300 dark:glass-bg-dark max-md:w-80 bg-white shadow p-5 rounded-xl w-full max-w-3xl">
        <div className="flex justify-between py-[7px]">
          <div className="flex gap-2">
            <UserAvatar src={user.avatar} />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="max-md:text-xs font-medium text-base">
                  {user.name}
                </span>
                {showMoreOptions && (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/9e55e48d50c24f504973bb6ca3fab7e2ea80bba0?placeholderIfAbsent=true"
                    className="w-5 max-md:w-4"
                  />
                )}
                {showOfficialIcon && (
                  <img src={officialIcon} className="w-3 h-3" />
                )}
                {showFollowButton && (
                  <button
                    onClick={handleFollowToggle}
                    className="px-4 py-2 max-md:text-sm"
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                )}
              </div>
              <span className="dark:text-gray-400 text-xs text-gray-500">
                {user.timeAgo}
              </span>
            </div>
          </div>
          <PostModal />
        </div>

        <div className="text-sm mt-2.5 w-full">
          <div className="w-full">
            <div className="max-md:text-sm font-semibold">{content.title}</div>
            <div className="max-md:text-xs max-md:w-72 dark:text-white text-[#464646] font-normal mt-2">
              {showFullDescription ? content.description : truncatedDescription}
              {content.description.length > content.descpLimit && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-blue-400 text-[12px] ml-1 hover:underline"
                >
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              )}
            </div>

            {isMediaContent && (
              <div className="relative mt-5 border w-full h-[400px] overflow-hidden rounded-2xl">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
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
                        currentIndex === index
                          ? "bg-blue-800"
                          : "bg-[#BABABA]"
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
              <span className={`text-sm ${isLiked ? "text-red-500" : ""}`}>
                {likes}
              </span>
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

          <div className="cursor-pointer flex gap-2">
            <CgFileDocument className="text-2xl mt-1" />
            <SavePostBadge type="savePost" />
          </div>
        </div>
      </div>

      {/* Right: Comment Panel */}
      {showComment && (
        <div className="flex flex-col justify-between bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 w-80 max-h-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Comments</h3>
            <button
              onClick={() => setShowComment(false)}
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-grow overflow-y-auto space-y-2">
            {postComment.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No comments yet.
              </p>
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

          <div className="relative mt-4">
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
        </div>
      )}
    </div>
  );
}

export default Post;
