import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RequestModal from "../Components/RequestModal";

const FoodDetails = () => {
  const food = useLoaderData();

  const { image, name, quantity, location, time, userName } = food;

  return (
    <div>
      <Navbar />
      <div className="md:flex justify-cente gap-10 px-4 md:px-10 lg:px-20 py-20 lg:py-40">
        <img src={image} className="w-full md:w-96 lg:w-[500px] rounded-2xl" />
        <div className="relative">
          {/* donor information */}

          <div className="border-b-4 border-blue1 space-y-2 pr-60 pb-10 mb-10">
            <p>
              <span className="font-semibold">Donor Name: </span>
              {userName}
            </p>
            <p>
              <span className="font-semibold">Pickup Location: </span>
              {location}
            </p>
          </div>

          {/* food information */}

          <div className="space-y-2">
            <p className="text-5xl font-medium pb-3">{name}</p>
            <p>
              <span className="font-semibold">Quantity: </span>
              {quantity}
            </p>
            <p>
              <span className="font-semibold">Expired Date/Time: </span>
              {time}
            </p>
          </div>

          {/* request button and modal */}

          <Link className="absolute bottom-0">
            <button
              onClick={() => document.getElementById("modal").showModal()}
              className="btn normal-case text-lg font-medium border-2 border-blue1 hover:border-blue1 text-blue1 bg-transparent hover:bg-transparent px-10"
            >
              Request
            </button>
          </Link>
          <dialog id="modal" className="modal modal-middle">
            <div className="modal-box">
              <RequestModal food={food} />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn normal-case text-lg font-medium border-2 border-blue1 hover:border-blue1 text-blue1 bg-transparent hover:bg-transparent px-10 mt-4">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodDetails;
