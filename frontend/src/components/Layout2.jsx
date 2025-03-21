import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
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

const Layout2 = () => {
  const { template } = useParams();
  const [selectedField, setSelectedField] = useState("About");
  const [response, setResponse] = useState();
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/profile/profile-details').then((res) => {  
       console.log(res.data);
      setResponse(res.data);
      setResumeData(prevState => ({
        ...prevState,
        firstName: res.data.personalDetails.firstName,
        lastName: res.data.personalDetails.lastName,
        designation: res.data.personalDetails.designation,
        careerObjective: res.data.personalDetails.careerObjective,
        email: res.data.personalDetails.email,
        phoneNumber: res.data.personalDetails.phoneNumber,
        city: res.data.personalDetails.city,
        address: res.data.personalDetails.address,
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
    axios.post('http://localhost:3000/save-resume', resumeData)
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

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pageWidth; // Width of the PDF page
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height to maintain aspect ratio

      // Scale the content to fit within the A4 page
      if (imgHeight > pageHeight) {
        const scaleFactor = pageHeight / imgHeight; // Calculate scaling factor
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * scaleFactor, imgHeight * scaleFactor);
      } else {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      }

      pdf.save('resume.pdf');
    });
  };

  return (
    <Box>
      <Grid container rowSpacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={1.5} sx={{ borderRight: "1px solid lightgrey" }}>
          <FieldSidebar
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        </Grid>

        {/* Form Fields */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            borderRight: "1px solid lightgrey",
            maxHeight: "730px",
            overflowY: "auto",
            scrollbarWidth: "none", 
              "&::-webkit-scrollbar": {
                display: "none", 
              },
          }}
        >
          <FieldSelector
            selectedField={selectedField}
            resumeData={resumeData}
            handleChange={handleChange}
          />
        </Grid>
        

        {/* Template Preview */}
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            // height: "93vh",
            maxHeight: "730px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            rowGap: 2,  
          }}
        >
           {/* Save and Download Buttons */}
         <Box
                sx={{
                  position: 'sticky',
                  top: 10,
                  right: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  gap: 1,
                }}
              >
                <Button variant="contained" sx={{position:"sticky"}} onClick={handleSave}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleDownload}>
                  Download
                </Button>
              </Box>

          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              scrollbarWidth: "none", 
              "&::-webkit-scrollbar": {
                display: "none", 
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                position: 'relative', // Added for button positioning
              }}
            >
             
              {/* Template Preview */}
              <Box id="template-preview">
                {template === "Template1" && (
                  <Template1 resumeData={resumeData} />
                )}
                {template === "Template2" && (
                  <Template2 resumeData={resumeData} />
                )}
                {template === "Template3" && (
                  <Template3 resumeData={resumeData} />
                )}
                {template === "Template4" && (
                  <Template4 resumeData={resumeData} />
                )}
                {template === "Template5" && (
                  <Template5 resumeData={resumeData} />
                )}
                {template === "Template6" && (
                  <Template6 resumeData={resumeData} />
                  
                )}
                {template === "Template7" && (
                  <Template7 resumeData={resumeData} />
                  
                )}
                {template === "Template8" && (
                  <Template8 resumeData={resumeData} />
                  
                )}
                {template === "Template9" && (
                  <Template9 resumeData={resumeData} />
                  
                )}
                {template === "Template10" && (
                  <Template10 resumeData={resumeData} />
                  
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout2;