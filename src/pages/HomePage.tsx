import { Box, Typography, Paper, Button, Link } from '@mui/material';

const HomePage = () => {
    return (
        <>
        <Box
        sx={{
          p: 4,
          textAlign: 'center',
          bgcolor: 'primary.light',
          color: 'primary.contrastText',
          minHeight: '40vh',
          display: 'flex',
          maxWidth: '90%',
          margin: '0 auto',
          backgroundImage: 'url(/assets/coding.jpg)',
          borderRadius: 2,
          boxShadow: 2,
          border: '1px solid #ccc',
          backgroundColor: 'white',
          backgroundOpacity: 0.25,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        role="main"
      >
        <Box sx={{ 
          color: 'primary.main',
          justifyContent: 'center',
          maxWidth: '90%',
          margin: '0 auto',
          p: 4,
          borderRadius: 2,
          boxShadow: 2,
          border: '1px solid #ccc',
          backgroundColor: '#D3D3D3'
           }}>
        <Typography variant="h1">Adam Oliver</Typography>
        <Typography variant="h3">Software Engineering Leader</Typography>
        <Typography variant="h5">Craftsmanship, Innovation, and Excellence</Typography>
        </Box>
        </Box>
        <Box sx={{ p: 4, bgcolor: 'background.default' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
            Recent Personal Projects
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" color="primary" sx={{ mb: 1 }}>Project One</Typography>
            <Typography variant="body1">
            Details about project one. This text uses the primary text color.
            </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" color="primary" sx={{ mb: 1 }}>Project Two</Typography>
            <Typography variant="body1">
            Details about project two. Another example of content.
            </Typography>
        </Paper>
        </Box>
        <Box sx={{ p: 4, bgcolor: 'background.default' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Recent Personal Projects
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" sx={{ mb: 1 }}>Project One</Typography>
          <Typography variant="body1">
            Details about project one. This text uses the primary text color.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" sx={{ mb: 1 }}>Project Two</Typography>
          <Typography variant="body1">
            Details about project two. Another example of content.
          </Typography>
        </Paper>
        </Box>
        <Box sx={{ p: 4, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Feel free to <Link href="#" color="inherit">contact me</Link> for more information.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ color: 'primary.contrastText', borderColor: 'primary.contrastText' }}>
              Email Me
            </Button>
        </Box>
        </>
    )
}

export default HomePage;