import { toast } from "react-toastify";
export const addToWatchlist = (id) => {
  const items = localStorage.getItem("watchlist");
  let arr;

  if (items) {
    arr = JSON.parse(items);
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem("watchlist", JSON.stringify(arr));
    }
  } else {
    arr = JSON.stringify([id]);
    localStorage.setItem("watchlist", arr);
  }
  toast.success(
    `${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`,
  );
};
