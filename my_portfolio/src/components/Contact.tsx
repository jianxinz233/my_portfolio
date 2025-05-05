import { Box, Button, Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, textAlign: "center", bgcolor: "grey.100" }}>
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
          Contact Me
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="mailto:jianxinz233@gmail.com"
        >
          Email Me
        </Button>
      </Container>
    </Box>
  );
}
