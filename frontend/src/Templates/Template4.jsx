import React from "react";
import { Typography, Container, Box, Divider, Grid } from "@mui/material";

const Template4 = ({ resumeData }) => {
  return (
    <Container maxWidth="md" sx={{ width: "210mm", height: "297mm", padding: "20px", backgroundColor: "white", boxShadow: 3, fontFamily: "Arial, sans-serif", border: "10px solid #8B1C23" }}>
      <Grid container>
        {/* Header Section */}
        <Grid item xs={12} sx={{ textAlign: "center", paddingBottom: "10px" }}>
          <Typography variant="h4" fontWeight="bold" color="#8B1C23">
            {resumeData.firstName || "Jax"} {resumeData.lastName || "Branton"}
          </Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Contact Information */}
        <Grid item xs={12} sx={{ textAlign: "left", paddingBottom: "10px" }}>
          <Typography variant="h6" fontWeight="bold">CONTACT</Typography>
          <Typography variant="body2">📍 {resumeData.address || "Pasadena, CA 91101"}</Typography>
          <Typography variant="body2">📞 {resumeData.phoneNumber || "(909) 967-5698"}</Typography>
          <Typography variant="body2">✉ {resumeData.email || "example@email.com"}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Professional Summary */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">PROFESSIONAL SUMMARY</Typography>
          <Typography variant="body1">{resumeData.profile || "Your profile summary goes here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Work History */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">WORK HISTORY</Typography>
          <Typography variant="body1">{resumeData.experience || "Your work experience details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Projects */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">PROJECTS</Typography>
          <Typography variant="body1">{resumeData.projects || "Your projects details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Education */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">EDUCATION</Typography>
          <Typography variant="body1">{resumeData.education || "Your education details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Skills */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">SKILLS</Typography>
          <Typography variant="body1">{resumeData.skills || "Your key skills go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Achievements */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">ACHIEVEMENTS</Typography>
          <Typography variant="body1">{resumeData.achievements || "Your achievements details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Awards */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">AWARDS</Typography>
          <Typography variant="body1">{resumeData.awards || "Your awards details go here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>
        
        {/* Training */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">TRAINING</Typography>
          <Typography variant="body1">{resumeData.training || "Your training details go here."}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Template4;