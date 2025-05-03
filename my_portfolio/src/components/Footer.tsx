import { Box, Container, IconButton, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: "center", bgcolor: "grey.200" }}>
      <IconButton
        href="https://www.linkedin.com/in/jianxin-zhao/"
        target="_blank"
        color="primary"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="https://github.com/jianxinz233"
        target="_blank"
        color="primary"
      >
        <GitHub />
      </IconButton>
      <Typography variant="body2" align="center" color="text.secondary">
        Design & Developed by Jianxin
      </Typography>
    </Box>
  );
}
