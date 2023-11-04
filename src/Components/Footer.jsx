import { Link } from "react-router-dom";
import { BsGoogle, BsInstagram, BsDiscord } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

const icons = [
  {
    id: 1,
    icon: BsGoogle,
    color: "#ea4335",
  },
  {
    id: 2,
    icon: BsInstagram,
    color: "#ff69b4",
  },
  {
    id: 3,
    icon: BsDiscord,
    color: "#7289da",
  },
  {
    id: 4,
    icon: FaFacebookF,
    color: "#1877f2",
  },
  {
    id: 5,
    icon: FaLinkedinIn,
    color: "#0077b5",
  },
  {
    id: 6,
    icon: FaXTwitter,
    color: "#000000",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="grid lg:grid-cols-2 items-center gap-12 bg-blue3 px-4 md:px-10 lg:px-20 py-20 lg:py-40">
        <div className="flex flex-col items-center lg:items-start text-dark1">
          <span>
            <Link to="/">
              <img src={logo} className="h-16 md:h-20 mb-2" />
            </Link>
          </span>
          <Link to="/" className="text-3xl lg:text-5xl font-bold">
            Food<span className="t text-blue1">Unity</span>
          </Link>
          <p className="text-lg text-center pt-3">
            Connecting Communities, Reducing Waste
          </p>
        </div>
        <div className="flex justify-center lg:justify-end gap-8 text-xl md:text-2xl lg:text-3xl">
          {icons.map((icon) => (
            <Link key={icon.id}>{icon.icon({ color: icon.color })}</Link>
          ))}
        </div>
      </div>
      <div className="text-xs font-medium text-center text-[#3c3c3c] bg-blue2 py-1.5">
        Copyright©2023 - All right reserved
      </div>
    </footer>
  );
};

export default Footer;
