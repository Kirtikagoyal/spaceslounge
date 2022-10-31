import Image from "next/image";
import Link from "next/link";
import { MaterialUISwitch } from "../Light and Dark/lightAndDark";

const Navbar = ({ themeToggling, Logo }) => {
  return (
    <nav>
      <Link href={"/"}>
        <Image className="logo" src={Logo} alt="" />
      </Link>
      <ul>
        <MaterialUISwitch onClick={themeToggling} />
        <Link href={"/sign-up"}>Sign Up</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
