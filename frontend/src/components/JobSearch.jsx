import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import { motion } from "framer-motion";
import axiosInstance from "../../axiosInterceptor";

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // const response = await axiosInstance.get("/user/jobs");
        // setJobs(response.data); 
        setJobs([
          {
              "id": "4182664113",
              "title": "Housekeeping Supervisor",
              "url": "https://www.linkedin.com/jobs/view/4182664113",
              "referenceId": "ddrINX7LoijSKvSQew9KIw==",
              "posterId": "4086607",
              "company": {
                  "id": 163758,
                  "name": "Fairmont Hotels & Resorts",
                  "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQFYYdJOlpzC7g/company-logo_200_200/company-logo_200_200/0/1720426207831?e=1748476800&v=beta&t=i3a49NJu2-JK50Mr_4oUyrQrkpdNlO-ydDRpeq-73Sg",
                  "url": "https://www.linkedin.com/company/fairmont-hotels-and-resorts/life",
                  "staffCountRange": {},
                  "headquarter": {}
              },
              "location": "Dubai, Dubai, United Arab Emirates (On-site)",
              "postAt": "2025-03-14 17:30:38 +0000 UTC",
              "postedTimestamp": 1741973438000
          },
          {
              "id": "4183388649",
              "title": "Frontend Developer",
              "url": "https://www.linkedin.com/jobs/view/4183388649",
              "referenceId": "ddrINX7LoijSKvSQew9KIw==",
              "posterId": "791580128",
              "company": {
                  "id": 2269862,
                  "name": "Tranzeal Incorporated",
                  "logo": "https://media.licdn.com/dms/image/v2/C560BAQEd6wmLi_AJpw/company-logo_200_200/company-logo_200_200/0/1631327191600?e=1748476800&v=beta&t=DNxEJMFYkRk2DPhrqAOa9SySfQ8LpzpYEk89iCSIWWQ",
                  "url": "https://www.linkedin.com/company/tranzeal-inc/life",
                  "staffCountRange": {},
                  "headquarter": {}
              },
              "location": "Hyderabad, Telangana, India (On-site)",
              "postAt": "2025-03-17 16:25:53 +0000 UTC",
              "postedTimestamp": 1742228753000
          },
          {
              "id": "4183476730",
              "title": "React JS Full-stack Consultant",
              "url": "https://www.linkedin.com/jobs/view/4183476730",
              "referenceId": "ddrINX7LoijSKvSQew9KIw==",
              "company": {
                  "id": 1283,
                  "name": "Infosys",
                  "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/company-logo_200_200/0/1692876768583/infosys_logo?e=1748476800&v=beta&t=vCCF5G3MFlgwlX8ssU7XcuF9t3151bNBp00dTy1WMe8",
                  "url": "https://www.linkedin.com/company/infosys/life",
                  "staffCountRange": {},
                  "headquarter": {}
              },
              "location": "Bengaluru East, Karnataka, India (On-site)",
              "postAt": "2025-03-18 07:25:09 +0000 UTC",
              "postedTimestamp": 1742282709000
          }
        ]); 
      
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleResetFilters = () => {
    setSelectedLocation("");
    setSelectedSkill("");
    setSelectedStatus("");
    handleFilterClose();
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation ? job.location === selectedLocation : true) &&
      (selectedSkill ? job.skills && job.skills.includes(selectedSkill) : true) &&
      (selectedStatus ? job.state === selectedStatus : true)
    );
  });

  const handleViewDetails = async (jobId) => {
    try {
      // const response = await axiosInstance.get(`/user/jobdetails/${jobId}`);
      // setSelectedJob(response.data);
      setSelectedJob({
        "id": "4183476730",
        "state": "LISTED",
        "title": "React JS Full-stack Consultant",
        "description": "Primary - React, Java, DevOps Secondary - HTML5, CSS3, JavaScript, jQuery, Java, J2EE, continuous deployment and DevOps tools, Git\n\nAs part of the Infosys delivery team, your primary role would be to interface with the client for quality assurance, issue resolution and ensuring high customer satisfaction.\n\n You will understand requirements, create and review designs, validate the architecture and ensure high levels of service offerings to clients in the technology domain. You will participate in project estimation, provide inputs for solution delivery, conduct technical risk planning, perform code reviews and unit test plan reviews. You will lead and guide your teams towards developing optimized high quality code deliverables, continual knowledge management and adherence to the organizational guidelines and processes. You would be a key contributor to building efficient programs/ systems Analyzing user requirements, envisioning system features and functionality. In-depth knowledge of design issues and best practices Solid understanding of object-oriented programming Familiar with various design, architectural patterns and software development process. Implementing automated testing platforms and unit tests",
        "url": "https://www.linkedin.com/jobs/view/4183476730/",
        "applyMethod": {
            "companyApplyUrl": "https://career.infosys.com/jobdesc?jobReferenceCode=INFSYS-EXTERNAL-203679&sourceId=4003",
            "easyApplyUrl": ""
        },
        "company": {
            "id": 1283,
            "name": "Infosys",
            "universalName": "infosys",
            "description": "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation. With over three decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey. We do it by enabling the enterprise with an AI-powered core that helps prioritize the execution of change. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem.\n\nVisit www.infosys.com to see how Infosys (NYSE: INFY) can help your enterprise navigate your next.\n\n",
            "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/company-logo_200_200/0/1692876768583/infosys_logo?e=1748476800&v=beta&t=vCCF5G3MFlgwlX8ssU7XcuF9t3151bNBp00dTy1WMe8",
            "url": "https://www.linkedin.com/company/infosys",
            "followerCount": 9852443,
            "staffCount": 345514,
            "staffCountRange": {
                "start": 10001
            },
            "specialities": [
                "IT Solutions and Services",
                "Consulting",
                "Business Process Outsourcing",
                "Products and Platforms",
                "Engineering Services",
                "Cloud Services",
                "Artificial Intelligence",
                "Digital",
                "Big Data"
            ],
            "industries": [
                "IT Services and IT Consulting"
            ],
            "headquarter": {
                "geographicArea": "Karnataka",
                "country": "IN",
                "city": "Bangalore",
                "postalCode": "560100",
                "line1": "Infosys Limited"
            }
        },
        "contentLanguage": {
            "code": "EN",
            "name": "English"
        },
        "location": "Bengaluru East, Karnataka, India",
        "type": "Full-time",
        "applies": 27,
        "views": 84,
        "workPlace": "Hybrid",
        "expireAt": 1744874708000,
        "formattedJobFunctions": [
            "Consulting",
            "Information Technology",
            "Sales"
        ],
        "jobFunctions": [
            "CNSL",
            "IT",
            "SALE"
        ],
        "industries": [
            96
        ],
        "formattedIndustries": [
            "IT Services and IT Consulting"
        ],
        "formattedExperienceLevel": "Mid-Senior level",
        "listedAt": 1742282709000,
        "listedAtDate": "2025-03-18 07:25:09 +0000 UTC",
        "originalListedAt": 1742282709000,
        "originalListedDate": "2025-03-18 07:25:09 +0000 UTC"
      });
    
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const handleApplyNow = async (applyUrl) => {
    try {
      await axiosInstance.post("/user/applyjob", { jobId: selectedJob.id });
      window.open(applyUrl, "_blank");
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>
        Matching Jobs
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField fullWidth variant="outlined" placeholder="Search Jobs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" startIcon={<FilterList />} onClick={handleFilterClick} sx={{ width: "100%" }}>
            Filters
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleFilterClose} sx={{ padding: "10px" }}>
            <Box sx={{ padding: "15px", minWidth: "250px" }}>
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Location</InputLabel>
                <Select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} label="Location">
                  <MenuItem value="">All</MenuItem>
                  {Array.from(new Set(jobs.map((job) => job.location))).map((loc, index) => (
                    <MenuItem key={index} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Skill</InputLabel>
                {/* <Select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)} label="Skill">
                  <MenuItem value="">All</MenuItem>
                  {Array.from(new Set(jobs.flatMap((job) => job.skills.split(", ")))).map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select> */}
              </FormControl>

              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Status</InputLabel>
                <Select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} label="Status">
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Open">Open</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                </Select>
              </FormControl>

              <Button fullWidth variant="outlined" onClick={handleResetFilters}>
                Reset Filters
              </Button>
            </Box>
          </Menu>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={4}>
          <List sx={{ bgcolor: "#f9f9f9", borderRadius: "10px", padding: "10px" }}>
            {filteredJobs.map((job, index) => (
              <motion.div whileHover={{ scale: 1.05 }} key={index} style={{ cursor: "pointer" }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={job.company.logo} alt={job.company.name} />
                  </ListItemAvatar>
                  <ListItemText primary={job.title} secondary={`${job.company.name} - ${job.state}`} />
                  <Button variant="outlined" onClick={() => handleViewDetails(job.id)}>
                    View Details
                  </Button>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={8}>
          {selectedJob ? (
            <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
              <Card sx={{ padding: 3, boxShadow: 3, borderRadius: "12px" }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>{selectedJob.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{selectedJob.company.name}</Typography>
                  <Typography variant="body2">Location: {selectedJob.location}</Typography>
                  <Typography variant="body2">Status: {selectedJob.state}</Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>{selectedJob.description}</Typography>
                  <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} onClick={() => handleApplyNow(selectedJob.applyMethod.companyApplyUrl)}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Select a job to see details
            </Typography>
          )}
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default JobSearch;