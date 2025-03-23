import React, { useState } from "react";
import { Box, Grid, Button, Paper, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useParams } from "react-router-dom";
import FieldSelector from "./FieldSelector";
import FieldSidebar from "./FieldSidebar";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import { useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Template6 from "../Templates/Template6";
import Template7 from "../Templates/Template7";
import Template8 from "../Templates/Template8";
import Template9 from "../Templates/Template9";
import Template10 from "../Templates/Template10";
import axiosInstance from "../../axiosInterceptor";
import { jwtDecode } from 'jwt-decode';

// Navbar color scheme
const navbarColors = {
  primary: "#2c3e50", // Dark blue from navbar
  secondary: "#34495e", // Slightly lighter shade for hover states
  accent: "#3498db", // Accent blue for highlights
  text: "#ffffff", // White text
  background: "#f8fafc", // Light gray background
  border: "rgba(255, 255, 255, 0.1)" // Subtle border
};

const Layout2 = () => {
  const { template } = useParams();
  const [selectedField, setSelectedField] = useState("About");
  const [response, setResponse] = useState();
  const [resumeData, setResumeData] = useState({});
 
  const user = sessionStorage.getItem('userInfo');
  const decoded = jwtDecode(user);
  const user_id = decoded.id;
  
  // Fixed scale at 70%
  const scale = 0.7;

  useEffect(() => {
    axiosInstance.get('/profile/profile-details').then((res) => {  
       console.log(res.data);
      setResponse(res.data);
      setResumeData(prevState => ({
        ...prevState,
        userId:res.data.userId || user_id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        designation: res.data.designation,
        careerObjective: res.data.careerObjective,
        email: res.data.email,
        phoneNumber: res.data.phoneNumber,
        city: res.data.city,
        address: res.data.address,
        experiences: Array.isArray(res.data.experience) ? res.data.experience : [], 
        skills: Array.isArray(res.data.skills) ? res.data.skills : [], 
        education: Array.isArray(res.data.education) ? res.data.education : [], 
        achievements: Array.isArray(res.data.achievements) ? res.data.achievements : [], 
        trainings: Array.isArray(res.data.training) ? res.data.training : [], 
        projects: Array.isArray(res.data.project) ? res.data.project : [],
      })); 
    }).catch((error) => {
      alert('Failed to fetch Profile');
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axiosInstance.post('/profile/save-resume', resumeData)
      .then(response => {
        alert('Resume saved successfully!');
      })
      .catch(error => {
        alert('Failed to save resume');
      });
  };

  const handleDownload = () => {
    const input = document.getElementById('template-preview');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Use a temporary higher scale for the download to ensure quality
    const downloadElement = input.cloneNode(true);
    downloadElement.style.transform = 'scale(1)';
    downloadElement.style.transformOrigin = 'top left';
    downloadElement.style.position = 'absolute';
    downloadElement.style.top = '0';
    downloadElement.style.left = '0';
    downloadElement.style.visibility = 'hidden';
    document.body.appendChild(downloadElement);

    html2canvas(downloadElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (imgHeight > pageHeight) {
        const scaleFactor = pageHeight / imgHeight;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * scaleFactor, imgHeight * scaleFactor);
      } else {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      }

      pdf.save('resume.pdf');
      document.body.removeChild(downloadElement);
    });
  };

  return (
    <Box sx={{ backgroundColor: "black", minHeight: "calc(100vh - 64px)" }}>
      <Grid container spacing={0} sx={{ height: "calc(100vh - 64px)" }}>
        {/* Sidebar */}
        <Grid item xs={12} md={1.5} 
          sx={{ 
            borderRight: "1px solid rgba(0, 0, 0, 0.08)",
            backgroundColor: "#ffffff",
            height: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography 
            variant="subtitle2" 
            sx={{ 
              padding: "16px 16px 8px 16px", 
              color: navbarColors.primary, 
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              fontSize: "0.75rem"
            }}
          >
            Resume Sections
          </Typography>
          <FieldSidebar
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            navbarColors={navbarColors}
          />
        </Grid>

        {/* Form Fields */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: "100%",
            backgroundColor: "#ffffff",
            borderRight: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.03)",
            position: "relative",
            zIndex: 1,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#c1c1c1",
              borderRadius: "4px",
              "&:hover": {
                background: "#a1a1a1",
              },
            },
          }}
        >
          <Paper elevation={0} sx={{ 
            position: "sticky", 
            top: 0, 
            padding: "12px 20px", 
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)", 
            backgroundColor: "#ffffff",
            zIndex: 5
          }}>
            <Typography variant="h6" sx={{ color: navbarColors.primary, fontWeight: 600 }}>
              {selectedField}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {selectedField === "About" && "Enter your personal details below"}
              {selectedField === "Education" && "Add your educational background"}
              {selectedField === "Experience" && "Add your work experiences"}
              {selectedField === "Projects" && "Showcase your projects"}
              {selectedField === "Skills" && "Highlight your skills and proficiency levels"}
              {selectedField === "Achievements" && "Add your notable achievements"}
              {selectedField === "Trainings" && "List your training and certifications"}
            </Typography>
          </Paper>
          
          <Box sx={{ p: 2 }}>
            <FieldSelector
              selectedField={selectedField}
              resumeData={resumeData}
              handleChange={handleChange}
              navbarColors={navbarColors}
            />
          </Box>
        </Grid>

        {/* Template Preview */}
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            backgroundColor: navbarColors.background,
          }}
        >
          {/* Save and Download Buttons */}
          <Paper elevation={0} sx={{
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
            backgroundColor: navbarColors.primary,
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}>
            <Typography variant="h6" fontWeight={500} sx={{ color: navbarColors.text }}>
              Preview
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Button 
                variant="outlined" 
                onClick={handleSave}
                startIcon={<SaveIcon />}
                sx={{ 
                  textTransform: 'none', 
                  fontWeight: 500,
                  border: `1px solid ${navbarColors.text}`,
                  color: navbarColors.text,
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  }
                }}
              >
                Save
              </Button>
              <Button 
                variant="contained" 
                onClick={handleDownload}
                startIcon={<FileDownloadIcon />}
                sx={{ 
                  textTransform: 'none', 
                  fontWeight: 500,
                  border: `1px solid ${navbarColors.text}`,
                  color: navbarColors.text,
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  }
                }}
              >
                Download
              </Button>
            </Box>
          </Paper>

          {/* Template Container */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              height: "100%",
              backgroundColor: navbarColors.background,
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#c1c1c1",
                borderRadius: "4px",
                "&:hover": {
                  background: "#a1a1a1",
                },
              },
              position: "relative",
            }}
          >
            <Box
              sx={{
                minHeight: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "30px 20px",
              }}
            >
              <Box
                id="template-preview"
                sx={{
                  width: "830px", // Standard A4 width
                  height: "100%", // Standard A4 height
                  backgroundColor: "white",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                  transform: `scale(${scale})`,
                  transformOrigin: "top center",
                  margin: `0 ${(1-scale) * 415}px ${(1-scale) * 590}px ${(1-scale) * 415}px`,
                  borderRadius: "4px",
                }}
              >
                {template === "Template1" && <Template1 resumeData={resumeData} />}
                {template === "Template2" && <Template2 resumeData={resumeData} />}
                {template === "Template3" && <Template3 resumeData={resumeData} />}
                {template === "Template4" && <Template4 resumeData={resumeData} />}
                {template === "Template5" && <Template5 resumeData={resumeData} />}
                {template === "Template6" && <Template6 resumeData={resumeData} />}
                {template === "Template7" && <Template7 resumeData={resumeData} />}
                {template === "Template8" && <Template8 resumeData={resumeData} />}
                {template === "Template9" && <Template9 resumeData={resumeData} />}
                {template === "Template10" && <Template10 resumeData={resumeData} />}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout2;