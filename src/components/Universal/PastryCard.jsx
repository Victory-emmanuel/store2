/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const PastryCard = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div className="relative w-full aspect-square perspective">
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            className="w-full h-full  cursor-pointer rounded-xl"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            onClick={flipCard}
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 ">
                <Typography
                  variant="h6"
                  className="dark:text-white dark:bg-secondary text-secondary bg-accent py-1 px-2 rounded-lg inline-block "
                >
                  {title}
                </Typography>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="absolute top-0 w-full h-full bg-primary dark:bg-black rounded-xl p-6 flex flex-col"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.6 }}
          >
            <IconButton
              variant="text"
              className="absolute top-2 left-2 p-2"
              onClick={flipCard}
            >
              <ArrowLeftIcon className="h-6 w-6 text-secondary dark:text-white" />
            </IconButton>
            <div className="mt-8">
              <Typography
                variant="h5"
                className="font-PlayfairDisplay mb-4 text-secondary dark:text-white"
              >
                {title}
              </Typography>
              <Typography className="text-secondary/80 dark:text-white/80 font-SourceSans3">
                {description}
              </Typography>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PastryCard;
