import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineLocationOn, MdAccessTime, MdEditNote } from "react-icons/md";
import { Link } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-side-chi.vercel.app/foods")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" px-4 md:px-10 lg:px-20 py-20 lg:py-40">
      <span className="text-4xl font-bold border-b-8 border-blue1 pb-2">
        Foods
      </span>
      <div className="grid grid-cols-3 justify-between items-center gap-14 mt-20">
        {foods.map((food) => (
          <div key={food._id}>
            <img src={food.image} className="h-60 w-full rounded-t-xl" />
            <div className="bg-blue3 rounded-b-xl p-5">
              <div className="text-dark1">
                <h3 className="text-2xl font-semibold pb-4">{food.name}</h3>
                <div className="flex flex-col gap-3 text-blue1">
                  <div className="flex gap-20">
                    <p className="flex items-center gap-2">
                      Quantity:
                      <span className="text-dark2">{food.quantity}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      Expired Date/Time:
                      <span className="text-dark2">{food.time}</span>
                    </p>
                  </div>
                  <p className="flex items-center gap-2">
                    Location:
                    <span className="text-dark2 text-sm">{food.location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    Additional Notes:
                    <span className="text-dark2 text-sm">
                      {food.notes ? food.notes : "N/A"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center border-t-2 border-blue1 pt-5 mt-4">
                <div className="flex items-center gap-2">
                  <img src={food.userImage} className="h-8 w-8 rounded-full" />
                  <p className="text-dark1">{food.userName}</p>
                </div>
                <Link>
                  <button className="btn normal-case text-lg font-medium border-2 border-blue1 hover:border-blue1 text-blue1 bg-transparent hover:bg-transparent px-6">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
