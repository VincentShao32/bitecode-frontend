import Logo from "../assets/Bitecode_logo_white.png";

const Splash = () => {
  return (
    <div className=" bg-slate-700 flex flex-col">
      <img src={Logo} className="absolute top-4 h-24" />

      <div className="flex flex-col justify-center min-h-screen">
        <h1 className="text-white text-center font-bold text-6xl mx-auto">
          Empowering small businesses with tech solutions
        </h1>
      </div>
    </div>
  );
};

export default Splash;
