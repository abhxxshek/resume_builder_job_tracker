import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  IconButton, 
  Divider, 
  Paper, 
  Avatar, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  LinearProgress,
  useTheme,
  useMediaQuery,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BuildIcon from '@mui/icons-material/Build';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Notif from './Notif';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([

  ]);

  const handleCreateResume = () => {
    navigate('/templates');
  };

  const handleEditResume = (id) => {
    const resume = resumes.find(r => r.id === id);
    navigate(`/layout2/${resume.template}`);
  };

  const handleDeleteResume = (id) => {
    setResumes(resumes.filter(resume => resume.id !== id));
  };

  const handleDownloadResume = (id) => {
    // Implement download functionality
    console.log(`Downloading resume ${id}`);
  };

  // Function to determine progress color
  const getProgressColor = (percentage) => {
    if (percentage < 40) return '#f44336'; // Red
    if (percentage < 70) return '#ff9800'; // Orange
    return '#4caf50'; // Green
  };

  return (
    <Box sx={{ 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      pt: 3,
      pb: 6
    }}>
      <Container maxWidth="lg">
        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: 2,
            background: 'linear-gradient(135deg, #2c3e50 0%, #4a6572 100%)',
            color: 'white'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: 2
          }}>
            <Box>
              <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                My Dashboard
              </Typography>
              <Typography variant="subtitle1">
                Manage your resumes and job applications in one place
              </Typography>
            </Box>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              onClick={handleCreateResume}
              sx={{ 
                backgroundColor: 'white',
                color: '#2c3e50',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                '&:hover': { 
                  backgroundColor: '#e0e0e0',
                }
              }}
            >
              Create New Resume
            </Button>
          </Box>
        </Paper>

        <Grid container spacing={4}>
          {/* Left column - Resume cards */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ 
              p: 3, 
              mb: 4, 
              borderRadius: 2,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 3 }}>
                My Resumes
              </Typography>
              
              {resumes.length === 0 ? (
                <Box sx={{ 
                  textAlign: 'center', 
                  py: 6,
                  backgroundColor: '#f9f9f9',
                  borderRadius: 2
                }}>
                  <DescriptionIcon sx={{ fontSize: 60, color: '#bdbdbd', mb: 2 }} />
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    You haven't created any resumes yet
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Get started by creating your first resume
                  </Typography>
                  <Button 
                    variant="contained" 
                    startIcon={<AddIcon />} 
                    onClick={handleCreateResume}
                    sx={{ 
                      backgroundColor: '#2c3e50',
                      '&:hover': { backgroundColor: '#1a252f' }
                    }}
                  >
                    Create Your First Resume
                  </Button>
                </Box>
              ) : (
                <Grid container spacing={3}>
                  {resumes.map((resume) => (
                    <Grid item xs={12} sm={6} key={resume.id}>
                      <Card 
                        sx={{ 
                          height: '100%', 
                          display: 'flex', 
                          flexDirection: 'column',
                          borderRadius: 2,
                          overflow: 'hidden',
                          border: '1px solid #e0e0e0',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                          }
                        }}
                      >
                        <Box sx={{ 
                          height: 8, 
                          backgroundColor: getProgressColor(resume.completionPercentage) 
                        }} />
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Typography variant="h6" component="h3" fontWeight="bold">
                              {resume.title}
                            </Typography>
                            <IconButton 
                              size="small" 
                              onClick={() => handleDeleteResume(resume.id)}
                              sx={{ 
                                color: 'text.secondary',
                                '&:hover': { color: '#f44336' }
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 2 }}>
                            <MoreTimeIcon sx={{ color: '#757575', fontSize: 16, mr: 0.5 }} />
                            <Typography variant="body2" color="text.secondary">
                              Updated: {resume.lastUpdated}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ mb: 2 }}>
                            {resume.tags.map(tag => (
                              <Chip 
                                key={tag}
                                label={tag}
                                size="small"
                                icon={<LocalOfferIcon fontSize="small" />}
                                sx={{ 
                                  mr: 1, 
                                  mb: 1,
                                  backgroundColor: '#e3f2fd',
                                  '& .MuiChip-icon': { color: '#1976d2' }
                                }}
                              />
                            ))}
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" fontWeight="medium" sx={{ mr: 1 }}>
                              Completion: {resume.completionPercentage}%
                            </Typography>
                            {resume.completionPercentage >= 80 && (
                              <StarIcon sx={{ color: '#ffc107', fontSize: 18 }} />
                            )}
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={resume.completionPercentage} 
                            sx={{ 
                              mb: 3, 
                              height: 8, 
                              borderRadius: 4,
                              backgroundColor: '#e0e0e0',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: getProgressColor(resume.completionPercentage)
                              }
                            }}
                          />
                          
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            mt: 'auto',
                            pt: 2,
                            borderTop: '1px solid #f0f0f0'
                          }}>
                            <Button 
                              variant="outlined" 
                              size="medium" 
                              startIcon={<EditIcon />}
                              onClick={() => handleEditResume(resume.id)}
                              sx={{
                                borderColor: '#2c3e50',
                                color: '#2c3e50',
                                '&:hover': {
                                  borderColor: '#1a252f',
                                  backgroundColor: 'rgba(44, 62, 80, 0.04)'
                                }
                              }}
                            >
                              Edit
                            </Button>
                            <Button 
                              variant="contained" 
                              size="medium" 
                              startIcon={<DownloadIcon />}
                              onClick={() => handleDownloadResume(resume.id)}
                              sx={{ 
                                backgroundColor: '#2c3e50',
                                '&:hover': { backgroundColor: '#1a252f' }
                              }}
                            >
                              Download
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>

       
          </Grid>

        
          <Grid item xs={12} md={4}>
            <Paper sx={{ 
              p: 3, 
              mb: 4, 
              borderRadius: 2,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                textAlign: 'center',
                mb: 2 
              }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: '#2c3e50',
                    mb: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <PersonIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6" fontWeight="bold">John Smith</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  john.smith@example.com
                </Typography>
                <Chip 
                  label="Free Account" 
                  size="small"
                  sx={{ 
                    backgroundColor: '#e3f2fd', 
                    color: '#1976d2',
                    fontWeight: 'medium',
                    mt: 1
                  }} 
                />
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: 'center' }}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        p: 1.5, 
                        backgroundColor: '#f5f5f5',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="h5" fontWeight="bold" color="primary">
                        {resumes.length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Resumes
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        p: 1.5, 
                        backgroundColor: '#f5f5f5',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="h5" fontWeight="bold" color="primary">
                        3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Downloads
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    borderColor: '#2c3e50',
                    color: '#2c3e50',
                    '&:hover': {
                      borderColor: '#1a252f',
                      backgroundColor: 'rgba(44, 62, 80, 0.04)'
                    }
                  }}
                >
                  Edit Profile
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/*  notif test */}
      <Notif/>
    </Box>
  );
};

export default Dashboard; 