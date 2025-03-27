import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'transparent', // Ensure no solid background so we can apply the gradient
        p: 6,
        background: 'linear-gradient(45deg,rgb(0, 83, 167),rgb(2, 44, 78))', // Blue gradient shades
        color: 'white', // White text color
        borderTop: '1px solid #333', // Darker top border for contrast
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)', // Darker shadow for depth
        mt: '60px', // Margin to create 60px space below content
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* App Name and Logo Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: 1, color: 'white' }}>
              ResumeBuilder
            </Typography>
            {/* Add Logo Below the Text */}
            <Box
              component="img"
              src="\logo.png" // Update with your logo's file path or URL
              alt="Logo"
              sx={{
                width: 100, // Adjust the size as needed
                height: 'auto',
                marginTop: 2, // Add margin to space it out from the text
              }}
            />
          </Grid>

          {/* Footer Sections */}
          <Grid item xs={12} sm={9}>
            <Grid container spacing={4}>
              {/* Our Company Section */}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" gutterBottom>
                  Our Company
                </Typography>
                <Link href="/aboutus" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                   About Us
                </Link>
                <Typography variant="body2" color="inherit">
                  Updates
                </Typography>
                <Typography variant="body2" color="inherit">
                  Press
                </Typography>
                <Typography variant="body2" color="inherit">
                  Enterprise
                </Typography>
                <Typography variant="body2" color="inherit">
                  Work For Us
                </Typography>
              </Grid>

              {/* Career Guides Section */}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" gutterBottom>
                  Career Guides
                </Typography>
                <Typography variant="body2" color="inherit">
                  How to make a resume
                </Typography>
                <Typography variant="body2" color="inherit">
                  How to write a cover letter
                </Typography>
                <Typography variant="body2" color="inherit">
                  How to get hired
                </Typography>
                <Typography variant="body2" color="inherit">
                  Negotiating salaries
                </Typography>
                <Typography variant="body2" color="inherit">
                  Following up a job offer
                </Typography>
              </Grid>

              {/* Career Advice Section */}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" gutterBottom>
                  Career Advice
                </Typography>
                <Typography variant="body2" color="inherit">
                  Resumes & CVs
                </Typography>
                <Typography variant="body2" color="inherit">
                  Cover letters
                </Typography>
                <Typography variant="body2" color="inherit">
                  Interviewing
                </Typography>
                <Typography variant="body2" color="inherit">
                  Finding a Job
                </Typography>
                <Typography variant="body2" color="inherit">
                  Career Development
                </Typography>
              </Grid>

              {/* Support Section */}
              <Grid item xs={12} sm={3}>
                
                <Typography variant="h6" gutterBottom>
                  Support
                </Typography>
                <Link href="/contact" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
Contact Us
</Link>
                <Typography variant="body2" color="inherit">
                  FAQ
                </Typography>
                
                <Typography variant="body2" color="inherit">
                  Terms of Service
                </Typography>
                <Typography variant="body2" color="inherit">
                  Privacy Policy
                </Typography>
                <Typography variant="body2" color="inherit">
                  Cookie Policy
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Box mt={5} display="flex" justifyContent="center" gap={3}>
          <Link href="https://instagram.com" target="_blank" rel="noopener">
            <InstagramIcon sx={{ color: 'white', fontSize: 30, '&:hover': { color: '#E1306C' } }} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener">
            <LinkedInIcon sx={{ color: 'white', fontSize: 30, '&:hover': { color: '#0077B5' } }} />
          </Link>
          <Link href="https://wa.me/yournumber" target="_blank" rel="noopener">
            <WhatsAppIcon sx={{ color: 'white', fontSize: 30, '&:hover': { color: '#25D366' } }} />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener">
            <FacebookIcon sx={{ color: 'white', fontSize: 30, '&:hover': { color: '#1877F2' } }} />
          </Link>
        </Box>

        {/* Copyright Notice */}
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {'© '}{new Date().getFullYear()}{' '}
            ResumeBuilder. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;