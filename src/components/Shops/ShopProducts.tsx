import Sidebar from '../layout/Sidebar';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const customProduct = [
   {
    id: 1,
    img: "/product1.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd.",
    previews: [
      "/below01.png",
      "/below02.png",
      "/below03.png",
      "/below04.png",
    ],
  },
  {
    id: 2,
    img: "/GirlsHoodies.webp",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd.",
    previews: [
      "/GirlsHoodies.webp",
      "/GirlsHoodies1.webp",
      "/GirlsHoodies2.webp",
      "/Hoodies.webp",

    ],
  },
  {
    id: 3,
    img: "/mento.webp",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd.",
     previews: [
      "/mento.webp",
      "/mento1.webp",
      "/mento2.webp",
      "/mento3.webp",
    ],
  },
  {
    id: 4,
    img: "/product4.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd."
  },
  {
    id: 5,
    img: "/product4.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd."
  },
   {
    id: 1,
    img: "/product1.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd."
  },
  {
    id: 2,
    img: "/product2.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd."
  },
  {
    id: 3,
    img: "/product3.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd."
  },
  {
    id: 4,
    img: "/product4.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd."
  },
  {
    id: 5,
    img: "/product4.png",
    title: "Bewakoof Star Wars Oversized Hoodie",
    price: "₹1,000 – ₹1,500/pieces",
    description: "Suzhou Dreamcolor Textile Co., Ltd."
  }
];

function ShopProducts() {
  const location = useLocation();
  const category = location.state?.category || "shop";
  

  return (
    <>
      <Sidebar />
      <div className='ml-[245px]'>
        <div>
          <Link
            to="/shop"
            className="dark:text-white text-sm text-blue-600 ml-4 mt-4 inline-block"
          >
            &lt; Back to {category}
          </Link>
        </div>
        <div className='grid grid-cols-4'>
          {customProduct.map((product) => (
            <Link
              key={product.id}
              to="/productcart" 
              state={{ product }} 
              className="
                border border-gray-200 
                w-[290px] 
                rounded-xl 
                m-5 
                p-3 
                flex flex-col gap-2 
                shadow 
                hover:shadow-lg 
                transition-shadow duration-300
              "
            >
              <img
                src={product.img}
                alt={product.title}
                style={{ width: '290px', height: "300px" }}
              />
              <h2 className='ml-2 mt-2'>{product.title}</h2>
              <p className='ml-2 font-semibold'>{product.price}</p>
              <p className='ml-2 text-sm'>{product.description}</p>
              <button className='rounded-xl w-[260px] text-white h-10 mt-2 bg-gradient-to-br from-blue-600 to-purple-600'>
                Contact Supplier
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopProducts;
