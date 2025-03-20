import React from "react";
import { Typography, Container, Box, Divider, Grid } from "@mui/material";

const Template4 = ({ resumeData = {} }) => {
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
          <Typography variant="body1">{resumeData.careerObjective || "Your profile summary goes here."}</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>

        {/* Work History */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">WORK HISTORY</Typography>
          {resumeData.experiences && resumeData.experiences.length > 0 ? (
            resumeData.experiences.map((experience, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6">{experience.jobTitle}</Typography>
                <Typography variant="body2">at {experience.company}, {experience.city}</Typography>
                <Typography variant="body2">From {experience.startDate} to {experience.endDate}</Typography>
                <Typography variant="body2">{experience.description}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Your work experience details go here.</Typography>
          )}
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>

        {/* Projects */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">PROJECTS</Typography>
          {resumeData.projects && resumeData.projects.length > 0 ? (
            resumeData.projects.map((project, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6">{project.projectTitle}</Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Typography variant="body2">
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    {project.projectLink}
                  </a>
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Your projects details go here.</Typography>
          )}
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>

        {/* Education */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">EDUCATION</Typography>
          {resumeData.education && resumeData.education.length > 0 ? (
            resumeData.education.map((edu, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6">{edu.institution}</Typography>
                <Typography variant="subtitle1">{edu.fieldOfStudy}</Typography>
                <Typography variant="body2">{`${edu.startYear} to ${edu.endYear}`}</Typography>
                <Typography variant="body2">{edu.percentage}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Your education details go here.</Typography>
          )}
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>

        {/* Skills */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">SKILLS</Typography>
          {resumeData.skills && resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6">{skill.skill}</Typography>
                <Typography variant="body2">Level: {skill.proficiency}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Your key skills go here.</Typography>
          )}
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>

        {/* Achievements */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">ACHIEVEMENTS</Typography>
          {resumeData.achievements && resumeData.achievements.length > 0 ? (
            resumeData.achievements.map((achievement, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6">{achievement.achievementTitle}</Typography>
                <Typography variant="body2">{achievement.description}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Your achievements details go here.</Typography>
          )}
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid>

        {/* Awards */}
        {/* <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">AWARDS</Typography>
          {resumeData.awardsList && resumeData.awardsList.length > 0 ? (
            resumeData.awardsList.map((award, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6">{award.award}</Typography>
                <Typography variant="subtitle1">{award.organization}</Typography>
                <Typography variant="body2">{`${award.city1}, ${award.recieveddate}`}</Typography>
                <Typography variant="body2">{award.description3}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Your awards details go here.</Typography>
          )}
          <Divider sx={{ my: 2, backgroundColor: "#8B1C23" }} />
        </Grid> */}

        {/* Training */}
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <Typography variant="h5" fontWeight="bold" color="#8B1C23">TRAINING</Typography>
          {resumeData.trainings && resumeData.trainings.length > 0 ? (
            resumeData.trainings.map((training, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h6">{training.trainingTitle}</Typography>
                <Typography variant="body2">Institute: {training.institute}</Typography>
                <Typography variant="body2">Completion Date: {training.completion}</Typography>
                <Typography variant="body2">{training.description}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Your training details go here.</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Template4;