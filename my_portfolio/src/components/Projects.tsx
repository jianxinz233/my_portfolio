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
    description: "Share recipes and generate shopping lists.",
    link: "https://github.com/jianxinz233/recipe_app_hyf",
    image: "/images/recipe-app.png",
  },
  {
    title: "Meal Sharing App",
    description: "Full-stack meal-sharing platform.",
    link: "https://github.com/jianxinz233/meal-sharing",
    image: "/images/meal-sharing.png",
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
          Projects
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
                  <Button size="small" href={project.link} target="_blank">
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
