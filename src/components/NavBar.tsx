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
import MobileNav from "./MobileNav";

const tabs = [
  { text: "DINE WITH US", href: "/" },
  { text: "PLAN YOUR VISIT", href: "/" },
  { text: "EVENTS", href: "/" },
  { text: "VIEW GROVES MAP", href: "/" },
  { text: "OUR STORY", href: "/" },
  { text: "CONTACT US", href: "/" },
];

const socialicons = [
  { icon: <TikTokIcon />, href: "/" },
  { icon: <InstagramIcon />, href: "/" },
  { icon: <SnapChatIcon />, href: "/" },
  { icon: <XIcon />, href: "/" },
];
function NavBar() {
  return (
    <div className="font-inter fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between max-w-[1100px] mx-auto px-3 py-5 relative">
        <div>
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/the-groves.png"
              alt="The Groves Logo"
              width={220}
              height={50}
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {socialicons.map((icon, index) => (
            <Link key={index} href={icon.href}>
              {icon.icon}
            </Link>
          ))}
          <Link href={"/"}>
            <YellowGradientButton>Login</YellowGradientButton>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer">
            <DropDownIcon />
            <Image
              src={"/img/english.png"}
              alt="English"
              width={33}
              height={22}
            />
            <div>English</div>
          </div>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
      <div className="hidden md:block border-y">
        <div className="max-w-[1080px] mx-auto py-3 flex items-center justify-between text-[13px] tracking-widest">
          {tabs.map((tab) => (
            <Link
              key={tab.text}
              href={tab.href}
              className="text-sm font-medium"
            >
              {tab.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
