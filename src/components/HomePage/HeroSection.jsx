/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Button, Typography } from "@material-tailwind/react";

const HeroSection = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const floatingImg = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-auto overflow-hidden bg-primary dark:bg-black">
      {/* Floating Leaves */}
      <motion.img
        src="https://i.imghippo.com/files/yZq7155EE.png"
        alt="Decorative leaf"
        className="absolute top-10 left-10 w-80 h-80  sm:opacity-100 opacity-50"
        variants={floatingImg}
        animate="animate"
      />
      <motion.img
        src="https://i.imghippo.com/files/wIL1782JY.png"
        alt="Decorative leaf"
        className="absolute top-20 right-20 w-80 h-80 md:block hidden "
        variants={floatingImg}
        animate="animate"
      />

      {/* Hero Content */}
      <div className="mx-auto px-6 ss:px-12 py-16 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className=""
          >
            <Typography
              variant="h1"
              className=" sm:text-start text-center ss:text-5xl xs:text-4xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 text-secondary font-semibold ss:font-bold dark:text-white"
            >
              The Most Delightful
              <br />
              Artisan Cakes
            </Typography>
            <Typography className="text-secondary/80 dark:text-white/80 xxs:text-lg text-base mb-8 font-medium max-w-xl sm:text-start text-center  ">
              If you love healthy eating but can't resist the temptation of
              cakes - our cakes are perfect for you!
            </Typography>
            <div className="w-full sm:text-start text-center">
              <Button
                size="lg"
                className="bg-accent text-secondary hover:bg-accent/90 dark:hover:bg-accent/70 mx-auto"
              >
                Order Now
              </Button>
            </div>

            <motion.img
              src="https://i.imghippo.com/files/wIL1782JY.png"
              alt="Decorative leaf"
              className="absolute top-[20rem] left-[20rem] w-40 h-40  sm:opacity-100 opacity-50 "
              variants={floatingImg}
              animate="animate"
            />
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://i.imghippo.com/files/HjWw6626scE.png"
              alt="Delicious cake with raspberries"
              className="w-full rounded-2xl overflow-hidden"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white dark:fill-secondary"
          preserveAspectRatio="none"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
