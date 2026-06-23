import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image }) => {
  return (
    <Link
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >{/* `/work/${id}` */}
      <div className="overflow-hidden rounded-lg">
        <img
          className="hover:scale-110 transition duration-300"
          src={image[0]}
          alt=""
        />
      </div>
    </Link>
  );
};

export default ProductItem;