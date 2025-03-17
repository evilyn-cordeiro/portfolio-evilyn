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
  InputAdornment,
  Skeleton,
} from "@mui/material";
import {
  FilterAlt,
  Search as SearchIcon,
  ViewModule,
  ViewList,
  ArrowBack,
  Visibility,
  ErrorOutline,
  MoreVert,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [anchorElFilters, setAnchorElFilters] = useState<null | HTMLElement>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "recent">("asc");

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
          setError(t("no-projects-found"));
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
        setError(t("error-fetching-projects"));
        console.error("Erro ao buscar projetos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [t]);

  const filteredProjects = projects
    .filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOrder) {
        case "asc":
          return a.name.localeCompare(b.name);
        case "desc":
          return b.name.localeCompare(a.name);
        case "recent":
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        default:
          return 0;
      }
    });

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

  const handleFiltersClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElFilters(event.currentTarget);
  };

  const handleFiltersClose = () => {
    setAnchorElFilters(null);
  };

  const handleSortChange = (sortType: "asc" | "desc" | "recent") => {
    setSortOrder(sortType);
    handleFiltersClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
        minHeight: "100vh",
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
        {t("back")}
      </Button>

      <Typography
        variant="h4"
        color={currentTheme.palette.text.primary}
        mb={3}
        textAlign={"center"}
      >
        {t("github-projects")}
      </Typography>

      <TextField
        label={t("search-label")}
        variant="outlined"
        placeholder={t("search-placeholder")}
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ maxWidth: { sm: "100%", md: "600px", lg: "600px" }, mb: 4 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box
        width="100%"
        maxWidth="1200px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(event, newMode) => newMode && setViewMode(newMode)}
        >
          <ToggleButton value="grid">
            <ViewModule />
          </ToggleButton>
          <ToggleButton value="list">
            <ViewList />
          </ToggleButton>
        </ToggleButtonGroup>

        <Button
          onClick={handleFiltersClick}
          startIcon={<FilterAlt />}
          sx={{ textTransform: "none" }}
        >
          {t("filters")}
        </Button>
      </Box>

      <Menu
        anchorEl={anchorElFilters}
        open={Boolean(anchorElFilters)}
        onClose={handleFiltersClose}
      >
        <MenuItem onClick={() => handleSortChange("asc")}>
          {t("sort-asc")}
        </MenuItem>
        <MenuItem onClick={() => handleSortChange("desc")}>
          {t("sort-desc")}
        </MenuItem>
        <MenuItem onClick={() => handleSortChange("recent")}>
          {t("sort-recent")}
        </MenuItem>
      </Menu>

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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: 1,
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {Array.from(Array(6).keys()).map((i) => (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                key={i}
              />
            ))}
          </Box>
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
              {t("no-projects-found")}
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
                    {project.description || t("no-description")}
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
        <MenuItem
          onClick={() => {
            if (selectedProject?.html_url) {
              window.open(selectedProject.html_url, "_blank");
            }
            handleCloseMenu();
          }}
        >
          <Visibility sx={{ marginRight: 1 }} />
          {t("view-project")}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Search;
