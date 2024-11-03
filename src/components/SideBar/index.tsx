import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarButton } from "./interface";
import { ListItemStyled, AppBarStyled } from "./styles";

interface SidebarProps {
  buttons: SidebarButton[];
}

const drawerWidth = 300;

const Sidebar: React.FC<SidebarProps> = ({ buttons }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleListItemClick = (index: number, onClick: () => void) => {
    setSelectedIndex(index);
    onClick();
    if (isMobile) {
      setOpenDrawer(false);
    }
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <AppBarStyled position="fixed">
          <Toolbar>
            <IconButton edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBarStyled>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? openDrawer : true}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {buttons.map((button, index) => (
            <ListItemStyled
              key={index}
              className={selectedIndex === index ? "selected" : ""}
              onClick={() => handleListItemClick(index, button.onClick)}
            >
              {button.icon && (
                <ListItemIcon
                  sx={{
                    color: selectedIndex === index ? "#44021e" : "inherit",
                  }}
                >
                  {button.icon}
                </ListItemIcon>
              )}
              <ListItemText primary={button.text} />
            </ListItemStyled>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
