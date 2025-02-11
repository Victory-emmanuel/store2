import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import WaveDivider from "../Universal/WaveDivider";
import MenuItem from "../Universal/MenuItem";

const menuItems = [
  {
    title: "Chocolate Dream Cake",
    price: "45",
    image: "https://i.imghippo.com/files/l1272Xbs.jpg",
    description:
      "Rich chocolate layers with dark chocolate ganache and fresh berries",
  },
  {
    title: "Vanilla Bean Cupcakes",
    price: "25",
    image: "https://i.imghippo.com/files/QAMW8414OPg.jpg",
    description:
      "Light vanilla cupcakes topped with Madagascar vanilla buttercream",
  },
  {
    title: "Red Velvet Delight",
    price: "48",
    image: "https://i.imghippo.com/files/l1272Xbs.jpg",
    description:
      "Classic red velvet cake with cream cheese frosting and chocolate shavings",
  },
  {
    title: "Lemon Burst Cupcakes",
    price: "28",
    image: "https://i.imghippo.com/files/QAMW8414OPg.jpg",
    description:
      "Zesty lemon cupcakes filled with lemon curd and topped with meringue",
  },
];

const HotPicksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative bg-white dark:bg-secondary">
      <WaveDivider position="top" />

      <section
        ref={ref}
        className="py-16 px-6 ss:px-12 bg-primary dark:bg-black"
      >
        <div className=" mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Typography
              variant="h3"
              color="amber"
              className="font-PlayfairDisplay mb-2"
            >
              Sweet Delights
            </Typography>
            <Typography
              variant="h2"
              className="font-PlayfairDisplay text-3xl ss:text-4xl md:text-5xl mb-4 text-secondary dark:text-white"
            >
              Our Popular Cakes
            </Typography>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden ss:grid ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MenuItem {...item} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="ss:hidden">
            <motion.div
              className="flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="min-w-[280px] w-full flex-shrink-0 snap-center px-2"
                >
                  <MenuItem {...item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider position="bottom" />
    </div>
  );
};

export default HotPicksSection;
