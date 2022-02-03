import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import AboutImage from "../../assets/images/AboutImage";
import FlippedText from "../FlippedText";

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" }} id={"sectionAccueil"}>
      <Box sx={{ display: { lg: "block", xs: "none" } }}>
        <AboutImage
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ py: { lg: 17, xs: 12 } }}>
        <Box sx={{ overflow:'hidden' ,}}>

        <Typography component={motion.div}
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:1.2}}
          variant="h3"
          sx={{
            maxWidth: "800px",
            [theme.breakpoints.down("md")]: {
              fontSize: 28,
            },
          }}
          >
          Espace de coworking, refuge pour les{" "}
          <FlippedText
            duration={2}
            words={["créatifs", "freelances", "startups"]}
            />{" "}
          avec une vue imprenable sur sousse
        </Typography>
            </Box>
      </Container>
    </Box>
  );
};

export default About;
