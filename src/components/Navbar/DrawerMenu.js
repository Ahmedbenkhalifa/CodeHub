import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material";
import { Link } from "react-scroll";

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

export default function DrawerMenu({ isOpen, handleClose }) {
  const theme = useTheme();
  const list = (anchor) => (
    <Box
      sx={{
        height: "100%",
        width: 250,
      }}
      role="presentation"

      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ mt: 8 }}>
        {["Accueil", "Services", "Tarifs", "Gallerie", "Avis"].map(
          (text, index) => (
            <div key={index}>
              <Link {...smoothScrollProps} to={"section" + text}>
                <ListItem
                  onClick={handleClose}
                  sx={{
                    py: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                  button
                  key={text}
                >
                  {text}
                </ListItem>
              </Link>
              <Divider
                variant="middle"
                sx={{ width: "50%", margin: "0 auto" }}
              />
            </div>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={isOpen} onClose={handleClose}>
      {list("left")}
    </Drawer>
  );
}
