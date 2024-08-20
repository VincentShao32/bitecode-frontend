import { useEffect } from "react";
import Splash from "../components/Splash";
import Logo from "../components/Logo";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Logo color="white" />
      <Splash text="Projects" />
      <div className="min-h-screen flex items-center">
        <div className="flex flex-col gap-6 px-16 max-w-[700px] w-full">
          <h1 className="text-5xl font-bold">College Analyzer</h1>
          <p className="text-xl leading-loose ">
            We are currently working on our first project, a program that
            analyzes data from colleges across the globe and gives personalized
            predictions to clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
