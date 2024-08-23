import { useEffect } from "react";
import Splash from "../components/Splash";
import Logo from "../components/Logo";
import GradientCircle from "../components/GradientCircle";
import { FaGraduationCap } from "react-icons/fa6";
import { BsFillQuestionSquareFill } from "react-icons/bs";

import ProjectIcon from "../components/ProjectIcon";

const Contact = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="">
      <Logo color="white" />
      <Splash text="Contact Us" />
      <div className="flex flex-col ">
        <div className="flex flex-row w-full py-8 px-20 justify-between min-h-screen items-center relative ">
          <div className="flex flex-col max-w-[700px] w-full gap-4">
            <h1 className=" text-5xl font-bold">Clients</h1>
            <p className="text-xl leading-loose">
              If you have a project you would like us to do, please fill out the
              form below and we will set up a meeting with you to discuss more
              details.
            </p>
            <a className="text-xl bg-slate-700 hover:bg-slate-500 hover:border-slate-500  border-slate-700 border-2 w-fit p-4 text-white transition ease-in-out cursor-pointer">
              Project Form
            </a>
          </div>
          <ProjectIcon className="text-white max-w-[500px] w-full max-h-[500px] h-full" />
          <GradientCircle
            VPosition="top-[-10%]"
            HPosition="right-[-15%]"
            gradient="bg-gradient-to-bl from-pink-500 to-blue-500"
          />
          {/* <div className="bg-gradient-to-br from-pink-500 to-blue-500 rounded-full w-[1000px] h-[1000px] absolute top-[-5%] right-[-20%] -z-10"></div> */}
        </div>
        <div className="flex flex-row w-full py-8 px-20 justify-between min-h-screen items-center relative">
          <GradientCircle
            VPosition="top-[-10%]"
            HPosition="left-[-15%]"
            gradient="bg-gradient-to-bl from-blue-500 to-pink-500"
          />
          <FaGraduationCap className="text-white text-[500px]" />

          {/* <ProjectIcon
            className="text-white max-w-[500px] w-full max-h-[500px] h-full"
            rotateGradient={100}
          /> */}
          <div className="flex flex-col max-w-[700px] w-full gap-4">
            <h1 className=" text-5xl font-bold">Undergraduates</h1>
            <p className="text-xl leading-loose">
              If you want to contribute to our mission by becoming a member of
              Bitecode, fill out the form below and we will contact you for an
              interview.
            </p>
            <a className="text-xl bg-slate-700 hover:bg-slate-500 hover:border-slate-500  border-slate-700 border-2 w-fit p-4 text-white transition ease-in-out cursor-pointer">
              Application
            </a>
          </div>
        </div>
        <div className="flex flex-row w-full py-8 px-20 justify-between min-h-screen items-center relative">
          <div className="flex flex-col max-w-[700px] w-full gap-4">
            <h1 className=" text-5xl font-bold">Questions?</h1>
            <p className="text-xl leading-loose">
              For all other inquiries, please contact us through email. We will
              try to respond to you as quickly as possible.
            </p>
          </div>
          <BsFillQuestionSquareFill className="text-white text-[500px]" />
          {/* <ProjectIcon
            className="text-white max-w-[500px] w-full max-h-[500px] h-full"
            rotateGradient={100}
          /> */}
          <GradientCircle
            VPosition="top-[-10%]"
            HPosition="right-[-15%]"
            gradient="bg-gradient-to-bl from-blue-500 to-pink-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
