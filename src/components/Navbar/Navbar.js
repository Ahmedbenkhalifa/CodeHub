import React, { useState } from "react";
import logoCodeHub from "../../assets/images/logoCodeHub.svg";
import logoLarge from "../../assets/images/logoLarge.svg";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Hidden, styled, useTheme } from "@mui/material";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import { hexToRgba } from "../../utils/colors";
import { AnimateSharedLayout, motion } from "framer-motion";
import Logo from "../../assets/images/Logo";
import LogoLarge from "../../assets/images/LogoLarge";

const Navbar = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const handleNav = () => setIsScrolled(window.scrollY > 0);
  window.addEventListener("scroll", handleNav);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 8 : 0}
      sx={{
        background: hexToRgba(theme.palette.background.default, 0.8),
        transition: ".2s",
        backdropFilter: scrolled ? "blur(5px)" : "inherit",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 0,
          }}
        >
          <NavLogo scrolled={scrolled} />
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Menu />
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <HamburgerMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavLogo = ({ scrolled }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      {scrolled && <LogoLarge layoutId='1' style={{height:'35px'}}/>}
      {!scrolled && <Logo layoutId='1'  style={{height:'40px'}} />}
      {/* {!scrolled &&<motion.img
        src={logoLarge}
        style={{ height: "40px", objectFit: "contain" }}
        alt="codehub"
        layoutId="1"
      />}
      {scrolled && (
        <motion.img
          style={{ height: "40px", objectFit: "contain" }}
          src={logoCodeHub}
          alt="codehub"
          layoutId="1"
        />
      )} */}
    </AnimateSharedLayout>
  );
};

export default Navbar;
