import { socialLinks } from "@/constants";
import { Logo } from "../common/logo";

export function Footer() {
  return (
    <footer className="py-14 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end items-start sm:justify-between justify-start gap-4">
          <div>
            <div className="md:hidden mb-4">
              <Logo className="h-9 w-auto" />
            </div>
            <strong>&copy; 2025 ZYNTEK</strong>
            <p>Villavicencio, Meta - Colombia</p>
          </div>
          <div className="max-md:hidden flex flex-col items-center">
            <h1 className="text-2xl md:leading-none font-semibold text-center tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(75,115,203,.5))] text-transparent bg-clip-text">
              ZYNTEK
            </h1>
          </div>
          <div>
            <div className="flex mt-4 gap-5 text-white/40">
              {socialLinks.map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank">
                  <Icon className="size-5 hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
