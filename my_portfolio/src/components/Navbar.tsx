"use client";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sections = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="#home">
          <Image
            src="/mplogo.png"
            alt="Logo"
            width={160}
            height={50}
            style={{
              width: "auto",
              height: "50px",
              cursor: "pointer",
            }}
            priority
          />
        </Link>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                href={`#${section.toLowerCase()}`}
                sx={{ fontWeight: "bold" }}
              >
                {section}
              </Button>
            ))}
          </Box>
        )}

        {isMobile && (
          <>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="top"
              open={open}
              onOpen={toggleDrawer(true)}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  top: "56px",
                  width: "100%",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  padding: theme.spacing(2),
                  boxSizing: "border-box",
                },
              }}
            >
              <List>
                {sections.map((section) => (
                  <ListItem key={section} disablePadding>
                    <ListItemButton
                      component="a"
                      href={`#${section.toLowerCase()}`}
                    >
                      <ListItemText primary={section} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
