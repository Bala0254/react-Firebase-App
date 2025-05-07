import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // success | error

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleLogin = async () => {
    const user_pswd = "admin";
    if (email === "") {
      setSnackbarMessage("Please Enter Username");
      setSnackbarSeverity("error");
      setOpen(true);
    } else if (password === "") {
      setSnackbarMessage("Please Enter Password");
      setSnackbarSeverity("error");
      setOpen(true);
    } else if (email === user_pswd && password === user_pswd) {
      setSnackbarMessage("You are logged in");
      setSnackbarSeverity("success");
      setOpen(true);
      setTimeout(() => {
        localStorage.setItem('User', 'admin');
        navigate("/dashboard");
      }, 1000);
    } else {
      setSnackbarMessage("Invalid credentials");
      setSnackbarSeverity("error");
      setOpen(true);
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Box className="login-grp-container" mt={10} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h3" className="text-center">Sign In</Typography>
        <p className="text-center">Enter your credentials to access your account</p>
        <label>Username</label>
        <input
          type="text"
          className="inp-field"
          placeholder="Enter your Username"
          maxLength={30}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          className="inp-field"
          placeholder="Enter your Password"
          maxLength={30}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="text-center">Hint: Username is 'admin' and password is 'admin'</p>
        <Button variant="contained" onClick={handleLogin}>Sign in</Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
