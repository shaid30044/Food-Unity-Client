import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {foods.map((food) => (
        <div key={food._id}>
          <h2>{food.name}</h2>
          <img src={food.image} alt={food.name} />
          <p>Quantity: {food.quantity}</p>
          <p>Location: {food.location}</p>
          <p>Time: {food.time}</p>
          <p>Notes: {food.notes}</p>
          <p>Status: {food.status}</p>
          <p>User: {food.userName}</p>
          <p>User Email: {food.userEmail}</p>
          <img src={food.userImage} alt={food.userName} />
        </div>
      ))}
    </div>
  );
};

export default Foods;
