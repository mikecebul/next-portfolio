import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full max-w-screen-lg flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 container py-4">
      <span className="text-xs sm:text-center">
        © {new Date().getFullYear()}{" "}
        <Link href="/" className="hover:underline">
          MikeCebul
        </Link>
        . All Rights Reserved.
      </span>
      <div className="flex justify-start space-x-4">
        <a href="https://www.linkedin.com/in/mikecebul/">
          <Linkedin />
        </a>
        <a href="https://twitter.com/MikeCebul">
          <Twitter />
        </a>
      </div>
    </footer>
  );
}
