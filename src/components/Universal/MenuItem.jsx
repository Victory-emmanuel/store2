/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const MenuItem = ({ image, title, price, description }) => {
  return (
    <Card className="w-full bg-white dark:bg-secondary shadow-lg overflow-hidden">
      <CardHeader floated={false} className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Typography
            variant="h5"
            className="font-PlayfairDisplay text-secondary dark:text-white"
          >
            {title}
          </Typography>
          <Typography variant="h6" className="font-PlayfairDisplay text-accent">
            ${price}
          </Typography>
        </div>
        <Typography className="font-SourceSans3 text-secondary/70 dark:text-white/70">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
