import { ComponentType } from "react";
import { motion } from "framer-motion";

import { DialogContentProps } from "@mui/material";

import { IAnimeCardProps } from "types/components";

function withMotion<T extends DialogContentProps | IAnimeCardProps>(
  Component: ComponentType<T>
) {
  const displayName = Component.displayName || Component.name || "Component";

  const ComponentWithMotion = (hocProps: T) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Component {...hocProps} />
      </motion.div>
    );
  };

  ComponentWithMotion.displayName = `withMotion(${displayName})`;

  return ComponentWithMotion;
}

export default withMotion;
