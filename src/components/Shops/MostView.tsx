import React, { useState } from "react";

const mostViewedItems = [
  {
    image: "pant.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Beauty Co",
  },
  {
    image: "Tshirts.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Fashion Corp",
  },
  {
    image: "pant.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Gadget World",
  },
  {
    image: "pant.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Beauty Co",
  },
  {
    image: "Tshirts.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Fashion Corp",
  },
  {
    image: "pant.png",
    discription: "Custmized logo Design for Men and Women",
    price: "₹430/10 prieces",
    supplier: "Gadget World",
  },
  {
    image: "https://via.placeholder.com/100x100?text=Lipstick",

    supplier: "Beauty Co",
  },

  // ... add similar structure for all remaining items
];

const MostView = () => {
  const [showAll, setShowAll] = useState(false);

  const itemsToShow = showAll ? mostViewedItems : mostViewedItems.slice(0, 6);

  return (
    <div className="mt-8 w-[90%] ">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Most Viewed</h2>
        {!showAll && (
          <button
            className="text-blue-500 text-sm"
            onClick={() => setShowAll(true)}
          >
            See all
          </button>
        )}
      </div>
      <div className="w-[110%] h-[350px]  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  gap-4">
        {itemsToShow.map((item, index) => (
          <div
            key={index}
            className="border p-2 rounded-xl text-center text-sm hover:shadow cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-contain mb-1"
            />
           <p className="mt-2"> {item.discription}</p>
            {/* <br/> */}
             <p className="dark:text-white mt-2 text-black font-bold">{item.price}</p>
                {/* {item.discription} */}
               <button className="mt-2 bg-gradient-to-r from-blue-800 to-purple-700 text-white text-sm px-4 py-2 rounded-xl">
  Gradient Button
</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MostView;
