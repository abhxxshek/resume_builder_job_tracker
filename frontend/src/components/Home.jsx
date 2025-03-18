import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const GradientButton = styled(Button)({
  background: "linear-gradient(90deg, #FF8C00, #FF6347)",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "8px",
  transition: "0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(90deg, #FF6347, #FF4500)",
    transform: "scale(1.05)",
  },
});

const images = ["/public/img3.jpg", "/public/img4.jpg", "/public/img5.jpg"];

const resumeTemplates = [
  "/public/img3.jpg",
  "/public/img4.jpg",
  "/public/img5.jpg",
  "/public/img6.jpg",
  "/public/img7.jpg",
  "/public/img8.jpg",
  "/public/img9.jpg",
  "/public/img10.jpg",
  "/public/img11.jpg",
];

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

  return (
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
                transform: isRotating ? "rotateY(360deg)" : "rotateY(0deg)",
              }}
            />
          </Grid>
          <Grid item xs={6} textAlign="left">
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                background: "linear-gradient(to right, grey 20%, orange 30%, violet 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Craft Your Perfect Resume with Ease
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, color: "gray" }}>
              Easily create a resume for any job using our best-in-class platform.
            </Typography>
            <GradientButton variant="contained">Create My Resume Now</GradientButton>
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
            background: "linear-gradient(to right, orange, gray)",
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
            background: "linear-gradient(to right, #333, orange, gray)",
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
                  background: "linear-gradient(120deg,rgba(237, 130, 30, 0.9), violet)",
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
      background: "linear-gradient(to right, #ff7f50, #ff4500)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    How to Build Your Resume
  </Typography>

  {[
    { step: "1", title: "Create an Account & Login", description: "Sign up and log in to start building your resume.", img: "/public/img12.jpg" },
    { step: "2", title: "Profile registration", description: "Enter your personal details, work experience, and skills.", img: "/public/img13.jpg" },
    { step: "3", title: "Choose a Template", description: "Select from a variety of professional resume templates.", img: "/public/img7.jpg" },
    { step: "4", title: "Real time preview", description: "Real time preview of editting  your resume", img: "/public/img14.jpg" },
    { step: "5", title: "Download ", description: "Download your resume in PDF", img: "/public/img15.jpg" },
    { step: "6", title: "Find jobs", description: "Filter jobs according to your skills ", img: "/public/img16.jpg" },
    { step: "7", title: "Apply ", description: "Find your dream job and apply", img: "/public/img17.jpg" },
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
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#ff6347" }}>{item.step}.</Typography>
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

    </Box>
  );
};

export default Home;
