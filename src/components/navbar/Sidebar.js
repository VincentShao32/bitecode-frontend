import { useState } from "react";
import SidebarTab from "./SidebarTab";
import { IoIosMenu } from "react-icons/io";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(true);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  async function toggleSidebar() {
    if (hide) {
      setHide(false);
      await timeout(10);
      setOpen(true);
    } else {
      setOpen(false);
      await timeout(500);
      setHide(true);
    }
  }
  return (
    <>
      <button
        className="right-10 top-8 w-10 bg-white h-10 z-30 fixed rounded-full "
        onClick={toggleSidebar}
      >
        <IoIosMenu className="m-auto w-full h-[70%]" />
      </button>
      <div
        className={`${
          hide ? "hidden" : "block"
        }  z-20 w-full h-screen bg-black ${
          open ? "bg-opacity-40" : "delay-200 bg-opacity-0"
        } duration-200 fixed`}
      >
        <div
          className={`duration-300 flex h-screen fixed right-0 ${
            open ? "w-[25%] " : "w-0"
          } bg-white py-[80px]`}
        >
          <div
            className={`flex flex-col duration-100 w-full gap-4 ${
              open ? "delay-300 opacity-100" : "opacity-0"
            } z-20 left-8 mx-12 text-black`}
          >
            <SidebarTab text="Home" path="/" onClick={toggleSidebar} />
            <SidebarTab
              text="Our Mission"
              path="/mission"
              onClick={toggleSidebar}
            />
            <SidebarTab text="The Team" path="/team" onClick={toggleSidebar} />

            <SidebarTab
              text="Contact"
              path="/contact"
              onClick={toggleSidebar}
            />
            <SidebarTab
              text="Projects"
              path="/projects"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
