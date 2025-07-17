import logo from "@/assets/images/logo.png";
import { ImgHTMLAttributes, MouseEvent } from "react";
import { Magnetic } from "./magnetic";

export function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
  const handleNavItemClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const target = document.querySelector("#home");

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Magnetic>
      <div className="cursor-pointer" onClick={handleNavItemClick}>
        <div className="flex items-center">

          <img src={logo} {...props} />
          <h3 className="text-3xl -ml-1.5 font-bold mt-5">YNTEK</h3>
        </div>
      </div>
    </Magnetic>
  );
}
