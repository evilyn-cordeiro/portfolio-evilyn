import React, { useState } from "react";
import {
  Box,
  Drawer,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Toolbar,
  Avatar,
  Typography,
  IconButton as MuiIconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarButton } from "./interface";
import {
  ListItemStyled,
  AppBarStyled,
  VersionStyled,
  ListStyled,
} from "./styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface SidebarProps {
  buttons: SidebarButton[];
}

const drawerWidth = 250;

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

  const myInfo = {
    name: "Evilyn Cordeiro",
    description: "Analista e Desenvolvedora de Softwares",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFH-QQpjBeSuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729791032780?e=1736380800&v=beta&t=IzLImBXmv9U79a4YA",
    contactInfo: [
      { label: "E-mail", value: "seuemail@exemplo.com", icon: <EmailIcon /> },
      { label: "Telefone", value: "(99) 99999-9999", icon: <PhoneIcon /> },
      {
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/seu-perfil/",
        icon: <LinkedInIcon />,
      },
      {
        label: "GitHub",
        value: "https://github.com/seu-usuario/",
        icon: <GitHubIcon />,
      },
    ],
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
        <Box
          sx={{
            padding: 2,
            textAlign: "center",
            borderBottom: "1px solid #ddd",
            background: "rgba(104,10,113,1)",
          }}
        >
          <Typography variant="h6">{myInfo.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {myInfo.description}
          </Typography>
          <Box sx={{ marginTop: 1 }}>
            {myInfo.contactInfo.map((info, index) => (
              <MuiIconButton
                key={index}
                href={
                  info.label === "E-mail" ? `mailto:${info.value}` : info.value
                }
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "text.primary", margin: 0.5 }}
              >
                {info.icon}
              </MuiIconButton>
            ))}
          </Box>
        </Box>

        <ListStyled
          sx={{ background: "#590753", height: "100%", paddingTop: 2 }}
        >
          {buttons.map((button, index) => (
            <ListItemStyled
              key={index}
              className={selectedIndex === index ? "selected" : ""}
              onClick={() => handleListItemClick(index, button.onClick)}
            >
              {button.icon && (
                <ListItemIcon
                  sx={{
                    color: selectedIndex === index ? "white" : "white",
                  }}
                >
                  {button.icon}
                </ListItemIcon>
              )}
              <ListItemText primary={button.text} />
            </ListItemStyled>
          ))}
          <VersionStyled>©Evilyn Cordeiro - v1.0</VersionStyled>
        </ListStyled>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
