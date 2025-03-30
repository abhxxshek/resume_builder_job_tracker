import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';

const teamMembers = [
  { name: 'Abhishek A', role: 'Project Manager', img: '/batman.jpg' },
  { name: 'Akhil Zacharia', role: 'Developer', img: '/super man.jpg' },
  { name: 'Aksa S Santhosh', role: 'QA Tester', img: '/girl.jpg' },
  { name: 'Gokul Santhosh', role: 'Content Developer', img: '/jokker.png' }

];

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: '#E3F2FD', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            About Resume Builder
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Helping job seekers create stunning resumes effortlessly.
          </Typography>
        </Box>
        
        {/* Mission Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: '#BBDEFB', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                At Resume Builder, we aim to simplify the resume creation process with user-friendly templates and intuitive tools. 
                Our goal is to empower job seekers by providing high-quality resumes that stand out in a competitive job market.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        
        {/* Features Section */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {[
            { title: 'Easy-to-Use Templates', text: 'Choose from a variety of modern, professional resume templates tailored for different industries.' },
            { title: 'Skill-Based Job Search', text: 'Find job opportunities that match your skills and experience, making your job hunt more effective.' },
            { title: 'Career Growth Resources', text: 'Access expert tips, resume guides, and industry insights to boost your career prospects.' }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center', borderRadius: 3, minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2">
                  {feature.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* Team Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Meet Our Team
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3, minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Avatar src={member.img} alt={member.name} sx={{ width: 80, height: 80, margin: '0 auto', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
