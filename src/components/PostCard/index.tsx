// src/components/PostCard.tsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

interface PostCardProps {
  image: string;
  description: string;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, description, link }) => {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "visible",
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        "&:before": {
          content: '""',
          position: "absolute",
          top: -3,
          left: -3,
          right: -3,
          bottom: -3,
          borderRadius: 2,
          background:
            "linear-gradient(90deg, rgba(17,17,17,1) 0%, rgba(104,10,113,1) 19%, rgba(121,9,55,1) 51%, rgba(173,0,255,1) 100%)",
          zIndex: -1,
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Postagem"
        sx={{ borderRadius: "4px 4px 0 0" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir para a Publicação
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
