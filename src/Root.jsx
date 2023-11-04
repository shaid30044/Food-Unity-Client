import { Outlet } from "react-router-dom";
import UseScroll from "./Components/UseScroll";
import "./Scroll/scrollbar.css";

const Root = () => {
  return (
    <div className="font-cabin">
      <div className="sticky top-0">
        <UseScroll />
      </div>
      <div className="-mt-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
