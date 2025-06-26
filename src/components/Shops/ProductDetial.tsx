import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy product data
const allProducts = [
  { id: 1, name: "T-shirt", category: "Apparel", image: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  { id: 2, name: "Smartwatch", category: "Gadgets", image: "https://via.placeholder.com/150?text=Smartwatch" },
  { id: 3, name: "Couch", category: "Home", image: "https://via.placeholder.com/150?text=Couch" },
  { id: 4, name: "Microwave", category: "Appliances", image: "https://via.placeholder.com/150?text=Microwave" },
  { id: 5, name: "Football", category: "Sports", image: "https://via.placeholder.com/150?text=Football" },
  { id: 6, name: "Chair Set", category: "Furniture", image: "https://via.placeholder.com/150?text=Chair+Set" },
  { id: 7, name: "iPhone", category: "Mobiles", image: "https://via.placeholder.com/150?text=iPhone" },
  { id: 8, name: "Protein Powder", category: "Food, Health", image: "https://via.placeholder.com/150?text=Protein" },
  { id: 9, name: "Lipstick", category: "Beauty", image: "https://via.placeholder.com/150?text=Lipstick" },
  { id: 10, name: "Headphones", category: "Electronics", image: "https://via.placeholder.com/150?text=Headphones" },
  { id: 11, name: "Teddy Bear", category: "Toys", image: "https://via.placeholder.com/150?text=Teddy" },
  { id: 12, name: "Watch", category: "Watches", image: "https://via.placeholder.com/150?text=Watch" },
];

const ProductList = () => {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);

  const filteredProducts = allProducts.filter(
    (product) => product.category === decodedCategory
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Products in: {decodedCategory}</h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="border rounded-lg p-3 flex flex-col items-center hover:shadow-md cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain mb-2"
                />
                <p className="text-center font-medium">{product.name}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found for this category.</p>
      )}
    </div>
  );
};

export default ProductList;
