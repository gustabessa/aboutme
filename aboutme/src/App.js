import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Theme from './themes/Theme'

function App() {
  return (
    <div className="container">
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Profile />
        <Projects />
      </ThemeProvider>
    </div>
  );
}

export default App;
