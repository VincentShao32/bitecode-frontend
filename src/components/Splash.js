const Splash = ({ text }) => {
  return (
    <div className="bg-slate-700 flex flex-col justify-center min-h-screen">
      <h1 className="text-white text-center font-bold text-6xl mx-auto">
        {text}
      </h1>
    </div>
  );
};

export default Splash;
