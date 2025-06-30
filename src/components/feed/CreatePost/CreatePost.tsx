import React, { useState, Fragment } from "react";
import { FaBold, FaItalic, FaListUl } from "react-icons/fa";
import { TbAbc, TbPhotoPlus, TbEyeSearch } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import post from "../../../../public/bfc5f985ed531a68846cb114afa8811ab03c972d.png";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ onClose }) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    message: "",
    onConfirm: null,
  });
  const [showImage, setShowImage] = useState(false);
  const [selectedPrivacy, setSelectedPrivacy] = useState(null);

  const navigate = useNavigate();
  const onBack = () => {
    navigate("/createPost");
  };

  const openConfirmation = (message, onConfirm) => {
    setDialogContent({ message, onConfirm });
    setConfirmationOpen(true);
  };

  return (
    <>
      {!confirmationOpen && !privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="flex">
            {/* Left side image */}
            {showImage && (
              <div className="relative">
                <img
                  src={post}
                  alt="Post preview"
                  className="h-[400px] w-[440px] rounded-l-xl object-cover"
                />
                <button
                  type="button"
                  onClick={() => setShowImage(false)}
                  aria-label="Close image"
                  className="absolute top-4 left-4 text-black text-2xl font-bold rounded-full px-2 py-1"
                >
                  ←
                </button>
              </div>
            )}

            {/* Right side form */}
            <div className="dark:glass-bg-dark dark:text-white bg-white rounded-xl shadow-lg p-6 w-[400px] h-[400px] flex flex-col justify-between relative">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                {!showImage && (
                  <button
                    type="button"
                    onClick={() =>
                      openConfirmation(
                        "Are you sure you want to discard this post?",
                        onClose
                      )
                    }
                    aria-label="Discard post"
                    className="text-gray-700 text-2xl font-bold dark:text-white"
                  >
                    ←
                  </button>
                )}
                <button
                  type="button"
                  className="text-blue-600 font-semibold hover:underline dark:text-white"
                >
                  Post
                </button>
              </div>

              {/* Toolbar */}
              <div className="flex gap-4 items-center text-gray-700 text-sm border border-gray-200 rounded px-3 py-1 dark:text-white">
                <button type="button">
                  <FaBold />
                </button>
                <button type="button">
                  <FaItalic />
                </button>
                <button type="button">
                  <FaListUl />
                </button>
                <button type="button">
                  <TbAbc />
                </button>
              </div>

              {/* Textarea */}
              <textarea
                placeholder="Write something..."
                className="dark:glass-bg-dark dark:text-white w-full text-xs h-[100px] border-x border-b border-gray-200 px-3 py-2 focus:outline-blue-500 resize-none"
              />

              {/* Hashtag input */}
              <input
                type="text"
                placeholder="Add Hashtags..."
                className="dark:glass-bg-dark dark:text-white border border-gray-200 w-full h-[40px] text-black text-xs rounded px-3 mt-2 focus:outline-blue-500"
              />

              {/* Media buttons */}
              <div className="flex justify-between mt-4">
                {["Photo", "Video", "Doc", "Poll"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      if (type === "Photo") {
                        setShowImage(true);
                      } else {
                        openConfirmation(`Do you want to add a ${type}?`, () =>
                          console.log(`${type} added`)
                        );
                      }
                    }}
                    className="dark:text-gray-400 border border-gray-200 text-xs w-[80px] py-1 flex items-center justify-center gap-1 text-gray-700 hover:text-blue-600"
                  >
                    <TbPhotoPlus className="text-base" /> {type}
                  </button>
                ))}
              </div>

              {/* Additional Options */}
              <div className="mt-4 space-y-2 text-sm text-black">
                <p
                  className="dark:text-gray-400 flex items-center gap-2 cursor-pointer"
                  onClick={() =>
                    openConfirmation("Do you want to tag people?", () =>
                      console.log("Tagging people...")
                    )
                  }
                >
                  <BsFillPersonFill /> Tag People
                </p>
                <p
                  onClick={() => setPrivacyOpen(true)}
                  className="dark:text-gray-400 flex items-center gap-2 cursor-pointer"
                >
                  <TbEyeSearch /> Post Privacy
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      <Transition appear show={confirmationOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setConfirmationOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="dark:glass-bg-dark dark:border dark:border-gray-400 bg-white p-6 w-[300px] rounded-xl shadow-xl text-center">
                <Dialog.Title
                  as="h3"
                  className="dark:text-white text-lg font-semibold mb-4"
                >
                  Confirm Action
                </Dialog.Title>
                <p className="dark:text-white text-sm mb-6">
                  {dialogContent.message}
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={onBack}
                    className="dark:border-gray-400 border border-gray-500 text-black bg-white px-4 py-1 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      dialogContent.onConfirm?.();
                      setConfirmationOpen(false);
                    }}
                    className="dark:border-gray-400 border border-red-400 text-red-400 bg-white px-4 py-1 rounded-xl w-[180px] h-[47px]"
                  >
                    Discard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Privacy Dialog */}
      <Transition appear show={privacyOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setPrivacyOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="dark:glass-bg-dark dark:border dark:border-gray-400 bg-white p-6 w-[300px] rounded-xl shadow-xl text-center">
                <Dialog.Title
                  as="h3"
                  className="dark:text-white text-lg font-semibold mb-4"
                >
                  Post Privacy
                </Dialog.Title>

                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="privacy"
                      value="Public"
                      checked={selectedPrivacy === "Public"}
                      onChange={(e) => {
                        e.stopPropagation();
                        setSelectedPrivacy(e.target.value);
                      }}
                    />
                    <span className="dark:text-white">Public</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="privacy"
                      value="Followers"
                      checked={selectedPrivacy === "Followers"}
                      onChange={(e) => {
                        e.stopPropagation(); 
                        setSelectedPrivacy(e.target.value);
                      }}
                    />
                    <span className="dark:text-white">Only Followers</span>
                  </label>
                  {selectedPrivacy === "Followers" && (
                    <div className="mt-4 text-left max-h-40 overflow-y-auto border rounded p-2">
                      <ul className="text-sm dark:text-white">
                        <li>Follower 1</li>
                        <li>Follower 2</li>
                        <li>Follower 3</li>
                        <li>Follower 4</li>
                      </ul>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreatePost;
