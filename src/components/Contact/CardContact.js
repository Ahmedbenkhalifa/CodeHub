import { Box, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";

const rows = [
  {
    icon: LocationOnIcon,
    content:
      "7ème étage, Immeuble Jawhara Médicale, Av. du 20 Mars 1956, Sousse 4000",
  },
  {
    icon: LocalPhoneIcon,
    content: "(+216) 56 434 555",
    url:'tel:+216 56 434 555'
  },
  {
    icon: MailIcon,
    content: "contact@codehub.tn",
    url:'mailto:contact@codehub.tn'
  },
  {
    icon: InstagramIcon,
    content: "codehub.coworking",
    url:'https://www.instagram.com/codehub.coworking'
  },
];

const CardContact = () => {
  return (
    <Box p={2} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" align="center" mb={2}>
        Contact
      </Typography>
      {rows.map((elem,k) => (
        <Box
          key={k}
          sx={{
            ml: 3,
            mb: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <elem.icon />
          <Typography component='a' href={elem.url} target='_blank' ml={1} variant="body1">
            {elem.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CardContact;
