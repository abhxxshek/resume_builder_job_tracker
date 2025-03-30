import React, { useEffect, useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  Avatar,
  Stack,
 
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider
} from "@mui/material";
import { 
  Person as PersonIcon,
  Email as EmailIcon,
  Search as SearchIcon,
  Description as DescriptionIcon,
  Download as DownloadIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import axiosInstance from "../../axiosInterceptor";

const COLORS = ["#8c7ae6", "#192a56", "#40739e", "#7f8fa6"];

const AdminDashboard = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [jobSearches, setJobSearches] = useState(0);
  const [jobApplications, setJobApplications] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [openDetails, setOpenDetails] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const [data, setData] = useState([
    { name: "Users", value: 0 },
    { name: "Job Searches", value: 0 },
    { name: "Job Applications", value: 0 },
    { name: "Downloads", value: 5 },
  ]);

  useEffect(() => {
    axiosInstance.get('/admin/userstats')
      .then((res) => {
        setTotalUser(res.data.totalUser);
        setJobSearches(res.data.totalJobSearches);
        setJobApplications(res.data.totalApplications);
        setDownloads(res.data.totalResumeDownloads);
        setUserDetails(res.data.userStats)
      })
      .catch((error) => {
        alert('Failed to fetch details');
      });
  }, []);

  useEffect(() => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.name === "Users") return { ...item, value: totalUser };
        if (item.name === "Job Searches") return { ...item, value: jobSearches };
        if (item.name === "Job Applications") return { ...item, value: jobApplications };
        if (item.name === "Downloads") return { ...item, value: downloads };
        return item;
      })
    );
  }, [totalUser, jobSearches, jobApplications, downloads]);

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  return (
    <Box sx={{ minHeight: "100vh", background: "#F5F5F5", color: "#333", py: 6, px: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{
          mb: 4,
          background: "linear-gradient(to right, #4F4F4F 20%, aqua 60%, #A9A9A9 10%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Admin Dashboard
      </Typography>

      {/* Pie Chart Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
        <ResponsiveContainer width="50%" height={320}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Analytics Cards */}
      <Grid container spacing={4} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 3,
                background: "#ffffff",
                color: "#2C3A47",
                boxShadow: 4,
                borderRadius: 3,
                textAlign: "center",
                transition: "0.3s",
                height: "60%",
                "&:hover": { boxShadow: 8, transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.2rem" }}>
                  {item.name}
                </Typography>
                <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, color: "#45A29E" }}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* User Stats Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            fontSize: "1rem", 
            fontWeight: "bold", 
            px: 4, 
            py: 1.5,
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 8px rgba(0,0,0,0.15)'
            },
            transition: 'all 0.2s ease'
          }} 
          onClick={handleOpenDetails}
        >
          View User Stats
        </Button>
      </Box>

      {/* User Stats Dialog */}
      <Dialog
        open={openDetails}
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            background: '#ffffff'
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          background: 'linear-gradient(to right, #4F4F4F 20%, aqua 60%, #A9A9A9 10%)',
          color: 'white',
          py: 2,
          px: 3
        }}>
          <Typography variant="h6" fontWeight="bold">
            User Statistics Details
          </Typography>
          <IconButton onClick={handleCloseDetails} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {userDetails.map((user) => (
              <Grid item xs={12} md={6} key={user._id}>
                <Card sx={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
                  }
                }}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#8c7ae6' }}>
                        <PersonIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">{user.userName}</Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                          <EmailIcon fontSize="small" sx={{ mr: 1, opacity: 0.7 }} />
                          {user.userMail}
                        </Typography>
                      </Box>
                    </Stack>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Avatar sx={{ 
                            bgcolor: '#192a56', 
                            width: 32, 
                            height: 32 
                          }}>
                            <SearchIcon fontSize="small" />
                          </Avatar>
                          <Box>
                            <Typography variant="caption">Job Searches</Typography>
                            <Typography fontWeight="bold">{user.jobSearches}</Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Avatar sx={{ 
                            bgcolor: '#40739e', 
                            width: 32, 
                            height: 32 
                          }}>
                            <DescriptionIcon fontSize="small" />
                          </Avatar>
                          <Box>
                            <Typography variant="caption">Applications</Typography>
                            <Typography fontWeight="bold">{user.application}</Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Avatar sx={{ 
                            bgcolor: '#7f8fa6', 
                            width: 32, 
                            height: 32 
                          }}>
                            <DownloadIcon fontSize="small" />
                          </Avatar>
                          <Box>
                            <Typography variant="caption">Resume Downloads</Typography>
                            <Typography fontWeight="bold">{user.resumeDownloads}</Typography>
                          </Box>
                        </Stack>
                      </Grid>
                    </Grid>
                    

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;