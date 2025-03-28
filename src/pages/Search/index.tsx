import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Menu,
  MenuItem,
  InputAdornment,
  Skeleton,
  List,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import {
  FilterAlt,
  Search as SearchIcon,
  ViewModule,
  ViewList,
  ArrowBack,
  ErrorOutline,
  Preview,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material"; // Ícones de navegação
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GitHubIcon } from "../../components/icons";
import { ProjectCard, ProjectListItem } from "../../components";

// Definindo um tipo para o projeto
interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  created_at: string;
  html_url: string;
  homepage: string;
  languages_url: string;
}

interface SearchProps {
  currentTheme: any;
}

const Search: React.FC<SearchProps> = ({ currentTheme }) => {
  const token = process.env.REACT_APP_API_KEY;
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [anchorElFilters, setAnchorElFilters] = useState<null | HTMLElement>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "recent">("asc");
  const [currentPage, setCurrentPage] = useState(1); // Adicionando estado para a página atual
  const [projectsPerPage] = useState(6); // Número de projetos por página
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  // Calcular o índice dos projetos para a página atual
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    project: Project
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

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderErrorOrNoProjects = () => (
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
        {error || t("no-projects-found")}
      </Typography>
    </Box>
  );

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1.5rem",
        backgroundColor: currentTheme.palette.background.default,
        minHeight: "100vh",
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
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250, 1fr))",
              gap: 1,
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {Array.from(Array(6).keys()).map((i) => (
              <Skeleton
                variant="rectangular"
                width="100%"
                sx={{ borderRadius: "8px" }}
                height={180}
                key={i}
              />
            ))}
          </Box>
        ) : error || filteredProjects.length === 0 ? (
          renderErrorOrNoProjects()
        ) : viewMode === "grid" ? (
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(300px, 2fr))"
            gap={1}
            width="100%"
            maxWidth="1200px"
          >
            {currentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                currentTheme={currentTheme}
                handleMenuClick={handleMenuClick}
              />
            ))}
          </Box>
        ) : (
          <List sx={{ width: "100%", maxWidth: "1200px" }}>
            {currentProjects.map((project) => (
              <ProjectListItem
                key={project.id}
                project={project}
                currentTheme={currentTheme}
                handleMenuClick={handleMenuClick}
              />
            ))}
          </List>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </IconButton>
        <Typography sx={{ margin: "0 10px" }}>
          {t("page")} {currentPage} {t("of")} {pageCount}
        </Typography>
        <IconButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          <ChevronRight />
        </IconButton>
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
          <GitHubIcon sx={{ marginRight: 1 }} />
          {t("view-project")}
        </MenuItem>
        {selectedProject?.homepage && (
          <MenuItem
            onClick={() => {
              window.open(selectedProject.homepage, "_blank");
              handleCloseMenu();
            }}
          >
            <Preview sx={{ marginRight: 1 }} />
            {t("acessar-homepage")}
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default Search;
