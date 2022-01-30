import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="registration">
      <p>
      Don't have account?
      </p>
      <Button variant="contained" href="#contained-buttons">
        Sign up
      </Button>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Ice Hockey
        </p>

<div class="login">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>

<Button variant="contained">Login</Button>
    </div>
      </header>
</div>
  );
}

export default App;
