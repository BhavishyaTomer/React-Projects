import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { baseUrl } from './baseUrl';

const defaultTheme = createTheme();

export default function App() {

  const [email, setEmail] = React.useState('');
  const [validEmail, setValidEmail] = React.useState(false);
  const [emailfocus, setEmailFocus] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [validPassword, setValidPassword] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [match, setMatch] = React.useState('');
  const [validMatch, setValidMatch] = React.useState(false);
  const [matchFocus, setMatchFocus] = React.useState(false);

  const USER_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });
    axios.post(`${baseUrl}/signup`, {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        setSuccess(true);
        setErrMsg('');
      })
      .catch(function (error) {
        console.log(error);
        setErrMsg('Registration Failed');
      })
  };

  useEffect(() => {
    const result = USER_REGEX.test(email);
    console.log(result)
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result)
    setValidPassword(result);
    const matchBoolean = password === match;
    setValidMatch(matchBoolean);
  }, [password, match]);

  useEffect(() => {
    setErrMsg('');
  }, [email, password, match]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="div" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              aria-invalid={!validEmail}
              onBlur={() => setEmailFocus(false)}
              inputRef={userRef}
              autoFocus
            />
            {emailfocus && email && !validEmail && (
              <p id="emailNotes" className="instructions">
                <CloseIcon />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordFocus && password && !validPassword && (
              <p id="emailNotes" className="instructions">
                <CloseIcon />
                8 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="off"
              onChange={(e) => setMatch(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              value={match}
            />
              {matchFocus && match && !validMatch && (
              <p id="emailNotes" className="instructions">
                <CloseIcon />
                Must match the first password input field.
              </p>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!validEmail || !validPassword || !validMatch ? true : false}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
