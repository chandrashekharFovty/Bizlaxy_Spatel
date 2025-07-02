import React, { useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";

function DeletAccount() {
  const [isDialog1Open, setIsDialog1Open] = useState(false);
  const [isDialog2Open, setIsDialog2Open] = useState(false);

  return (
    <>
      <div className="dark:dark-color h-screen w-screen">
        {/* Fixed header */}
        <div className="dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200">
          <Link
            to="/settings"
            className="dark:dark-color flex items-center font-semibold text-black py-4 px-4"
          >
            <MdExpandLess className="dark:dark-color transform rotate-[-90deg] text-2xl" />
            <span className="dark:dark-color font-bold text-xl ml-28">
              Delete Account
            </span>
          </Link>
        </div>

        {/* Scrollable content */}
        <div className="dark:dark-color pt-28 pb-20 px-4 overflow-y-auto">
          <div className="dark:dark-color flex flex-col gap-4">
            <LinkCard
              to=""
              title="Temporarily Deactivate"
              // onClick={() => setIsDialog1Open(true)}
            />
            <LinkCard
              to=""
              title="Permanently Delete Account"
              onClick={() => setIsDialog2Open(true)}

            />
          </div>
        </div>
      </div>

      {/* Dialog 1 */}
      {/* <Dialog open={isDialog1Open} onClose={() => setIsDialog1Open(false)}>
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Deactivate Account</h2>
            <p>Are you sure you want to deactivate your account temporarily?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setIsDialog1Open(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => {
                  setIsDialog1Open(false);
                  setIsDialog2Open(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Dialog> */}

      {/* Dialog 2 */}
      <Dialog open={isDialog2Open} onClose={() => setIsDialog2Open(false)}>
        <div className="fixed w-screen h-screen inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white h-[200px] w-[370px] p-6 rounded-xl shadow">
            <h2 className="text-sm font-bold mb-4">Deleting is permanent. You’ll lose all data.</h2>
            <div className="mt-6 ">
              <button
                className="px-4 py-2 w-full h-12 border border-gray-200 rounded-xl"
                onClick={() => setIsDialog2Open(false)}
              >
               Cancle
              </button>
              <button
                className="px-4 py-2  w-full h-12 mt-2 border border-red-100 text-red-500 rounded-xl"
                onClick={() => {
                  setIsDialog2Open(false);
                  alert("Account deactivated!");
                }}
              >
              Temporarily Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

// Updated LinkCard to accept onClick
function LinkCard({ to, title, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <Link to={to}>
        <div className="dark:dark-color flex justify-between items-start border-b border-gray-200 pb-4">
          <div className="w-[380px]">
            <h1 className="font-semibold text-xl">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DeletAccount;
