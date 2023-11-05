import Swal from "sweetalert2";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useRef } from "react";
import axios from "axios";

const AddFood = () => {
  const formRef = useRef(null);

  const handleAddFood = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const quantity = form.get("quantity");
    const location = form.get("location");
    const time = form.get("time");
    const notes = form.get("notes");

    const newFood = {
      name,
      image,
      quantity,
      location,
      time,
      notes,
    };

    axios
      .post("http://localhost:5000/foods", newFood, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="px-4 md:px-10 lg:px-20 py-20 lg:py-40">
          <span className="text-4xl font-bold border-b-8 border-blue1 pb-2">
            Add Food
          </span>
          <form
            onSubmit={handleAddFood}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 pt-16"
          >
            {/* food name */}

            <div className="border-b-2 border-dark2">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Food Name"
                required
                className="focus:outline-none bg-transparent w-full px-4 py-2"
              />
            </div>

            {/* food image */}
            <div className="border-b-2 border-dark2">
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Food Image URL"
                required
                className="focus:outline-none bg-transparent w-full px-4 py-2"
              />
            </div>

            {/*food quantity */}

            <div className="border-b-2 border-dark2">
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Food Quantity"
                required
                className="focus:outline-none bg-transparent w-full px-4 py-2"
              />
            </div>

            {/*food location */}

            <div className="border-b-2 border-dark2">
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Food Location"
                required
                className="focus:outline-none bg-transparent w-full px-4 py-2"
              />
            </div>

            {/*expired time */}

            <div className="border-b-2 border-dark2">
              <input
                type="text"
                name="time"
                id="time"
                placeholder="Expired Date or Time"
                required
                className="focus:outline-none bg-transparent w-full px-4 py-2"
              />
            </div>

            {/*notes */}

            <div className="border-b-2 border-dark2">
              <input
                type="text"
                name="notes"
                id="notes"
                placeholder="Additional Notes"
                className="focus:outline-none bg-transparent w-full px-4 py-2"
              />
            </div>

            {/* submit button */}

            <div>
              <input
                type="submit"
                value="Submit"
                className="btn normal-case lg:col-span-2 text-lg font-medium border-2 border-blue1 hover:border-blue1 text-blue1 bg-transparent hover:bg-transparent px-10 mt-4 m-auto"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddFood;
