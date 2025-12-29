import { getSingleProducts } from "@/actions/server/product";
import Image from "next/image";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProducts(id);

  return {
    title: product.title,
    description: product.description.slice(0, 160),

    openGraph: {
      title: product.title,
      description: product.description.slice(0, 160),
      images: [
        {
          url: product.image || "https://i.ibb.co.com/whQSLYbW/image.png",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description.slice(0, 160),
      images: [product.image],
    },
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProducts(id);

  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          width={600}
          height={420}
          src={image}
          alt={title}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2  mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(ratings) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {ratings} ({reviews} reviews) • {sold} sold
          </span>
        </div>

        {/* Price */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-gray-400">৳{price}</span>
          )}
        </div>

        {/* Actions */}
        <button className="btn btn-primary w-full md:w-auto">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>

      {/* Bottom Content */}
      <div className="col-span-full">
        {/* Description */}
        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
          {description?.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Key Features */}
        {info?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              {info.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Q&A */}
        {qna?.length > 0 && (
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Q & A</h3>
            <div className="space-y-3">
              {qna.map((item, i) => (
                <div key={i} className="border rounded-lg p-3">
                  <p className="font-medium">{item.question}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
