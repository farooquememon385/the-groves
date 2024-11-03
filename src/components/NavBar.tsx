import Link from "next/link";
import {
  DropDownIcon,
  InstagramIcon,
  SnapChatIcon,
  TikTokIcon,
  XIcon,
} from "./icons/icons";
import YellowGradientButton from "./YellowGradientButton";
import Image from "next/image";

function NavBar() {
  return (
    <div className="font-inter fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between max-w-[1080px] mx-auto py-5">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/the-groves.png"
              alt="The Groves Logo"
              width={220}
              height={50}
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <TikTokIcon />
          <InstagramIcon />
          <XIcon />
          <SnapChatIcon />
          <YellowGradientButton>Login</YellowGradientButton>
          <div className="flex items-center gap-2">
            <DropDownIcon />
            <Image src={"/english.png"} alt="English" width={33} height={22} />
            <div>English</div>
          </div>
        </div>
      </nav>
      <div className="border-y">
        <div className="max-w-[1080px] mx-auto py-2 flex items-center justify-between">
          <div>DINE WITH US</div>
          <div>PLAN YOUR VISIT</div>
          <div>EVENTS</div>
          <div>VIEW GROVES MAP</div>
          <div>OUR STORY</div>
          <div>CONTACT US</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
