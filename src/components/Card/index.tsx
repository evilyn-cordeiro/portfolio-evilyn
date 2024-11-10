import React from "react";
import { Card } from "@mui/material";

interface ProjectCardProps {
  children: any;
  sx?: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Card
      {...props}
      sx={{
        padding: 4, // 40px de padding
        borderRadius: "20px",
        minHeight: "fit-content",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

export default ProjectCard;
