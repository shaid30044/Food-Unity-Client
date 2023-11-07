import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axios from "axios";

const MyFoodRequest = () => {
  const [data, setData] = useState([]);

  let serialNumber = 1;

  useEffect(() => {
    axios
      .get("https://assignment-11-server-side-chi.vercel.app/foodRequest")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCancelRequest = (id) => {};

  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Foods No.</th>
            <th>Donor Name</th>
            <th>Pickup Location</th>
            <th>Expire Date</th>
            <th>Request Date</th>
            <th>Your Donation Amount</th>
            <th>Status</th>
            <th>Cancel Request</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{serialNumber++}</td>
              <td>{item.donatorName}</td>
              <td>{item.location}</td>
              <td>{item.time}</td>
              <td>{item.requestDate}</td>
              <td>{item.donationMoney}</td>
              <td>{item?.status}</td>
              <td>
                <button onClick={() => handleCancelRequest(item.id)}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default MyFoodRequest;
