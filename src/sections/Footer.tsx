import { Activity } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
export const Footer = () => {
  return (
    <footer
      className="py-5 border-t border-white/15
    "
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 ">
          <div className="flex gap-2 items-center lg:flex-1">
            <Activity className="h-6 w-6  " />
            <div className="font-medium text-white/70">
              Derive Solars | transmitting energy...
            </div>
          </div>

          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 lg:justify-center">
            <Link
              className="text-white/70 hover:text-white md:text-sm text-xs transition"
              href={"#"}
            >
              Home
            </Link>
            <Link
              className="text-white/70 hover:text-white md:text-sm text-xs transition"
              href={"#"}
            >
              Shop
            </Link>
            <Link
              className="text-white/70 hover:text-white md:text-sm text-xs transition"
              href={"#"}
            >
              About Us
            </Link>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <FaInstagram className="text-white/40 hover:text-white transition" />
            <FaFacebookF className="text-white/40 hover:text-white transition" />
            <FaYoutube className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
