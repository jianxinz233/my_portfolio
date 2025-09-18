import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Container,
  CardMedia,
} from "@mui/material";

const projects = [
  {
    title: "Cooking Note",
    description:
      "Share recipes and generate shopping lists. And all recipes are made by myself as I'm also a cake lover.",
    demoLink: "https://cookingnote.netlify.app/",
    githubLink: "https://github.com/jianxinz233/recipe_app_hyf",
    image: "/images/recipe-app.png",
  },
  {
    title: "Meal Sharing App",
    description: "Full-stack meal-sharing platform.",
    demoLink: "#",
    githubLink: "https://github.com/jianxinz233/meal-sharing",
    image: "/images/meal-sharing.png",
  },
  {
    title: "Performance Analytics Dashboard",
    description: "HYF Final Project - Full-stack Project with AdWiseli",
    demoLink: "https://hyf-adwiseli-maher-c2isinfluencer.vercel.app/dashboard",
    githubLink: "https://github.com/kiko-bkr/hyf-adwiseli",
    image: "/images/influencer_screenshot.png",
  },
  {
    title: "LEGO UX Case Study",
    description:
      "Created Figma prototypes and mockups for user experience on LEGO website. Applied user research, wireframing, and usability testing principles",
    demoLink:
      "https://www.loom.com/share/a9cfa1baf0f8499ba181ca2024fd26cb?sid=cfbc0071-714c-4b95-ac50-5269c8f93d25",
    githubLink: "#",
    image: "/images/uxlegoss.png",
  },
  {
    title: "Inventory & Order Management API",
    description:
      "Node.js + Express + MySQL REST API simulating inventory and order management",
    demoLink: "#",
    githubLink: "https://github.com/jianxinz233/inventory-api",
    image: "/images/inventoryapi_ss.png",
  },
];

const nonTechProjects = [
  {
    title: "Logistics Data Analysis",
    description:
      "Student Collaboration Project with BESTSELLER to analyze logistics data and provide insights with a dashboard product.",
    githubLink: "#",
    image: "/images/DAproject_ss.png",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Mini Project - Data Analytics Course (2024 Fall) Power BI version. A python version is on the way.",
    githubLink: "https://github.com/jianxinz233/hr-analytics-redi",
    image: "/images/da_hr_ss_rate.png",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 4,
          }}
          textAlign="center"
        >
          Web Development Projects
        </Typography>
        <Grid
          container
          spacing={4}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {projects.map((project) => (
            <Grid key={project.title}>
              <Card
                sx={{
                  width: 345,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Box sx={{ position: "relative", width: "100%", pt: "56.25%" }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight="bold"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {project.demoLink === "#" ? (
                    <Button size="small" disabled>
                      Demo
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      href={project.demoLink}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  )}
                  <Typography>|</Typography>
                  {project.githubLink === "#" ? (
                    <Button size="small" disabled>
                      View on GitHub
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      href={project.githubLink}
                      target="_blank"
                    >
                      View on GitHub
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            mb: 4,
            paddingTop: 8,
          }}
          textAlign="center"
        >
          Data Analytics Projects
        </Typography>
        <Grid
          container
          spacing={4}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {nonTechProjects.map((project) => (
            <Grid key={project.title}>
              <Card
                sx={{
                  width: 345,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Box sx={{ position: "relative", width: "100%", pt: "56.25%" }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight="bold"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {project.githubLink === "#" ? (
                    <Button size="small" disabled>
                      View on GitHub
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      href={project.githubLink}
                      target="_blank"
                    >
                      View on GitHub
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
