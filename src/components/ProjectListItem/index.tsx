import React from "react";
import { ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

interface ProjectListItemProps {
  project: any;
  currentTheme: any;
  handleMenuClick: (event: React.MouseEvent<HTMLElement>, project: any) => void;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  project,
  currentTheme,
  handleMenuClick,
}) => {
  return (
    <ListItem
      sx={{
        backgroundColor: currentTheme.palette.background.paper,
        mb: 1,
        borderRadius: "8px",
      }}
    >
      <ListItemText
        primary={
          <Typography color={currentTheme.palette.text.primary}>
            {project.name}
          </Typography>
        }
      />
      <IconButton
        onClick={(e) => handleMenuClick(e, project)}
        sx={{ marginLeft: "auto" }}
        title={"Actions"}
      >
        <MoreVert />
      </IconButton>
    </ListItem>
  );
};

export default ProjectListItem;
