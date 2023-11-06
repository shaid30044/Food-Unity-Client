import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import AvailableFood from "../Components/AvailableFood";
import Lottie from "react-lottie";
import notFound from "../assets/notFound.json";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showNoResults, setShowNoResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://assignment-11-server-side-chi.vercel.app/foods`)
      .then((response) => {
        const sortedFoods = response.data.sort((a, b) => {
          const dateA = new Date(a.time);
          const dateB = new Date(b.time);
          return dateA - dateB;
        });
        setFoods(sortedFoods);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(scrollToTop, []);

  const handleSearch = (e) => {
    const search = e.target.value.trim().toLowerCase();

    setSearch(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowNoResults(false);

    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredFoods);

    if (filteredFoods.length === 0) {
      setShowNoResults(true);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
  };

  return (
    <div>
      <Navbar />

      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="px-4 md:px-10 lg:px-20 py-20 lg:py-40">
            <span className="text-4xl font-bold border-b-8 border-blue1 pb-2">
              Available Foods
            </span>

            <div className="pt-20">
              {/* search functionality */}
              <form onSubmit={handleSubmit} className="flex justify-center">
                <input
                  onChange={handleSearch}
                  type="search"
                  name="search"
                  value={search}
                  id="search"
                  placeholder="Search Food Here..."
                  className="border-2 border-blue1 border-r-0 focus:border-blue1 focus:outline-none bg-transparent md:text-lg rounded-full rounded-r-none w-full md:w-2/3 lg:w-1/2 pl-8 md:pl-10 pr-4 py-2 md:py-2.5"
                />
                <input
                  type="submit"
                  value="Search"
                  className="md:text-lg text-blue1 font-medium border-2 border-blue1 border-l-0 rounded-full rounded-l-none bg-blue2 cursor-pointer px-6 md:px-10"
                />
              </form>
            </div>

            {/* available foods */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:justify-between items-center gap-10 lg:gap-14 mt-10 md:mt-16">
              {showNoResults ? (
                // not found

                <div className="md:col-span-2 lg:col-span-3 h-[400px] -mb-20">
                  <Lottie options={defaultOptions} />
                </div>
              ) : searchResults.length > 0 ? (
                // search foods

                searchResults.map((food) => (
                  <AvailableFood key={food.id} food={food}></AvailableFood>
                ))
              ) : (
                // all foods

                foods.map((food) => (
                  <AvailableFood key={food.id} food={food}></AvailableFood>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AvailableFoods;
