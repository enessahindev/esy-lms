"use client";

import Image from "next/image";

// import social icons
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export const socialData = [
  {
    icon: <AiFillYoutube />,
    href: "https://www.youtube.com/channel/UCrblCiU8Yc1PMQRchgVUDsQ",
  },
  {
    icon: <AiFillInstagram />,
    href: "https://instagram.com/enessahinyazilim/",
  },
  {
    icon: <AiFillGithub />,
    href: "https://github.com/enessahindev",
  },
  {
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/enessahin312/",
  },
];

// link / react scroll
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <section className="py-8 lg:py-4">
      <div className="container mx-auto">
        {/* grid */}
        <div className="flex lg:justify-between gap-x-5 gap-y-14">
          {/* Logo */}
          <Link to={"home"} smooth={true} spy={true} className="cursor-pointer">
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              alt="Footer Logo"
            />
          </Link>
          <p className="text-[15px] mt-[60px]">&copy; 2023 Coursendo! Inc.</p>
        </div>
      </div>
    </section>
  );
}
