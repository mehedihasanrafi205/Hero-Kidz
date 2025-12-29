import { FaStar, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, reviews, sold, _id } =
    product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      <figure className="relative h-52">
        <Image src={image} alt={title} fill className="object-cover" />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-base line-clamp-2">{title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium">{ratings}</span>
          </div>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          Sold: <span className="font-medium">{sold}</span>
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">৳{price}</span>
          )}
        </div>

        <button className="btn btn-primary btn-sm flex items-center justify-center w-full">
          <FaShoppingCart className="mr-2" />
          Add
        </button>

        <Link
          href={`/products/${_id}`}
          className="btn btn-outline btn-primary btn-sm w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
