import { Link } from "react-router-dom";

const NavbarTab = ({ text, path }) => {
  return (
    <Link
      className="text-center place-content-center bg-slate-300 h-vh p-2 rounded w-[25%]"
      to={path}
    >
      {text}
    </Link>
  );
};

export default NavbarTab;
