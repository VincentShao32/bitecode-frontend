import LogoWhite from "../assets/Bitecode_logo_white.png";
import LogoBlack from "../assets/Bitecode_logo_black.png";

const Logo = ({ color }) => {
  return (
    <img
      src={color === "white" ? LogoWhite : LogoBlack}
      className="absolute top-2 h-24"
    />
  );
};

export default Logo;
