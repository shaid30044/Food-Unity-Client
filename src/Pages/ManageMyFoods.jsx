import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import CancelFood from "../Components/CancelFood";

const ManageMyFoods = () => {
  const manageFoods = useLoaderData();
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const userFoods = manageFoods.filter(
      (food) => food.userEmail === user.email
    );
    setFoods(userFoods);
  }, [manageFoods, user.email]);

  return (
    <div className="relative">
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="overflow-x-auto mx-4 md:mx-10 lg:mx-20 pt-32 md:pt-40 mb-20">
        <span className=" sticky left-0 text-4xl font-bold border-b-8 border-blue1 pb-2">
          Manage My Food
        </span>
        <table className="table table-md lg:table-lg table-pin-rows table-pin-cols mt-20">
          <thead className="text-[17px]">
            <tr>
              <th></th>
              <td>Food Name</td>
              <td>Pickup Location</td>
              <td>Expired Date/Time</td>
              <td>Status</td>
              <td className="text-center">Update</td>
              <td className="text-center">Delete</td>
              <td className="text-center">Manage</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, idx) => (
              <CancelFood
                key={idx}
                food={food}
                foods={foods}
                setFoods={setFoods}
              ></CancelFood>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ManageMyFoods;
