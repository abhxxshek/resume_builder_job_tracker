import React, { useState,useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent,CardMedia, Button,  Divider, Paper, Avatar, useTheme,useMediaQuery, IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import Notif from './Notif';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../../axiosInterceptor';
import Popup from 'reactjs-popup';

const Dashboard = ({ resumeData = {}}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");
 const [resumes, setResumes] = useState([]);
 const [open, setOpen] = useState(false);
const [selectedResume, setSelectedResume] = useState('');
const [userStats, setUserStats] = useState('');
const [downloads, setDownloads] = useState(0);

  const token= sessionStorage.getItem('userInfo');
  const decodedToken=jwtDecode(token);
  
  useEffect(() => {
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) setProfilePic(storedImage);

    const fetchJobs = async () => {
        try {
            const response = await axiosInstance.get("/user/saved-resumes");
            const resumesData = Array.isArray(response.data.resumes) ? response.data.resumes : [];
            setResumes(resumesData);
            // console.log(resumesData); 
        } catch (error) {
            console.log(error);
        }
    };
    const mystats = async () => {
      try {
          const response = await axiosInstance.get("/user/my-stats");
          const resumesData = (response.data) ? response.data: {};
          setUserStats(resumesData);
          setDownloads(resumesData.resumeDownloads)
          //  console.log(resumesData); 
      } catch (error) {
          console.log(error);
      }
  };

    fetchJobs();
    mystats();
}, []);

const handleCardClick = (resume) => {
    setSelectedResume(resume);
    setOpen(true);
};

const resumePreview = (resume) => {
  window.open(resume, "_blank");
};

  const handleCreateResume = () => {
    navigate('/templates');
  };

  const handleEditResume = (id) => {
    const resume = resumes.find(r => r.id === id);
    navigate(`/layout2/${resume.template}`);
  };

  const resumeDelete = async (resume) => {
    try {
      const encodedResume = encodeURIComponent(resume);
      await axiosInstance.delete(`/user/delete-resume/${encodedResume}`);      
        setResumes(resumes.filter(r => r !== resume)); 
    } catch (error) {
        console.error("Failed to delete resume:", error);
    }
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
                <Grid container spacing={2}>
                
                  {resumes.map((resume, index) => (
                <Grid item xs={12} sm={6} key={index}>
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
                        onClick={() => handleCardClick(resume)}
                    >
                        <CardMedia
                            component="img"
                            image={resume}
                            alt="Resume"
                            sx={{ height: 140 }}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {resume}
                            </Typography>
                            <Button onClick={(e) => { e.stopPropagation(); resumePreview(resume); }}>
                                View
                            </Button>
                            <IconButton onClick={(e) => { e.stopPropagation(); resumeDelete(resume); }}>
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                </Grid>
            ))}

            <Popup open={open} onClose={() => setOpen(false)} modal>
                <div style={{ 
                    width: '80%', 
                    maxWidth: '600px', 
                    maxHeight: '80vh', 
                    overflowY: 'auto', 
                    margin: 'auto', 
                    padding: '20px', 
                    backgroundColor: 'white', 
                    borderRadius: '8px' 
                }}>
                    <img 
                        src={selectedResume} 
                        alt="Resume" 
                        style={{ 
                            maxWidth: '100%', 
                            maxHeight: '100%', 
                            objectFit: 'contain' 
                        }} 
                    />
                </div>
            </Popup>

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
  src={profilePic} 
  sx={{ width: 150, height: 150, mb: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
>
  {!profilePic && <PersonIcon fontSize="large" />}
</Avatar>



                <Typography variant="h6" fontWeight="bold">{decodedToken.name}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {decodedToken.email}
                </Typography>
               
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
                        {(downloads)?downloads:0}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Downloads
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
               
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
       {/* notif test */}
      {/* <Notif/> */}
    </Box>
  );
};

export default Dashboard; 






