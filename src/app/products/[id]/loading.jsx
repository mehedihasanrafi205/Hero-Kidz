const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image Skeleton */}
      <div className="skeleton h-[420px] w-full rounded-xl"></div>

      {/* Info Skeleton */}
      <div className="space-y-4">
        <div className="skeleton h-7 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-8 w-1/3"></div>
        <div className="skeleton h-10 w-40"></div>
      </div>

      {/* Bottom Skeleton */}
      <div className="col-span-full space-y-3 mt-6">
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>

        <div className="skeleton h-5 w-1/3 mt-4"></div>
        <div className="skeleton h-4 w-2/3"></div>
        <div className="skeleton h-4 w-1/2"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
