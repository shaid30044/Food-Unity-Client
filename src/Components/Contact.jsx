import Lottie from "react-lottie";
import contact from "../assets/contact.json";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
  };

  return (
    <div className="lg:gap-4 px-4 md:px-10 lg:px-20 pb-20 pt-10 lg:pt-20 lg:-mt-16 lg:py-40">
      <span className="text-4xl font-bold border-b-8 border-blue1 pb-2">
        Contact Us
      </span>
      <div className="grid lg:grid-cols-2 items-center lg:gap-10 mt-10 lg:mt-0">
        <div className="lg:order-last">
          <Lottie options={defaultOptions} />
        </div>
        <div>
          {/* subscription form */}

          <form>
            {/* name */}
            <div className="relative border-b-2 border-dark2 mt-16 mb-10">
              <div className="absolute top-1/2 -translate-y-1/2 text-xl text-blue1">
                <BiUser />
              </div>
              <input
                type="email"
                name="name"
                placeholder="Your Name"
                required
                className="focus:outline-none bg-transparent w-full pl-10 pr-4 py-2"
              />
            </div>

            {/* email */}

            <div className="relative border-b-2 border-dark2 mt-16 mb-10">
              <div className="absolute top-1/2 -translate-y-1/2 text-xl text-blue1">
                <HiOutlineMail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="focus:outline-none bg-transparent w-full pl-10 pr-4 py-2"
              />
            </div>

            {/* query */}

            <div className="relative border-b-2 border-dark2 mt-16 mb-10">
              <div className="absolute top-1/2 -translate-y-1/2 text-2xl text-blue1">
                <MdEditNote />
              </div>
              <input
                type="email"
                name="query"
                placeholder="Your Query"
                required
                className="focus:outline-none bg-transparent w-full pl-10 pr-4 py-2"
              />
            </div>

            {/* submit button */}

            <input
              type="submit"
              value="Submit"
              className="btn normal-case text-lg font-medium border-2 border-blue1 hover:border-blue1 text-blue1 bg-transparent hover:bg-transparent px-10 mt-6"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
