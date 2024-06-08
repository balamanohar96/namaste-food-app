const ShimmerUI = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="animate-pulse py-5 px-20">
      <div className="flex justify-between">
        <div className="w-56 h-9 rounded-md ml-7 bg-slate-100 mb-2"></div>
        <div className="w-40 h-9 rounded-md mr-7 bg-slate-100 mb-2"></div>
      </div>
      <div className="flex flex-wrap justify-center ">
        {nums.map((num) => {
          return (
            <div key={num} className="w-56 mx-4 border my-2 p-2">
              <div className="shimmer-image"></div>
              <div className="res-info-container">
                <div className="shimmer-rest-name"></div>
                <div className="shimmer-rest-rating"></div>
                <div className="shimmer-rest-name"></div>
                <div className="shimmer-rest-rating"></div>
                <div className="shimmer-rest-area"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShimmerUI;
