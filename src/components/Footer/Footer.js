import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt:8,
        height: "50px",
        pl:2,
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems:'center'
      }}
    >
        <Typography variant="body2" >
        Copyrights © 2022 All Rights Reserved by CodeHub
        </Typography>     
    </Box>
  );
};

export default Footer;
