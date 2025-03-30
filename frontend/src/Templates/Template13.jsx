import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axiosInstance from '../../axiosInterceptor';

const Template13 = ({ resumeData, fontSize, color, fontFamily, headingColor }) => {
  const [fetchedStyles, setFetchedStyles] = useState(null);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await axiosInstance.get("/user/savedStyle");
        setFetchedStyles(response.data);
      } catch (error) {
        console.error("Error fetching Styles:", error);
      }
    };

    fetchStyles();
  }, []);

  const defaultStyles = {
    fontSize: fontSize || (fetchedStyles ? fetchedStyles.fontSize : '16px'),
    color: color || (fetchedStyles ? fetchedStyles.color : '#000000'),
    fontFamily: fontFamily || (fetchedStyles ? fetchedStyles.fontFamily : 'Arial, sans-serif'),
    headingColor: headingColor || (fetchedStyles ? fetchedStyles.headingColor : '#333333'),
  };

  // Default resume data with all required properties
  const defaultResumeData = {
    firstName: 'John',
    lastName: 'Doe',
    designation: 'Software Engineer',
    email: 'john.doe@example.com',
    phoneNumber: 1234567890,
    city: 'San Francisco',
    address: '123 Main Street, Apt 4B',
    careerObjective: 'Motivated and results-driven software engineer with a passion for solving complex problems and building scalable systems. Seeking an opportunity to leverage my skills in full-stack development.',
    skills: [
      { skill: 'Your skill', proficiency: 'and its level' }
    ],
    experience: [
      {
        jobTitle: 'add your experiences here...',
        company: 'company , description,etc',
        startDate: '',
        endDate: '',
        description: ''
      }
    ],
    education: [
      {
        institution: 'Your Edication is a mandatory for creating a resume.',
        fieldOfStudy: 'other details like start year ,end year , percentage',
        startYear: '',
        endYear: '',
        percentage: ''
      }
    ]
  };

  // Safely merge provided data with defaults
  const data = {
    ...defaultResumeData,
    ...resumeData,
    skills: resumeData?.skills || defaultResumeData.skills,
    experience: resumeData?.experience || defaultResumeData.experience,
    education: resumeData?.education || defaultResumeData.education
  };

  return (
    <div style={{ fontFamily: defaultStyles.fontFamily, lineHeight: '1.6', color: defaultStyles.color, fontSize: defaultStyles.fontSize, padding: '20px' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: defaultStyles.headingColor }}>
          {`${data.firstName} ${data.lastName}`}
        </h1>
        <h2 style={{ color: defaultStyles.headingColor }}>
          {data.designation}
        </h2>
      </header>

      {/* Career Objective */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: defaultStyles.headingColor }}>Career Objective</h3>
        <p>{data.careerObjective}</p>
      </section>

      {/* Contact Information */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: defaultStyles.headingColor }}>Contact Information</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 20px', backgroundColor: '#f9f9f9', borderRadius: '5px', marginBottom: '20px' }}>
          <p><FaEnvelope style={{ marginRight: '10px' }} /> <a href="#" style={{ color: defaultStyles.color }}>{data.email}</a></p>
          <p><FaPhone style={{ marginRight: '10px' }} /> +91 {data.phoneNumber}</p>
          <p><FaMapMarkerAlt style={{ marginRight: '10px' }} /> {data.address} , {data.city}</p>
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: defaultStyles.headingColor }}>Skills</h3>
        <ul style={{ paddingLeft: '20px' }}>
          {data.skills.map((skill, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{skill.skill}</strong> - {skill.proficiency}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: defaultStyles.headingColor }}>Experience</h3>
        <ul style={{ paddingLeft: '20px' }}>
          {data.experience.map((job, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <strong>{job.jobTitle}</strong> at {job.company}
              <br />
              <em>{job.startDate} - {job.endDate}</em>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: defaultStyles.headingColor }}>Education</h3>
        <ul style={{ paddingLeft: '20px' }}>
          {data.education.map((edu, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <strong>{edu.institution}</strong> - {edu.fieldOfStudy}
              <br />
              <em>{edu.startYear} - {edu.endYear}</em>
              <p>Percentage: {edu.percentage}%</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Template13;