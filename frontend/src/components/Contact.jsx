import React from 'react';
import { Container, Typography, Box, Paper, Grid, Button, Stack } from '@mui/material';
import { Email, Phone, LocationOn, Business, People, Newspaper } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundImage: 'url(/images/contact-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: 6
    }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        {/* Hero Section */}
        <Box sx={{ 
          width: '100%', 
          textAlign: 'center', 
          py: 8, 
          color: '#fff', 
          borderRadius: 3,
          background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
          boxShadow: 3,
        }}>
          <Typography variant="h2" fontWeight="bold">Contact Us</Typography>
          <Typography variant="h6" mt={2}>We'd love to hear from you! Reach out for support, partnerships, or media inquiries.</Typography>
        </Box>

        {/* Contact Sections */}
        <Grid container spacing={4}>
          {[{
            icon: <People fontSize="large" color="primary" />, title: "Support", text: "Need help? Our team is here for you.", button: "Contact Support"
          }, {
            icon: <Business fontSize="large" color="primary" />, title: "Partnerships", text: "Let's collaborate to make job hunting easier.", button: "Partner with Us"
          }, {
            icon: <Newspaper fontSize="large" color="primary" />, title: "Media Inquiries", text: "Contact us for press and media-related requests.", button: "Press Inquiries"
          }].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: 200 }}>
                {item.icon}
                <Typography variant="h5" fontWeight="bold" mt={2}>{item.title}</Typography>
                <Typography variant="body1" mt={1}>{item.text}</Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>{item.button}</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Creative Footer Contact Info */}
        <Paper elevation={3} sx={{ width: '100%', py: 6, px: 4, textAlign: 'center', background: '#1E3A8A', color: '#fff', borderRadius: 3 }}>
          <Typography variant="h4" fontWeight="bold">Get in Touch</Typography>
          <Typography variant="h6" mt={2}>We are here to assist you with all your needs. Connect with us through the details below.</Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} mt={4} justifyContent="center">
            <Box>
              <Email fontSize="large" />
              <Typography variant="body1" mt={1}>support@resumebuilder.com</Typography>
            </Box>
            <Box>
              <Phone fontSize="large" />
              <Typography variant="body1" mt={1}>+91 9876543219</Typography>
            </Box>
            <Box>
              <LocationOn fontSize="large" />
              <Typography variant="body1" mt={1}>technopark, trivandrum, kerla</Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;