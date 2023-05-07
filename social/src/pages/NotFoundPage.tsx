import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const primary = blue[700];

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography sx={{ mb: 2 }} variant="h6" style={{ color: "white" }}>
        Этой страницы не существует
      </Typography>
      <Button href="/" variant="contained" color="success">
        Домой
      </Button>
    </Box>
  );
}
