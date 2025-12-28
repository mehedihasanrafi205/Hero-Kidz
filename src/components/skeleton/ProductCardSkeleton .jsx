const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="skeleton h-52 w-full"></div>

      <div className="card-body p-4 space-y-3">
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-3 w-1/3"></div>
        <div className="skeleton h-5 w-1/4"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
