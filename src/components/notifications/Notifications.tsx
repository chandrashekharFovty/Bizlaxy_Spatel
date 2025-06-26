import React from "react";

const notificationsToday = [
  {
    name: "tara.builds",
    action: "started following you.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Daniel Moretti",
    action: "just followed your profile.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "growthwithlucas",
    action: "viewed your pitch EcoWater AI Solution.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Maya Carter",
    action: "visited your profile.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=4",
  },
];

const notificationsLastWeek = [...notificationsToday, ...notificationsToday];

const NotificationItem = ({ img, name, action, time }) => (
  <div className="w-full flex items-center justify-between p-4 border rounded-xl shadow-sm bg-white">
    <div className="flex items-center gap-3">
 
        <span className="top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>

      <div className="relative flex">
        <img src={img} alt={name} className="w-10 h-10 rounded-full" />
      </div>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">{name}</span> {action}
      </p>
    </div>
    <span className="text-xs text-gray-400">{time}</span>
  </div>
);

const NotificationSection = ({ title, notifications }) => (
  <div className="space-y-3">
    <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
    <div className="space-y-2">
      {notifications.map((n, i) => (
        <NotificationItem key={i} {...n} />
      ))}
    </div>
  </div>
);

export default function Notifications() {
  return (
    <div className="dark:text-white dark:bg-gray-800 w-[837PX] h-auto mx-auto py-10 px-4 bg-gray-50 overflow-hidden">
      <h1 className="text-2xl font-bold mb-6">Notification</h1>
      <div className="space-y-10">
        <NotificationSection title="Today" notifications={notificationsToday} />
        <NotificationSection
          title="Last 7 Days"
          notifications={notificationsLastWeek}
        />
      </div>
    </div>
  );
}
