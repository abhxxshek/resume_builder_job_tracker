import React from "react";
import { Typography, Container, Box, Divider, Grid, Avatar } from "@mui/material";

const Template5 = ({ resumeData }) => {
  return (
    <Container maxWidth="md" sx={{ width: "210mm", height: "297mm", padding: "20px", backgroundColor: "white", boxShadow: 3, fontFamily: "Arial, sans-serif", border: "5px solid #8B8B8B", backgroundImage: "url('/path-to-checkered-pattern.png')", backgroundSize: "contain" }}>
      <Grid container>
        {/* Header Section */}
        <Grid item xs={12} sx={{ textAlign: "center", paddingBottom: "10px" }}>
          <Avatar src={resumeData.profileImage || "/default-profile.png"} sx={{ width: 100, height: 100, margin: "0 auto" }} />
          <Typography variant="h4" fontWeight="bold" color="#1F3C88">
            {resumeData.firstName || "Kit"} {resumeData.lastName || "Maxwell"}
          </Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        {/* Contact Information */}
        <Grid item xs={12} sx={{ textAlign: "center", paddingBottom: "10px" }}>
          <Typography variant="body2">{resumeData.address || "San Antonio, TX 87213"} | {resumeData.phoneNumber || "(123) 966-1415"} | {resumeData.email || "example@email.com"}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Profile</Typography>
          <Typography variant="body1">{resumeData.profile || "Your training details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>

        
        {/* Education */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Education</Typography>
          <Typography variant="body1">{resumeData.education || "Your education details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        {/* Experience */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Experience</Typography>
          <Typography variant="body1">{resumeData.experience || "Your experience details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        {/* Projects */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Projects</Typography>
          <Typography variant="body1">{resumeData.projects || "Your project details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        {/* Skills */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Skills</Typography>
          <Typography variant="body1">{resumeData.skills || "Your skills go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        {/* Achievements */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Achievements</Typography>
          <Typography variant="body1">{resumeData.achievements || "Your achievements go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        {/* Awards */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Awards</Typography>
          <Typography variant="body1">{resumeData.awards || "Your awards go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#1F3C88" }} />
        </Grid>
        
        {/* Training */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#1F3C88">Training</Typography>
          <Typography variant="body1">{resumeData.training || "Your training details go here."}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Template5;
