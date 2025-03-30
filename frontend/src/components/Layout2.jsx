import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Button, Paper, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useParams } from "react-router-dom";
import FieldSelector from "./FieldSelector";
import FieldSidebar from "./FieldSidebar";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";
import Template7 from "../Templates/Template7";
import Template8 from "../Templates/Template8";
import Template9 from "../Templates/Template9";
import Template10 from "../Templates/Template10";
import Template13 from "../Templates/Template13";
import axiosInstance from "../../axiosInterceptor";
import { jwtDecode } from "jwt-decode";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast, ToastContainer } from "react-toastify";

// Navbar color scheme
const navbarColors = {
  primary: "#2c3e50",
  secondary: "#34495e",
  accent: "#3498db",
  text: "#ffffff",
  background: "#f8fafc",
  border: "rgba(255, 255, 255, 0.1)",
};

const Layout2 = () => {
  const { template } = useParams();
  const [selectedField, setSelectedField] = useState("About");
  const [resumeData, setResumeData] = useState({});
  const resumeRef = useRef(); // Reference for capturing resume
  const user = sessionStorage.getItem("userInfo");
  const decoded = jwtDecode(user);
  const user_id = decoded.id;

  useEffect(() => {
    axiosInstance
      .get("/profile/profile-details")
      .then((res) => {
        setResumeData({
          userId: res.data.userId || user_id,
          profilePic:'',
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          designation: res.data.designation,
          careerObjective: res.data.careerObjective,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          city: res.data.city,
          address: res.data.address,
          experience: Array.isArray(res.data.experience) ? res.data.experience : [],
          skills: Array.isArray(res.data.skills) ? res.data.skills : [],
          education: Array.isArray(res.data.education) ? res.data.education : [],
          achievements: Array.isArray(res.data.achievements) ? res.data.achievements : [],
          training: Array.isArray(res.data.training) ? res.data.training : [],
          project: Array.isArray(res.data.project) ? res.data.project : [],
        });
      })
      .catch(() => {
        toast.error("Failed to fetch Profile", { autoClose: 2000 });
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loadProfilePicture = () => {
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) {
      handleChange({ target: { name: 'profilePic', value: storedImage } });
    }
  };

  const handleSave = async () => {
    loadProfilePicture();
    await new Promise((resolve) => setTimeout(resolve, 0));
    axiosInstance
      .post("/profile/save-resume", resumeData)
      .then(() => toast.success("Resume data saved successfully!", { autoClose: 2000 }))
      .catch(() => toast.error("Failed to save resume data", { autoClose: 2000 }));
  };

const saveImg = async () => {
  const resumeElement = resumeRef.current;
  html2canvas(resumeElement).then((canvas) => {
    canvas.toBlob(async (blob) => {
        if (blob) {
            const formData = new FormData();
            formData.append('file', blob, 'resume.jpg');
            formData.append('tags', decoded.id);
            formData.append('upload_preset', import.meta.env.VITE_Preset);
            const uploadUrl = 'https://api.cloudinary.com/v1_1/dqpldrhqs/image/upload';
            try {
                const response = await fetch(uploadUrl, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
           
                axiosInstance.post("/user/resume-generated", {secure_url: data.secure_url});
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }, 'image/jpeg');
});
}

  const handleDownload = async () => {
    toast.success("Downloading resume...", { autoClose: 500,position: "top-center" });
    await axiosInstance.get("/user/downloads");
    const resumeElement = resumeRef.current;
    saveImg();
    html2canvas(resumeElement, { scale: 2, useCORS: true }).then((canvas) => {
      const imgWidth = 190; // A4 width minus margins (210mm - 2*10mm)
      const pageHeight = 277; // A4 height minus margins (297mm - 2*10mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      const pdf = new jsPDF("p", "mm", "a4");
  
      let heightLeft = imgHeight;
      let yPosition = 0;
      let pageCount = 0;
  
      while (heightLeft > 0) {
        const canvasSection = document.createElement("canvas");
        canvasSection.width = canvas.width;
        canvasSection.height = Math.min(pageHeight * (canvas.width / imgWidth), canvas.height - yPosition);
        const ctx = canvasSection.getContext("2d");
  
        ctx.drawImage(canvas, 0, yPosition, canvas.width, canvasSection.height, 0, 0, canvas.width, canvasSection.height);
  
        const sectionImgData = canvasSection.toDataURL("image/png");
  
        if (pageCount > 0) pdf.addPage();
        pdf.addImage(sectionImgData, "PNG", 10, 10, imgWidth, (canvasSection.height * imgWidth) / canvas.width);
  
        heightLeft -= pageHeight;
        yPosition += pageHeight * (canvas.width / imgWidth);
        pageCount++;
      }
  
      pdf.save("resume.pdf");
      toast.success("Resume downloaded successfully!", { autoClose: 2000,position: "top-center" });
    });
  };
  

  



  return (
    <Box sx={{ backgroundColor: "black", minHeight: "calc(100vh - 64px)" }}>
      <ToastContainer />
      <Grid container spacing={0} sx={{ height: "calc(100vh - 64px)" }}>
        {/* Sidebar */}
        <Grid
          item
          xs={12}
          md={1.5}
          sx={{
            borderRight: "1px solid rgba(0, 0, 0, 0.08)",
            backgroundColor: "#ffffff",
            height: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ padding: "16px", color: navbarColors.primary, fontWeight: 600 }}>
            Resume Sections
          </Typography>
          <FieldSidebar selectedField={selectedField} setSelectedField={setSelectedField} navbarColors={navbarColors} />
        </Grid>

        {/* Form Fields */}
        <Grid item xs={12} md={5} sx={{ height: "100%", backgroundColor: "#ffffff", borderRight: "1px solid rgba(0, 0, 0, 0.08)" }}>
          <Box sx={{ p: 2 }}>
            <FieldSelector selectedField={selectedField} resumeData={resumeData} handleChange={handleChange} navbarColors={navbarColors} />
          </Box>
        </Grid>

        {/* Resume Preview */}
        <Grid item xs={12} md={5.5} sx={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: navbarColors.background }}>
          <Paper elevation={0} sx={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", backgroundColor: navbarColors.primary }}>
            <Typography variant="h6" sx={{ color: navbarColors.text }}>Preview</Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Button variant="outlined" onClick={handleSave} startIcon={<SaveIcon />} sx={{ color: navbarColors.text }}>
                Save
              </Button>
              <Button variant="contained" onClick={handleDownload} startIcon={<FileDownloadIcon />} sx={{ color: navbarColors.text }}>
                Download
              </Button>
            </Box>
          </Paper>

          {/* Resume Container with useRef */}
          <Box sx={{ flex: 1, overflowY: "auto", padding: "30px 20px" }}>
            <Box ref={resumeRef} sx={{ width: "830px", backgroundColor: "white", boxShadow: "0 3px 10px rgba(0,0,0,0.15)" }}>
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
              {template === "Template13" && <Template13 resumeData={resumeData} />}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout2;
