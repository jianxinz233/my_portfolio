import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box sx={{ maxWidth: 300 }}>
            <Image
              src="/images/portrait.jpg"
              alt="Portrait"
              width={360}
              height={394}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />
          </Box>

          <Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Hello, I’m Jianxin
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, px: { xs: 2 } }}
            >
              Full-Stack Developer with a passion for clean design & UX
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
