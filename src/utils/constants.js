let resId;
export const THING_PROXY = "https://thingproxy.freeboard.io/fetch/";
export const RESTAURANTS_API =
  "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const RESTAURANTS_API_ALL_ORIGIN = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
)}`;
export const MENU_API =
  "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";
export const MENU_API_ALL_ORIGIN = `https://api.allorigins.win/get?url=${encodeURIComponent(
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
)}`;
export const IMAGE_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_CDN =
  "https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg";
