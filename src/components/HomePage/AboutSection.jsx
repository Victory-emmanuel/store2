/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white dark:bg-secondary overflow-hidden"
    >
      <div className=" mx-auto px-6 ss:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative h-[500px] ss:h-[600px] lg:h-[800px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src="https://i.imghippo.com/files/eBZA8589ss.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-xl"
              style={{ y }}
            />
          </motion.div>

          {/* Text Content Section */}
          <div className="lg:pl-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h3" color="amber" className=" mb-2">
                  About Us
                </Typography>
                <Typography
                  variant="h2"
                  className=" text-3xl ss:text-4xl md:text-5xl mb-4 text-secondary dark:text-white"
                >
                  Crafting Sweet Moments
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography className="text-secondary/80 dark:text-white/80 font-SourceSans3 text-lg leading-relaxed mb-6">
                  For over two decades, we've been more than just a bakery –
                  we've been creators of joy, architects of celebration, and
                  guardians of tradition. Our story began with a simple passion
                  for baking and has blossomed into an artisanal haven where
                  every cake tells a unique story.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 ss:grid-cols-2 gap-8"
              >
                <div>
                  <Typography
                    variant="h4"
                    className=" text-4xl mb-2 text-secondary dark:text-white"
                  >
                    20+
                  </Typography>
                  <Typography className="text-secondary/80 dark:text-white/80 font-SourceSans3">
                    Years of Experience
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h4"
                    className=" text-4xl mb-2 text-secondary dark:text-white"
                  >
                    50k+
                  </Typography>
                  <Typography className="text-secondary/80 dark:text-white/80 font-SourceSans3">
                    Happy Customers
                  </Typography>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex flex-wrap gap-4">
                  {[
                    "Artisanal",
                    "Fresh Daily",
                    "Custom Orders",
                    "Local Ingredients",
                  ].map((tag, index) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/20 text-secondary dark:text-white font-SourceSans3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default AboutSection;
