import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-6">
      {["Home", "Shop", "Contact"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="inherit"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <motion.div className="fixed top-0 z-10 w-full">
      <Navbar className="mx-auto max-w-screen-lg my-2 py-2 px-4 lg:px-8 lg:py-4 bg-accent/60 dark:bg-secondary/60 border-none shadow-xl ">
        <div className=" mx-auto flex items-center justify-between bg-transparent text-secondary dark:text-white ">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-xl font-medium"
          >
            Logo
          </Typography>
          <div className="hidden sm:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="sm:mr-4 mr-8 ">
              <ThemeToggle />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </Collapse>
      </Navbar>
    </motion.div>
  );
};

export default NavBar;
