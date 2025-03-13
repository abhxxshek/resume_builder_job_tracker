import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom"; // Import useParams
import FieldSelector from "./FieldSelector";
import FieldSidebar from "./FieldSidebar";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4"
import Template5 from "../Templates/Template5"

const Layout2 = () => {
  const { template } = useParams(); // Get the selected template from the URL
  const [selectedField, setSelectedField] = useState("About");

  // State to manage resume data
  const [resumeData, setResumeData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    profile: "",
    email: "",
    phoneNumber: "",
    city: "",
    address: "",
    experience: "",
    school: "",
    degree:"",
    
    startdate:"",
    enddate:"",
    description:"",
    skill: "",
    level:"",
    employer:"",
      job:"",
      company:"",
      City:"",
      startDate:"",
      endDate:"",
      description1:"",
    achievements: "",
    description2:"",
    award:"",
city1:"",
organization:"",
description3:"",
recieveddate:"",
    
training:"",
institute:"",
completionDate:"",
description4:"",
project:"",
     description5:"",
    projectlink:""
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Grid container columnSpacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={2} sx={{ borderRight: "1px solid lightgrey" }}>
          <FieldSidebar
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        </Grid>

        {/* Form Fields */}
        <Grid item xs={12} md={5} sx={{ borderRight: "1px solid lightgrey" }}>
          <FieldSelector
            selectedField={selectedField}
            resumeData={resumeData}
            handleChange={handleChange}
          />
        </Grid>

        {/* Template Preview */}
        <Grid item xs={12} md={5}>
          {template === "Template1" && <Template1 resumeData={resumeData} />}
          {template === "Template2" && <Template2 resumeData={resumeData} />}
          {template === "Template3" && <Template3 resumeData={resumeData} />}
          {template === "Template4" && <Template4 resumeData={resumeData} />}
          {template === "Template5" && <Template5 resumeData={resumeData} />}
          
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout2;