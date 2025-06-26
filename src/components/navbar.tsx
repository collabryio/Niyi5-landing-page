import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./language-switcher";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const { t } = useLanguage();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={isScrolling}
      blurred={isScrolling}
      color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 border-0 transition-all duration-300 ${
        isScrolling ? "bg-white/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/image/icon.png"
            alt="Niyi5 Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <Typography
            as="a"
            href="#"
            variant="h6"
            color={isScrolling ? "gray" : "white"}
          >
            Niyi5
          </Typography>
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>{t('nav.home')}</NavItem>
          <NavItem>{t('nav.features')}</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <LanguageSwitcher />
          <a href="https://app.niyi5.com" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              {t('nav.liveDemo')}
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href="https://app.niyi5.com" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
                Live Demo
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
