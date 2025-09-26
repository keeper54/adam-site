import { useState } from 'react';
import './App.css';
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
import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
      <Box className="fullPage" sx={{ background: 'transparent', p:1 }}>
        <AppBar position="relative" elevation={0} component="nav" 
        aria-label="Main navigation" sx={{ mb: 2, backgroundColor: 'transparent', 
        color:'white' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component={RouterLink} to="/" sx={{ fontWeight: 700, textDecoration: 'none', color: 'inherit' }}>
                          <img src="/assets/adam-logo.png" alt="Logo" style={{ height: 80 }} />
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
    <Box className="footerBox" sx={{ py: 1, backgroundColor: 'transparent', color: 'white', textAlign: 'center' }}>
     <Container maxWidth="md">

      <Grid container spacing={0} justifyContent="center">
        <Grid size={{sm:12, xs:12, md:12, lg:12}} sx={{ 'background-color':'transparent',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ mb:2,display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
              <GitHubIcon fontSize="large" href="https://github.com/keeper54" target="_blank" />
            </IconButton>
            <IconButton sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
              <LinkedInIcon fontSize="large" href="https://www.linkedin.com/in/adamoliver/" target="_blank" />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="body2" component="p">
              &copy; {new Date().getFullYear()} Adam Oliver. All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>

    </>
    
  );
}

export default App;