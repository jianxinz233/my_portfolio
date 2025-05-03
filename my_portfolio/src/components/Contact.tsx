import { Box, Button, Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, textAlign: "center", bgcolor: "grey.100" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="mailto:your.email@example.com"
        >
          Email Me
        </Button>
      </Container>
    </Box>
  );
}
