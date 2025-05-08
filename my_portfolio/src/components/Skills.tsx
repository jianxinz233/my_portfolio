import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";

const skills = [
  { name: "JavaScript", icon: "/skills/javascript.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "mySQL", icon: "/skills/mysql.svg" },
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "CSS", icon: "/skills/css.svg" },
  { name: "Python", icon: "/skills/python.svg" },
  { name: "PowerBI", icon: "/skills/powerbi.svg" },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: "background.default" }}>
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
        Skills
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {skills.map((skill) => (
          <Grid key={skill.name}>
            <Box textAlign="center">
              <Image src={skill.icon} alt={skill.name} width={64} height={64} />
              <Typography variant="subtitle1">{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
