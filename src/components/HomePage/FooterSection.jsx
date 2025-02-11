/* eslint-disable react/prop-types */

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import WaveDivider from "../Universal/WaveDivider";

const FooterSection = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        stagger: 0.1,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const SocialIcon = ({ Icon, href = "#" }) => (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-white/20 dark:bg-white/10 flex items-center justify-center hover:bg-white/30 dark:hover:bg-white/20 transition-colors"
    >
      <Icon className=" text-secondary dark:text-white w-5 h-5" />
    </motion.a>
  );

  return (
    <div className="relative bg-white dark:bg-secondary">
      <WaveDivider position="top" />
      <footer className="bg-primary dark:bg-black py-16">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-12 px-6 ss:px-12"
          >
            {/* Logo and Description Section */}
            <motion.div variants={item} className="max-w-sm">
              <Typography
                variant="h5"
                className="  text-secondary dark:text-white mb-6"
              >
              Logo
              </Typography>
              <Typography className=" text-secondary dark:text-white/80 ">
                Dreamy UI Kit. Carefully crafted UI components for Adobe
                Experience Design. 100+ components and sample pages will help
                you to create any project.
              </Typography>
            </motion.div>

            {/* Contact Information Section */}
            <motion.div variants={item}>
              <Typography
                variant="h6"
                className=" text-secondary dark:text-white  mb-6"
              >
                CONTACT US
              </Typography>
              <div className="space-y-3  text-secondary dark:text-white/80 ">
                <p>hello@dreamy.co</p>
                <p>24 Atlantic Ave, Brooklyn, NY 11201</p>
                <p>Dreamy Inc</p>
                <p>+34 675 328 58 47</p>
              </div>
            </motion.div>

            {/* Social Media Section */}
            <motion.div variants={item}>
              <Typography
                variant="h6"
                className=" text-secondary dark:text-white  mb-6"
              >
                FOLLOW US
              </Typography>
              <Typography className=" text-secondary dark:text-white/80  mb-6">
                Yes, we are social
              </Typography>
              <div className="flex gap-4">
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaTwitter} />
                <SocialIcon Icon={FaInstagram} />
              </div>
            </motion.div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            variants={item}
            className="border-t border-white/20 mt-12 mx-6 ss:mx-12"
          >
            <Typography className=" text-secondary dark:text-white/60 text-sm pt-8 ">
              © 2016 Dreamy Inc. All rights reserved
            </Typography>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
