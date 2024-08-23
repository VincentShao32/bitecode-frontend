import Splash from "../components/Splash";
import Logo from "../components/Logo";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Store from "../assets/store.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Logo color="white" />
      <Splash text="Empowering small businesses with tech solutions." />
      <div className="min-h-screen flex items-center  w-full justify-between">
        <div className="flex flex-col gap-6 max-w-[700px] w-full px-16 z-10">
          <h1 className="font-bold text-5xl">Overcoming Obstacles</h1>
          <p className="text-xl leading-loose">
            We believe in creating equal opportunity for all businesses, big and
            small. In today's digital age, it is becoming increasingly difficult
            to start a business without technological experience, and Bitecode
            aims to level the playing field for all business owners.
          </p>
          <Link
            to="/mission"
            className="text-xl border-slate-700 border-2  w-fit p-4 bg-slate-700 text-white  hover:bg-slate-500 hover:border-slate-500  transition ease-in-out"
          >
            View Our Mission Statement
          </Link>
        </div>

        <img
          src={Store}
          className="object-cover max-h-screen w-[60%] min-h-screen "
          alt=""
        />
      </div>
      <div className="min-h-screen flex items-center  w-full justify-between ">
        <img
          src={Store}
          className="object-cover max-h-screen min-h-screen w-[60%]"
          alt=""
        />
        <div className="flex flex-col gap-6 max-w-[700px] w-full px-16 z-10">
          <h1 className="font-bold text-5xl">Join Us</h1>
          <p className="text-xl leading-loose">
            Bitecode is also an endeavor to give undergraduates technical
            experience, and we are always looking for more people to help us
            accomplish our mission. Meet our team and join us in empowering
            small businesses.
          </p>
          <Link
            to="/team"
            className="text-xl border-slate-700 border-2  w-fit p-4 bg-slate-700 hover:bg-slate-500 hover:border-slate-500  text-white transition ease-in-out"
          >
            Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
