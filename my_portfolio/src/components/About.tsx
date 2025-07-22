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
          With a background in project coordination and brand management,
          I&apos;ve always been driven by creating meaningful experiences,
          whether through storytelling, well-executed projects, or engaging
          digital products. After relocating to Denmark, I expanded on this
          passion by learning Full-Stack Development and Data Analytics, gaining
          hands-on experience with JavaScript, React, Node.js, SQL, and Power
          BI, while also developing skills in UI/UX design.
          <br />
          <br />
          Today, I&apos;m combining my experience in project and brand
          management with new digital skills, enjoying both worlds: coordinating
          projects, improving processes with data insights, and building clean,
          user-friendly digital interfaces. I&apos;m excited by roles where I
          can connect people, ideas, and technology, whether through project
          coordination, product development, or digital solutions.
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
          <strong>Project & brand manager</strong> turned{" "}
          <strong>web developer</strong>, upskilling in{" "}
          <strong>data analytics</strong> and <strong>UI/UX design</strong>.
          Building user-friendly websites with <strong>React</strong>,{" "}
          <strong>JavaScript</strong>, <strong>Node.js</strong>,{" "}
          <strong>SQL</strong>, and <strong>Power BI</strong>. Based in Denmark,
          combining <strong>creativity</strong>, <strong>structure</strong>, and{" "}
          <strong>technology</strong>.
        </Typography>
      </Container>
    </Box>
  );
}
