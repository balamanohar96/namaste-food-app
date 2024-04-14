const ShimmerUI = () => {
  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];

  return (
    <div className="body-container">
      <input className="search-input" placeholder="Search for restaurant" type="text"></input>
      <button className="top-rate-btn">search</button>
      <button className="top-rate-btn">Top Rated Restaurants</button>
      <div className="shimmer-container">
        {nums.map((num) => {
          return (
            <div key={num} className="shimmer-card">
              <div className="shimmer-image"></div>
              <div className="res-info-container">
                <div className="shimmer-rest-name"></div>
                <div className="shimmer-rest-rating"></div>
                <div className="shimmer-rest-name"></div>
                <div className="shimmer-rest-rating"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShimmerUI;
