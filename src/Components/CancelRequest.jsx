import axios from "axios";
import Swal from "sweetalert2";

const CancelRequest = ({ food, foods, setFoods }) => {
  const {
    _id,
    donatorName,
    location,
    time,
    requestDate,
    donationMoney,
    status,
  } = food;

  const count = foods.findIndex((item) => item._id === _id) + 1;

  const handleCancelRequest = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://assignment-11-server-side-chi.vercel.app/foodRequest/${_id}`
          )
          .then((response) => {
            if (response.data.deletedCount) {
              Swal.fire("Deleted!", "Request has been canceled.", "success");
              const remaining = foods.filter((food) => food._id !== _id);
              setFoods(remaining);
            }
          })
          .catch((error) => {
            console.error("Error cancelling request:", error);
          });
      }
    });
  };

  return (
    <div className="relative">
      <div className="absolute -top-8 right-0 border-2 border-blue1 rounded-full flex justify-center items-center text-3xl font-semibold h-16 w-16">
        {count}
      </div>

      {/* information */}

      <div className="flex flex-col gap-4">
        <p>
          <span className="text-blue1">Donar: </span>
          {donatorName}
        </p>
        <p>
          <span className="text-blue1">Pickup Location: </span>
          {location}
        </p>
        <p>
          <span className="text-blue1">Expired Date: </span>
          {time}
        </p>
        <p>
          <span className="text-blue1">Request Date: </span>
          {requestDate}
        </p>
        <p>
          <span className="text-blue1">Your Donation Amount: </span>$
          {donationMoney}
        </p>
        <p>
          <span className="text-blue1">Status: </span>
          {status}
        </p>

        {/* cancel request button */}

        <div className="border-t-2 border- pt-2 mt-2">
          <button
            onClick={() => handleCancelRequest(_id)}
            className="btn normal-case text-lg font-medium border-2 border-blue1 hover:border-blue1 text-blue1 bg-transparent hover:bg-transparent px-10 mt-4"
          >
            Cancel Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelRequest;
