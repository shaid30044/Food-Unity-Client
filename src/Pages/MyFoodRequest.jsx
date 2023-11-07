import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CancelRequest from "../Components/CancelRequest";
import Lottie from "react-lottie";
import notFound from "../assets/notFound.json";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const foodRequest = useLoaderData();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const userFoods = foodRequest.filter(
      (food) => food.userEmail === user.email
    );

    setFoods(userFoods);
  }, [foodRequest, user.email]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
  };

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-10 lg:px-20 py-20 lg:py-40">
        <span className="text-4xl font-bold border-b-8 border-blue1 pb-2">
          My Food Request
        </span>
        {!foods.length ? (
          <div>
            <div className="md:col-span-2 lg:col-span-3 h-[400px] mt-10 -mb-20">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        ) : (
          // food request

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 mt-32">
            {foods.map((food, idx) => (
              <CancelRequest
                key={idx}
                food={food}
                foods={foods}
                setFoods={setFoods}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyFoodRequest;
