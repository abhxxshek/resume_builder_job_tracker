import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";

import { toast, ToastContainer } from "react-toastify";


const GradientButton = styled(Button)({
  background: "linear-gradient(90deg,#7f8fa6,rgb(234, 225, 222))",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "8px",
  transition: "0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(90deg,#353b48,rgb(234, 225, 222))",
    transform: "scale(1.05)",
  },
});



const images = ["/img3.jpg", "/img4.jpg", "/img5.jpg"];

const resumeTemplates = [
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
];
const rotatingImages = ["/img11.jpg", "/img12.jpg", "/img13.jpg", "/img14.jpg"];


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsRotating(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  function handleCreateResumeButton(){
    toast.error("Login required !",{autoClose:2000,position:'top-center'});
  }
 
  return (
    <>
   <ToastContainer/>
    <Box
      sx={{
        minHeight: "100vh",
        background: "white",
        color: "#000000",
        py: 8,
      }}
    >
      {/* Hero Section */}
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={6}>
            <img
              src={images[currentImageIndex]}
              alt="Rotating Image"
              style={{
                width: "450px",
                height: "450px",
                transition: "transform 1s ease-in-out",
                transform: isRotating ? "rotateY(270deg)" : "rotateY(0deg)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
  <Box>
    <Typography
      variant="h3"
      fontWeight="bold"
      sx={{
        background: "linear-gradient(to right,rgb(119, 127, 158) 20%, aqua 30%, lavender 80%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Craft Your Perfect Resume with Ease
    </Typography>
    <Typography variant="h6" sx={{ mb: 2, color: "gray" }}>
      Easily create a resume for any job using our best-in-class platform.
    </Typography>
    <Box display="flex" justifyContent={{ xs: "center", md: "flex-start" }}>
      <GradientButton variant="contained" onClick={()=>{handleCreateResumeButton()}} >Create My Resume Now</GradientButton>
    </Box>
  </Box>
</Grid>

        </Grid>
      </Container>

      {/* Resume Carousel */}
      <Container sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{
            mb: 4,
            background: "linear-gradient(to right,gray 40%, aqua 30%,gray 30%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Explore Different Resume Styles
        </Typography>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          infinite
          itemClass="carousel-item-padding-40-px"
          keyBoardControl
          minimumTouchDrag={80}
          responsive={{
            superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
            desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
            tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
        >
          {resumeTemplates.map((src, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
<img src={src} alt={`Resume ${index + 1}`} style={{ width: "300px", height: "400px", borderRadius: "8px" }} />
</Box>
          ))}
        </Carousel>
      </Container>

      {/* Resume Features Section */}
      <Container sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{
            mb: 4,
            background: "linear-gradient(to right,gray 40%, aqua 30%,gray 30%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Resume Features
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: "Paid & Free Resumes", description: "Choose from a variety of free and premium resume templates." },
            { title: "ATS-Friendly", description: "Our resumes are optimized for applicant tracking systems." },
            { title: "Job-Getting Designs", description: "Stand out with professionally designed resume templates." },
            { title: "Easy Customization", description: "Effortlessly edit your resume with our user-friendly interface." },
            { title: "Download in Multiple Formats", description: "Export your resume in PDF, DOCX, or other formats." },
            { title: "Real-Time Preview", description: "See live changes as you edit your resume." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height:"200px",
                  p: 4,
                  background: "linear-gradient(90deg,#dcdde1,rgb(122, 135, 153))",
                  color: "#fff",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" textAlign="center" >
                    {feature.title}
                  </Typography><br></br>
                  <Typography style={{fontWeight:"5%"}} textAlign="center">{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Resume Building Steps */}
<Container sx={{ mt: 8 }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    sx={{
      mb: 6,
      background: "linear-gradient(to right,gray 40%, aqua 30%,gray 30%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    How to Build Your Resume
  </Typography>

  {[
    { step: "1", title: "Create an Account & Login", description: "Sign up and log in to start building your resume.", img: "/img12.jpg" },
    { step: "2", title: "Profile registration", description: "Enter your personal details, work experience, and skills.", img: "/img13.jpg" },
    { step: "3", title: "Choose a Template", description: "Select from a variety of professional resume templates.", img: "/img7.jpg" },
    { step: "4", title: "Real time preview", description: "Real time preview of editting  your resume", img: "/img14.jpg" },
    { step: "5", title: "Download ", description: "Download your resume in PDF", img: "/img15.jpg" },
    { step: "6", title: "Find jobs", description: "Filter jobs according to your skills ", img: "/img16.jpg" },
    { step: "7", title: "Apply ", description: "Find your dream job and apply", img: "/img17.jpg" },
  ].map((item, index) => (
    <Grid 
    container 
    spacing={4} 
    alignItems="center" 
    key={index} 
    sx={{ mb: 6, transition: "0.3s", "&:hover": { transform: "scale(1.02)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" } }}
  >
      {/* Left: Text Content */}
      <Grid item xs={12} md={6} textAlign={index % 2 === 0 ? "left" : "right"}>
        <Typography variant="h3" fontWeight="bold" sx={{ color: "gray" }}>{item.step}.</Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#333" }}>{item.title}</Typography>
        <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>{item.description}</Typography>
      </Grid>

      {/* Right: Image */}
      <Grid item xs={12} md={6} textAlign="center">
      <img 
                src={item.img} 
                alt={item.title} 
                style={{ 
                  width: "100%", 
                  maxWidth: "400px", 
                  height: "auto", 
                  borderRadius: "8px", 
                  transition: "0.3s ease-in-out", 
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": { transform: "scale(1.05)", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)" }
                }}/>
      </Grid>
    </Grid>
  ))}
</Container>
<Box sx={{ minHeight: "100vh", background: "white", color: "#000000", py: 8 }}>
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 4, background: "linear-gradient(90deg,#dcdde1,rgb(122, 135, 153))", color: "#fff", boxShadow: 3 }}>
              <CardContent>
                <Grid container spacing={4} alignItems="center">
                  {/* Left Side: Text Content */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold">
                      Create a professional resume effortlessly
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Explore job opportunities that match your skills and experience, all in one place.
                      Take control of your career today!
                    </Typography>
                  </Grid>
                  {/* Right Side: Rotating Image */}
                  <Grid item xs={12} md={6} textAlign="center">
                    <img
                      src={rotatingImages[currentImageIndex]}
                      alt="Rotating Image"
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        transition: "opacity 0.5s ease-in-out",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    
    </Box>
    <Footer/>
    </>
  );
};

export default Home;