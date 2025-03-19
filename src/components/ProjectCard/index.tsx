import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Chip,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

interface ProjectCardProps {
  project: any;
  currentTheme: any;
  handleMenuClick: (event: React.MouseEvent<HTMLElement>, project: any) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  currentTheme,
  handleMenuClick,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: currentTheme.palette.background.paper,
        display: "flex",
        flexDirection: "row",
        maxHeight: "170px",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          color={currentTheme.palette.text.primary}
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {project.name}
          <CardActions>
            <IconButton
              onClick={(e) => handleMenuClick(e, project)}
              title={"Ações"}
            >
              <MoreVert />
            </IconButton>
          </CardActions>
        </Typography>

        <Typography
          variant="body2"
          color={currentTheme.palette.text.secondary}
          mb={2}
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {project.description || "No description available"}
        </Typography>

        {project.language && (
          <Chip
            label={project.language}
            title={project.language}
            color="primary"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
