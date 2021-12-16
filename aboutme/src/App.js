import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Theme from './themes/Theme'
import Home from './screens/Home';
import Projects from './components/projects/Projects';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="container">
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Home />
        {/* <Profile />
        <Projects /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
