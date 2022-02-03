import { Box, useTheme } from "@mui/material";
import React from "react";
import CardContact from "./CardContact";

const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" ,mt:16}} id={"sectionContact"}>
      <Box
        sx={{
          width: "100%",
          minHeight: "230px",
          display: { md: "none", xs: "block" },
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <CardContact />
      </Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.727969097781!2d10.62337541522017!3d35.83114948015963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13027501f7a31391%3A0x50dfb49e823c4f1f!2sCode%20Hub%20-%20Coworking%20Space%20Sousse!5e0!3m2!1sfr!2stn!4v1643639557013!5m2!1sfr!2stn"
        loading="lazy"
        style={{ border: "none", width: "100%", height: "300px" }}
      ></iframe>
      <Box
        sx={{
          display: { md: "block", xs: "none" },
          zIndex: "10",
          position: "absolute",
          top: "10px",
          left: "105px",
          width: "370px",
          height: "270px",
          borderLeft: `5px solid rgba(0,0,0,.2)`,
          borderTopLeftRadius: "6px",
          borderBottomLeftRadius: "6px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <CardContact />
      </Box>
    </Box>
  );
};

export default Contact;
