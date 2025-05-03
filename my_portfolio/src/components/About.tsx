"use client";

import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="md">
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
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            display: { xs: "none", md: "block" },
            fontSize: "1.1rem",
            lineHeight: 1.8,
            px: { md: 4 },
          }}
        >
          With a background in marketing and brand management, I&apos;ve always
          been passionate about storytelling and user experience. After
          relocating to Denmark, I decided to turn that passion into a new path
          — Full-Stack development.
          <br />
          <br />
          I&apos;ve since gained hands-on experience with JavaScript, React,
          Node.js, and SQL, and I'm currently expanding my skills through UI/UX
          design. I love building clean, intuitive interfaces and crafting
          digital experiences that connect people and ideas.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: "1rem",
            lineHeight: 1.6,
            px: { xs: 2 },
          }}
        >
          A former marketing professional now building user-friendly websites
          with React, JavaScript, Node.js, Database and UI/UX design. Currently
          based in Denmark and loving the creative process of development.
        </Typography>
      </Container>
    </Box>
  );
}
