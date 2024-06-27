import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Link,
  Typography,
  Container,
} from "@mui/material";
import "./sign-in.css"
const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography component="h1" variant="h5" sx={{fontSize: 30}}>
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{ mt: 2, width: "100%" }}
        >
          <TextField 
                  type="text"
                  required
                  fullWidth
                  id="email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  className="form-control my-2"
                  value={email}
                  name="email"
                  multiline
                />
          <TextField
                  type="password"
                  required
                  id="password"
                  label="Password"
                  fullWidth
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ mt: 2, mb: 2  }}
                />
                <div className="link">
                <Link href="/sign-up">Register here</Link>
                <Link href="/forgot-password">Forgot password</Link>
                </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 1.5, fontSize: 16 }}
          >
            Sign In
          </Button>
          <Typography variant="body2">
           
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;