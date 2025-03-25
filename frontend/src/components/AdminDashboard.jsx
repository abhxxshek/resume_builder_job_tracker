import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button , List, ListItem, ListItemText} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import axiosInstance from "../../axiosInterceptor";

const COLORS = ["#8c7ae6", "#192a56", "#40739e", "#7f8fa6"];

const AdminDashboard = () => {

  const [totalUser, setTotalUser] = useState(0);
  const [jobSearches, setJobSearches] = useState(0);
  const [jobApplications, setJobApplications] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
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
          // console.log(res.data);
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
          if (item.name === "Users") {
            return { ...item, value: totalUser };
          }
          if (item.name === "Job Searches") {
            return { ...item, value: jobSearches };
          }
          if (item.name === "Job Applications") {
            return { ...item, value: jobApplications };
          }
          if (item.name === "Downloads") {
            return { ...item, value: downloads };
          }
          return item; 
        })
      );
    }, [totalUser, jobSearches, jobApplications, downloads]);

    const handleToggleDetails = () => {
      setShowDetails(!showDetails);
  };

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
                {/* {item.name === "Downloads" && (
                  <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 4,  paddingBottom:"16%"}}>
                    <Typography variant="body1" fontWeight="bold" sx={{ color: "#4B6587" }}>
                      Premium: 5
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" sx={{ color: "#4B6587" }}>
                      Free: 5
                    </Typography>
                  </Box>
                )} */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
    <Button 
        variant="contained" 
        color="primary" 
        sx={{ fontSize: "1rem", fontWeight: "bold", px: 4, py: 1.5 }} 
        onClick={handleToggleDetails}
    >
        View User Stats
    </Button>

    {showDetails && (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt: 2 }}>
            {userDetails.map((user) => (
                <ListItem key={user._id} sx={{ padding: '10px', borderBottom: 'none' }}>
                    <ListItemText 
                        primary={<Typography variant="h6" component="div">{user.userName}</Typography>} 
                        secondary={
                          <>
                          <Typography variant="body2" component="span">Email: {user.userMail}</Typography>
                          <Typography variant="body2" component="span"> | Job Searches: {user.jobSearches}</Typography>
                          <Typography variant="body2" component="span"> | Applications: {user.application}</Typography>
                          <Typography variant="body2" component="span"> | Resume Downloads: {user.resumeDownloads}</Typography>
                          <Typography variant="body2" component="span"> | Templates: {user.templates.join(', ')}</Typography>
                      </>
                        } 
                    />
                </ListItem>
            ))}
        </List>
    )}
</Box>
    </Box>
  );
};

export default AdminDashboard;
