import React, { useState } from "react";

interface ProductItem {
  name: string;
  price: string;
  image: string;
  supplier: string;
};

interface ProductItemProps {
   products: ProductItem[];
}
// const [categories, setcategories] = useState(false);

const ProductCardList: React.FC<ProductItemProps> = ({products}) => {
  return (
    <div className="grid grid-cols-1 cursor-pointer h-[414px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-5 p-4 overflow-hidden">
      {products.map((product, idx) => (
        <div key={idx} className="border flex flex-col gap-1 rounded-xl p-3 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="w-full h-[108px] text-[16px] font-normal mt-2">
          <h2 className="max-w-full h-[49px] overflow-hidden">{product.name}</h2>
          <p className="text-[#050505] font-semibold">{product.price}</p>
          <p className="font-medium text-[14px] underline">{product.supplier}</p>
          </div>
          <button className="mt-3 w-full h-[38px] bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl hover:opacity-90">
            Contact Supplier
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCardList;
