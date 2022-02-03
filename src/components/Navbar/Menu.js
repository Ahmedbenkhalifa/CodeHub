import React from "react";
import { Button, Divider, Stack } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1 ,y:0},
};
const variantsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const Menu = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      component={motion.div}
      variants={variantsContainer}
      initial="hidden"
      animate="show"
    >
      {["Accueil", "Services", "Tarifs", "Gallerie", "Avis"].map((elem, k) => (
        <motion.div key={k} variants={variants}>
          <Link {...smoothScrollProps} to={"section" + elem}>
            <Button color="inherit">{elem}</Button>
          </Link>
        </motion.div>
        // <Divider orientation="vertical" flexItem />
      ))}
      <Link {...smoothScrollProps} to={"sectionContact"}>
        <Button component={motion.div} 
        initial={{x:30 ,opacity:0}}
        animate={{x:0, opacity:1 }}
        transition={{type:'spring',stiffness:100,delay:1}}
        variant="contained">Contact</Button>
      </Link>
    </Stack>
  );
};

export default Menu;
