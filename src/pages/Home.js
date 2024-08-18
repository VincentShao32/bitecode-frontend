import Splash from "../components/Splash";
import Logo from "../components/Logo";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Logo color="white" />
      <Splash text="Empowering small businesses with tech solutions." />
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default Home;
