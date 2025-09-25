import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Import your page components
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'Resume', path: '/resume' },
  /*{ label: 'Whitepapers', path: '/whitepapers' },*/
  {label: 'Projects', path: '/projects' }
];
document.title = "Adam Oliver - Software Engineer";
function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
     <Router>
      <Box sx={{ background: '#000000', p:1 }}>
        <AppBar position="static" elevation={0} component="nav" aria-label="Main navigation">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component={RouterLink} to="/" sx={{ fontWeight: 700, textDecoration: 'none', color: 'inherit' }}>
              Adam Oliver
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  PaperProps={{ sx: { width: 220 } }}
                >
                  <List>
                    {navLinks.map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton
                          component={RouterLink}
                          to={item.path}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              <Box>
                {navLinks.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    component={RouterLink}
                    to={item.path}
                    sx={{ ml: 2 }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>

        {/* Main content area */}
        <Routes>
          <Route path="/projects/:shortName" element={<ProjectsPage   />} />
          <Route path="/projects" element={<ProjectsPage   />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/" element={<HomePage />} />
          <Route  path="" element={<HomePage />} />
        </Routes>
      </Box>
    </Router>
    <Box sx={{ py: 1, backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" component="p">
          &copy; {new Date().getFullYear()} Adam Oliver. All rights reserved.
        </Typography>
      </Container>
    </Box>

    </>
    
  );
}

export default App;