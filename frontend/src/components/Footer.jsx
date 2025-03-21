
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
              src="/public/logo.png" // Update with your logo's file path or URL
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
                <Link href="/about" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  About Us
                </Link>
                <Link href="/updates" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Updates
                </Link>
                <Link href="/press" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Press
                </Link>
                <Link href="/enterprise" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Enterprise
                </Link>
                <Link href="/work-for-us" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Work For Us
                </Link>
              </Grid>

              {/* Career Guides Section */}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" gutterBottom>
                  Career Guides
                </Typography>
                <Link href="/how-to-make-a-resume" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  How to make a resume
                </Link>
                <Link href="/how-to-write-a-cover-letter" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  How to write a cover letter
                </Link>
                <Link href="/how-to-get-hired" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  How to get hired
                </Link>
                <Link href="/negotiating-salaries" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Negotiating salaries
                </Link>
                <Link href="/following-up-a-job-offer" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Following up a job offer
                </Link>
              </Grid>

              {/* Career Advice Section */}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" gutterBottom>
                  Career Advice
                </Typography>
                <Link href="/resumes-and-cvs" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Resumes & CVs
                </Link>
                <Link href="/cover-letters" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Cover letters
                </Link>
                <Link href="/interviewing" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Interviewing
                </Link>
                <Link href="/finding-a-job" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Finding a Job
                </Link>
                <Link href="/career-development" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Career Development
                </Link>
              </Grid>

              {/* Support Section */}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" gutterBottom>
                  Support
                </Typography>
                <Link href="/faq" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  FAQ
                </Link>
                <Link href="/contact-us" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Contact Us
                </Link>
                <Link href="/terms-of-service" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Privacy Policy
                </Link>
                <Link href="/cookie-policy" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#03a9f4' } }}>
                  Cookie Policy
                </Link>
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
