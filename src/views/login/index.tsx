import React from "react";
import { Container, Box, Typography, Stack, TextField } from "@mui/material";

const Login = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        border: "1px solid grey",
        borderRadius: "10px",
        mt: "10%",
        background: "#222",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ mt: 1, mb: 2 }}>
          <Typography variant="h4">Login</Typography>
        </Box>
        <Stack direction="column" spacing={2} sx={{ padding: 2 }}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            sx={{ color: "white" }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
