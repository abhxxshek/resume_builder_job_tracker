import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Grid, Avatar, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

const Template10 = ({ resumeData = {} }) => {
  const [profilePic, setProfilePic] = useState("");
  
  const updateProfilePicture = () => {
    const storedImage = localStorage.getItem("profilePicture");
    setProfilePic(storedImage || "");
  };

  useEffect(() => {
    updateProfilePicture();
    const handleStorageChange = () => updateProfilePicture();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profilePictureUpdated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profilePictureUpdated', handleStorageChange);
    };
  }, []);

  // Check if we need multiple pages
  const hasAchievements = resumeData.achievements?.length > 0;
  const hasProjects = resumeData.project?.length > 0;
  const needsSecondPage = hasAchievements || hasProjects;

  // Container styles
  const containerStyles = {
    width: "210mm",
    minHeight: "297mm",
    backgroundColor: "#FFFFFF",
    boxShadow: 3,
    fontFamily: "Arial, sans-serif",
    padding: "0",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    "@media print": {
      boxShadow: "none",
    }
  };

  // Function to render a single page
  const renderPage = (content, isFirstPage = false) => (
    <Container
      maxWidth="md"
      sx={{
        ...containerStyles,
        marginBottom: needsSecondPage ? "20px" : 0,
        "@media print": {
          marginBottom: 0,
          pageBreakAfter: isFirstPage && needsSecondPage ? "always" : "auto"
        }
      }}
    >
      {/* Semicircle at the Top */}
      {isFirstPage && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "200%",
            height: "200px",
            borderRadius: "0 0 50% 50%",
            background: "linear-gradient(145deg,rgb(236, 243, 234),rgb(202, 39, 72))",
            zIndex: 1,
          }}
        />
      )}

      {/* Main Content Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          padding: "20px",
          paddingTop: isFirstPage ? "120px" : "20px",
        }}
      >
        {content}
      </Box>
    </Container>
  );

  // Content sections
  const renderHeader = () => (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      {profilePic && (
        <Avatar
          src={profilePic}
          alt="Profile Picture"
          sx={{ 
            width: 100, 
            height: 100, 
            margin: "0 auto", 
            mb: 1,
            border: "3px solid rgb(202, 39, 72)"
          }}
        />
      )}
      <Typography variant="h4" fontWeight="bold">
        {resumeData?.firstName} {resumeData?.lastName}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: "1rem", color: "#666666" }}>
        {resumeData?.designation || "Your Designation"}
      </Typography>
    </Box>
  );

  const renderAbout = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
        About Me
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
        {resumeData?.careerObjective ||
          "A passionate and detail-oriented professional with a strong background in software development and project management."}
      </Typography>
    </Box>
  );

  const renderContact = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
        Contact
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <EmailIcon sx={{ color: "#6A82FB", fontSize: "1rem", mr: 1 }} />
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          {resumeData?.email || "your.email@example.com"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <PhoneIcon sx={{ color: "#6A82FB", fontSize: "1rem", mr: 1 }} />
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          {resumeData?.phoneNumber || "Your Phone Number"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <LocationOnIcon sx={{ color: "#6A82FB", fontSize: "1rem", mr: 1 }} />
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
        </Typography>
      </Box>
    </Box>
  );

  const renderEducation = () => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <SchoolIcon sx={{ color: "#6A82FB", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem" }}>
          Education
        </Typography>
      </Box>
      {resumeData.education?.length > 0 ? (
        resumeData.education.map((edu, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {edu.institution}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {edu.fieldOfStudy} ({edu.startYear} - {edu.endYear || "Present"})
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Education details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </Box>
  );

  const renderSkills = () => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <CodeIcon sx={{ color: "#6A82FB", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem" }}>
          Skills
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {resumeData.skills?.length > 0 ? (
          resumeData.skills.map((skill, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: "8px",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "0.9rem", color: "#333333" }}>
                  {skill.skill}
                </Typography>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
            Your skills will be displayed here.
          </Typography>
        )}
      </Grid>
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </Box>
  );

  const renderExperience = () => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <WorkIcon sx={{ color: "#6A82FB", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem" }}>
          Experience
        </Typography>
      </Box>
      {resumeData.experience?.length > 0 ? (
        resumeData.experience.map((exp, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {exp.jobTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {exp.company} | {exp.startDate} - {exp.endDate || "Present"}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your experience details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </Box>
  );

  const renderTraining = () => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <CastForEducationIcon sx={{ color: "#6A82FB", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem" }}>
          Training & Certifications
        </Typography>
      </Box>
      {resumeData.training?.length > 0 ? (
        resumeData.training.map((train, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {train.trainingTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {train.institute} | Completed: {train.completion}
            </Typography>
            {train.description && (
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                {train.description}
              </Typography>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your training details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </Box>
  );

  const renderProjects = () => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <AssignmentIcon sx={{ color: "#6A82FB", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem" }}>
          Projects
        </Typography>
      </Box>
      {resumeData.project?.length > 0 ? (
        resumeData.project.map((project, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {project.projectTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {project.description}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your project details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#E0E0E0", my: 2 }} />
    </Box>
  );

  const renderAchievements = () => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <StarIcon sx={{ color: "#6A82FB", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem" }}>
          Achievements
        </Typography>
      </Box>
      {resumeData.achievements?.length > 0 ? (
        resumeData.achievements.map((achievement, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {achievement.achievementTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
              {achievement.description}
            </Typography>
            {achievement.year && (
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
                {achievement.year}
              </Typography>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your achievements go here.
        </Typography>
      )}
    </Box>
  );

  return (
    <>
      {/* First Page */}
      {renderPage(
        <>
          {renderHeader()}
          {renderAbout()}
          {renderContact()}
          {renderEducation()}
          {renderSkills()}
          {renderExperience()}
          
        {renderTraining()}
          {renderProjects()}
          {renderAchievements()}
          
        </>,
        true
      )}
      
      {/* Second Page (only if needed) */}
      {needsSecondPage && renderPage(
        <>
        
        </>
      )}
    </>
  );
};

export default Template10;