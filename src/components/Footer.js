import { Link } from "react-router-dom";
import LogoWhite from "../assets/Bitecode_logo_white.png";

const Footer = () => {
  return (
    <div className="bg-slate-700 text-white flex flex-col px-8 pt-4 gap-4 pb-4">
      <div className="flex flex-row max-w-[1300px] mx-auto w-full items-center gap-4 justify-between">
        <img src={LogoWhite} className="object-cover w-[200px]" />
        <Link className="" to="/">
          Home
        </Link>
        <Link to="/team">The Team</Link>
        <Link to="/mission">Our Mission</Link>

        <Link to="/contact">Reach Out</Link>
      </div>
      <hr></hr>
      <div className="flex flex-row max-w-[1300px] w-full mx-auto justify-center gap-4">
        <p>example@email.com</p>
        <p>888-888-8888</p>
        <p>insta</p>
        <p>linkedin</p>
      </div>
      <div className="mx-auto">
        <p>Copyright &copy; 2024, Bitecode. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
