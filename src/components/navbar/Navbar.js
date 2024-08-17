import Logo from "../../assets/Bitecode_logo_black.png";
import NavbarTab from "./NavbarTab";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between p-4 items-center fixed w-full">
      <img src={Logo} className="object-contain h-24" />
      <div className="flex gap-4 w-[30%]">
        <NavbarTab text="The Team" path="/team" />
        <NavbarTab text="Our Mission" path="/mission" />
        <NavbarTab text="Reach Out" path="/contact" />
        <NavbarTab text="" path="/" />
      </div>
    </div>
  );
};

export default Navbar;
