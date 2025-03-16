import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  ViewModule,
  ViewList,
  ArrowBack,
  Visibility,
  ErrorOutline,
  MoreVert,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  currentTheme: any;
}

const Search: React.FC<SearchProps> = ({ currentTheme }) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [error, setError] = useState<string | null>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const token = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/evilyn-cordeiro/repos",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        if (!data || data.length === 0) {
          setError("Nenhum projeto encontrado.");
          return;
        }

        const projectsWithTech = await Promise.all(
          data.map(async (project: any) => {
            const techResponse = await fetch(project.languages_url);
            const techData = await techResponse.json();

            return {
              ...project,
            };
          })
        );

        setProjects(projectsWithTech);
      } catch (error) {
        setError("Erro ao buscar projetos.");
        console.error("Erro ao buscar projetos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    project: any
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(project);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
        backgroundColor: currentTheme.palette.background.default,
      }}
    >
      <Button
        onClick={() => navigate("/")}
        startIcon={<ArrowBack />}
        sx={{
          alignSelf: "flex-start",
          marginBottom: "2rem",
          fontWeight: "bold",
          display: "flex",
          padding: "0px",
          alignItems: "center",
          textTransform: "none",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Voltar
      </Button>

      <Typography
        variant="h4"
        color={currentTheme.palette.text.primary}
        mb={3}
        textAlign={"center"}
      >
        Meus Projetos do GitHub
      </Typography>

      <TextField
        label="Buscar projetos"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ maxWidth: "600px", mb: 3 }}
      />

      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={(event, newMode) => newMode && setViewMode(newMode)}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="grid">
          <ViewModule /> Blocos
        </ToggleButton>
        <ToggleButton value="list">
          <ViewList /> Lista
        </ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
          flex: 1,
          width: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: viewMode === "grid" ? "row" : "column",
          justifyContent: viewMode === "grid" ? "center" : "start",
          alignItems: viewMode === "grid" ? "flex-start" : "center",
          minHeight: "60vh",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <ErrorOutline
              style={{
                fontSize: "80px",
                color: currentTheme.palette.error.main,
                marginBottom: "1rem",
              }}
            />
            <Typography variant="h6" color={currentTheme.palette.text.primary}>
              {error}
            </Typography>
          </Box>
        ) : filteredProjects.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <ErrorOutline
              style={{
                fontSize: "80px",
                color: currentTheme.palette.error.main,
                marginBottom: "1rem",
              }}
            />
            <Typography variant="h6" color={currentTheme.palette.text.primary}>
              Nenhum projeto encontrado.
            </Typography>
          </Box>
        ) : viewMode === "grid" ? (
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            gap={1}
            width="100%"
            maxWidth="1200px"
          >
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                sx={{
                  backgroundColor: currentTheme.palette.background.paper,
                  display: "flex",
                  flexDirection: "row",
                  maxHeight: "150px",
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
                        sx={{ marginLeft: "auto" }}
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
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.description || "Sem descrição disponível."}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <List sx={{ width: "100%", maxWidth: "1200px" }}>
            {filteredProjects.map((project) => (
              <ListItem
                key={project.id}
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
                  secondary={
                    <>
                      <Typography
                        color={currentTheme.palette.text.secondary}
                        sx={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {project.description || "Sem descrição disponível."}
                      </Typography>
                    </>
                  }
                />
                <IconButton
                  onClick={(e) => handleMenuClick(e, project)}
                  sx={{ marginLeft: "auto" }}
                >
                  <MoreVert />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Visibility sx={{ marginRight: 1 }} /> Visualizar
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Search;
