import React, { useState, Fragment } from 'react';
import { FaBold, FaItalic, FaListUl } from 'react-icons/fa';
import { TbAbc, TbPhotoPlus, TbEyeSearch } from 'react-icons/tb';
import { BsFillPersonFill } from "react-icons/bs";
import { Dialog, Transition } from '@headlessui/react';

const CreatePost = ({ onClose }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ message: '', onConfirm: null });

  const openDialog = (message, onConfirm) => {
    setDialogContent({ message, onConfirm });
    setDialogOpen(true);
  };

  return (
    <>
      {/* Main CreatePost Modal - Hidden when dialog is open */}
      {!dialogOpen && (
        <div className="fixed inset-0 z-40  w-auto flex items-center justify-center bg-black/20">
          <div className="dark:glass-bg-dark dark:text-white bg-white rounded-xl shadow-lg p-6 w-[400px] h-[400px] relative">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => openDialog('Are you sure you want to discard this post?', onClose)}
                className="text-gray-700 text-2xl font-bold dark:text-white"
              >
                ←
              </button>
              <button
                // onClick={() => openDialog('Are you sure you want to cancel this post?', onClose)}
                className="text-blue-600 font-semibold hover:underline dark:text-white"
              >
                Post
              </button>
            </div>

            {/* Toolbar */}
            <div className="flex gap-6 items-center text-gray-700 text-sm border border-gray-100 rounded-t px-3 py-1 dark:text-white">
              <button className="hover:text-black"><FaBold /></button>
              <button className="hover:text-black"><FaItalic /></button>
              <button className="hover:text-black"><FaListUl /></button>
              <button className="text-lg hover:text-black"><TbAbc /></button>
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Write something..."
              className="dark:glass-bg-dark dark:text-white w-full text-xs h-[100px] border-x border-b border-gray-100 px-3 py-2 focus:outline-blue-500 resize-none"
            />

            {/* Hashtag Input */}
            <input
              type="text"
              placeholder="Add Hashtags..."
              className="dark:glass-bg-dark dark:text-white border border-gray-100 w-full h-[40px] text-black text-xs rounded px-3 mt-2 focus:outline-blue-500"
            />

            {/* Media Buttons */}
            <div className="flex justify-between mt-4 px-1 dark:text-white">
              {["Photo", "Video", "Doc", "Poll"].map((type, index) => (
                <button
                  key={index}
                  onClick={() => openDialog(`Do you want to add a ${type}?`, () => console.log(`${type} added`))}
                  className="dark:text-gray-400 border border-gray-100 text-xs w-[80px] py-1 flex items-center justify-center gap-1 text-gray-700 hover:text-blue-600"
                >
                  <TbPhotoPlus className="text-base" /> {type}
                </button>
              ))}
            </div>

            {/* Additional Options */}
            <div className="mt-4 space-y-2 text-sm text-black">
              <p
                className="dark:text-gray-400 flex items-center gap-2 cursor-pointer"
                onClick={() => openDialog('Do you want to tag people?', () => console.log('Tagging people...'))}
              >
                <BsFillPersonFill /> Tag People
              </p>
              <p
                className="dark:text-gray-400 flex items-center gap-2 cursor-pointer"
                onClick={() => openDialog('Change post privacy?', () => console.log('Changing privacy...'))}
              >
                <TbEyeSearch /> Post Privacy
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      <Transition appear show={dialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setDialogOpen(false)}>
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
                <Dialog.Title as="h3" className="dark:text-white text-lg font-semibold mb-4">
                  Discard Post?
                </Dialog.Title>
                <p className="dark:text-white text-sm mb-6">
                  {dialogContent.message || "Are you sure you want to discard this post? Your changes will be lost."}
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setDialogOpen(false)}
                    className="dark:border-gray-400 border border-gray-500 text-black bg-white px-4 py-1 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // setDialogOpen(false);
                      dialogContent.onConfirm?.();
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
    </>
  );
};

export default CreatePost;
