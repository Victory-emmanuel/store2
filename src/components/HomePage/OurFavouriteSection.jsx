/* eslint-disable react/no-unescaped-entities */
import { motion, spring } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import PastryCard from "../Universal/PastryCard";

const favorites = [
  {
    title: "Chocolate Cup Cake",
    image: "https://i.imghippo.com/files/NVaX5916WhU.jpg",
    description:
      "Delightful chocolate cupcakes topped with rich chocolate frosting and colorful sprinkles. A perfect individual treat for any chocolate lover.",
  },
  {
    title: "Cream Cake",
    image: "https://i.imghippo.com/files/Mgnt2991Xcs.jpg",
    description:
      "Light and airy layers of vanilla sponge cake filled with fresh whipped cream and decorated with delicate cream rosettes. A classic favorite for any occasion.",
  },
  {
    title: "Chocolate Cake",
    image: "https://i.imghippo.com/files/ShC7019tEo.jpg",
    description:
      "Rich, moist chocolate cake layered with smooth chocolate ganache and covered in velvety chocolate frosting. The ultimate chocolate indulgence.",
  },
  {
    title: "Dark Chocolate Cake",
    image: "https://i.imghippo.com/files/wQe7877D.jpg",
    description:
      "Intense dark chocolate cake made with premium cocoa, filled with dark chocolate mousse and finished with a glossy chocolate glaze. A sophisticated dessert for true chocolate connoisseurs.",
  },
];

const floatingImg = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 25, -5, 0],
    transition: {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      spring: 0.5,
    },
  },
};
const OurFavouriteSection = () => {
  return (
    <section className="relative py-16 px-6 ss:px-12 bg-white dark:bg-secondary">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Typography
            variant="h2"
            className=" text-3xl ss:text-4xl md:text-5xl mb-4 text-secondary dark:text-white"
          >
            Our Customers Favorites
          </Typography>
          <Typography className="max-w-2xl mx-auto text-secondary/80 dark:text-white/80 ">
            From classic chocolate cakes to delightful cupcakes, our expert
            bakers craft each treat with passion and precision to give you the
            most delectable dessert experience.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-4 gap-6 ss:gap-8 rounded-xl">
          {favorites.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl"
            >
              <PastryCard {...item} />
            </motion.div>
          ))}
        </div>
        <motion.img
          src="https://i.imghippo.com/files/DCDC4781cQ.png"
          alt="Decorative leaf"
          className="absolute top-10 left-10 w-40 h-40  sm:opacity-100 opacity-50"
          variants={floatingImg}
          animate="animate"
        />
      </div>
    </section>
  );
};

export default OurFavouriteSection;
