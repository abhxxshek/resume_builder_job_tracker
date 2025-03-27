import React, { useEffect, useState, useRef } from "react";
import { Typography, Container, Box, Grid, Avatar, Divider, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PublicIcon from "@mui/icons-material/Public";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

const Template8 = ({ resumeData = {} }) => {
  const [profilePic, setProfilePic] = useState("");
  const [needsSecondPage, setNeedsSecondPage] = useState(false);
  const firstPageRef = useRef(null);

  // Function to update profile picture from localStorage
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

  // Check if content overflows after render
  useEffect(() => {
    const checkOverflow = () => {
      if (firstPageRef.current) {
        const contentHeight = firstPageRef.current.clientHeight;
        // Approximate A4 page content height (297mm - header - margins)
        const singlePageMaxHeight = 1100; // Adjust based on your actual design
        setNeedsSecondPage(contentHeight > singlePageMaxHeight);
      }
    };

    // Check after initial render and after a brief timeout
    checkOverflow();
    const timeoutId = setTimeout(checkOverflow, 500);
    return () => clearTimeout(timeoutId);
  }, [resumeData]);

  // Function to render a single page
  const renderPage = (content, isFirstPage = false) => (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm",
        minHeight: "297mm",
        backgroundColor: "#F5F5F5",
        boxShadow: 3,
        fontFamily: "Arial, sans-serif",
        padding: "0",
        borderRadius: "8px",
        overflow: "hidden",
        marginBottom: "20px",
        "@media print": {
          boxShadow: "none",
          marginBottom: 0,
          pageBreakAfter: needsSecondPage ? "always" : "auto",
        }
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          width: "60%",
          backgroundColor: "#8B7355",
          padding: "15px",
          textAlign: "center",
          color: "white",
        }}
      ></Box>

      {/* Main Content Section */}
      <Box sx={{ display: "flex", minHeight: "calc(297mm - 64px)" }}>
        {/* Left Section (Content) */}
        <Box
          sx={{
            width: isFirstPage ? "65%" : "100%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
          ref={isFirstPage ? firstPageRef : null}
        >
          {content}
        </Box>

        {/* Right Section (Profile Picture and Details) - Only on first page */}
        {isFirstPage && (
          <Box
            sx={{
              width: "35%",
              backgroundColor: "#8B7355",
              padding: "20px",
              color: "white",
              textAlign: "center",
              "@media print": {
                height: "calc(297mm - 64px)",
              }
            }}
          >
            {/* Profile Picture */}
            {profilePic && (
              <Avatar
                src={profilePic}
                alt="Profile Picture"
                sx={{ width: 120, height: 120, margin: "0 auto", mb: 2, border: "3px solid #E0D7C6" }}
              />
            )}

            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", mb: 1 }}>
              {resumeData?.firstName || "Your"} {resumeData?.lastName || "Name"}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
              {resumeData?.designation || "Your Designation"}
            </Typography>

            <Divider sx={{ backgroundColor: "#E0D7C6", my: 2 }} />

            <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
              {resumeData?.careerObjective || "Brief summary about yourself."}
            </Typography>

            <Divider sx={{ backgroundColor: "#E0D7C6", my: 2 }} />

            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", mb: 1 }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ color: "#E0D7C6", fontSize: "1rem", mr: 1 }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
                {resumeData?.email || "your.email@example.com"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ color: "#E0D7C6", fontSize: "1rem", mr: 1 }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
                {resumeData?.phoneNumber || "Your Phone Number"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ color: "#E0D7C6", fontSize: "1rem", mr: 1 }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#E0D7C6" }}>
                {resumeData?.city || "City"}, {resumeData?.address || "Your Address"}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );

  // Content sections
  const renderEducation = () => (
    <Box mb={3}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <SchoolIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
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
              {edu.fieldOfStudy} {edu.degree && `- ${edu.degree}`} ({edu.startYear} - {edu.endYear || "Present"})
            </Typography>
            {edu.description && (
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666", mt: 1 }}>
                {edu.description}
              </Typography>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Education details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} />
    </Box>
  );

  const renderSkills = () => (
    <Box mb={3}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <CodeIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
          Skills
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {resumeData.skills?.length > 0 ? (
          resumeData.skills.map((skill, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "#E0D7C6",
                  padding: "8px",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "0.9rem", color: "#333333" }}>
                  {skill.skill} {skill.level && `(${skill.level})`}
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
      <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} />
    </Box>
  );

  const renderExperience = () => (
    <Box mb={3}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <WorkIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
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
            {exp.description && (
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666", mt: 1 }}>
                {exp.description}
              </Typography>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666" }}>
          Your experience details go here.
        </Typography>
      )}
      <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} />
    </Box>
  );

  const renderTraining = () => (
    <Box mb={3}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <CastForEducationIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
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
              {train.institute} | {train.completion}
            </Typography>
            {train.description && (
              <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#666666", mt: 1 }}>
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
      <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} />
    </Box>
  );

  const renderProjects = () => (
    <Box mb={3}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <AssignmentIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
          Projects
        </Typography>
      </Box>
      {resumeData.project?.length > 0 ? (
        resumeData.project.map((project, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem", color: "#333333" }}>
              {project.projectTitle}
            </Typography>
            {project.projectLink && (
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PublicIcon sx={{ color: "#8B7355", fontSize: "1rem", mr: 1 }} />
                <Link href={project.projectLink} target="_blank" rel="noopener" sx={{ fontSize: "0.9rem" }}>
                  {project.projectLink}
                </Link>
              </Box>
            )}
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
      <Divider sx={{ backgroundColor: "#8B7355", my: 2 }} />
    </Box>
  );

  const renderAchievements = () => (
    <Box mb={3}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <StarIcon sx={{ color: "#8B7355", fontSize: "1.5rem", mr: 1 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.4rem", color: "#8B7355" }}>
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

  // Determine content distribution
  const firstPageContent = (
    <>
      {renderEducation()}
      {renderSkills()}
      {renderExperience()}
      {renderTraining()}
      {/* Only include projects if there's no need for second page */}
      {!needsSecondPage && renderProjects()}
      {!needsSecondPage && renderAchievements()}
    </>
  );

  const secondPageContent = (
    <>
      {needsSecondPage && renderProjects()}
      {needsSecondPage && renderAchievements()}
    </>
  );

  return (
    <div>
      {/* First Page (always rendered) */}
      {renderPage(firstPageContent, true)}
      
      {/* Second Page (only if needed) */}
      {needsSecondPage && (
        <Container
          maxWidth="md"
          sx={{
            width: "210mm",
            minHeight: "297mm",
            backgroundColor: "#F5F5F5",
            boxShadow: 3,
            fontFamily: "Arial, sans-serif",
            padding: "0",
            borderRadius: "8px",
            overflow: "hidden",
            "@media print": {
              boxShadow: "none",
              pageBreakBefore: "always",
            }
          }}
        >
          {/* Header Section for second page */}
          <Box
            sx={{
              width: "60%",
              backgroundColor: "#8B7355",
              padding: "15px",
              textAlign: "center",
              color: "white",
            }}
          ></Box>

          {/* Main Content Section */}
          <Box sx={{ display: "flex", minHeight: "calc(297mm - 64px)" }}>
            <Box sx={{ width: "100%", padding: "20px" }}>
              {secondPageContent}
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default Template8;