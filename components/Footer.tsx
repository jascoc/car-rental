import Image from "next/image";
import React from "react";

import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div
        className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16
        px-6 py-10"
      >
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="./logo.svg" alt="logo" width={118} height={18} />
          <p className="text-base text-gray-700">
            JascoC 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-grey-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>
          @2023 JascoC.<br />
          All Rights Reserved &copy;
        </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
