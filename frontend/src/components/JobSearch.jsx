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
  Chip,
  Divider,
  Collapse,
  IconButton,
  Paper,
  Badge,
  Tooltip,
} from "@mui/material";
import {
  FilterList,
  ExpandMore,
  ExpandLess,
  LocationOn,
  WorkOutline,
  Schedule,
  Link,
  Star,
  StarBorder,
  Business,
  People,
  Public,
  Description,
  CheckCircle,
  Close,
} from "@mui/icons-material";
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
  const [expanded, setExpanded] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get("/user/jobs");
        setJobs(response.data); 

        //   {
        //       "id": "4182664113",
        //       "title": "Housekeeping Supervisor",
        //       "url": "https://www.linkedin.com/jobs/view/4182664113",
        //       "referenceId": "ddrINX7LoijSKvSQew9KIw==",
        //       "posterId": "4086607",
        //       "company": {
        //           "id": 163758,
        //           "name": "Fairmont Hotels & Resorts",
        //           "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQFYYdJOlpzC7g/company-logo_200_200/company-logo_200_200/0/1720426207831?e=1748476800&v=beta&t=i3a49NJu2-JK50Mr_4oUyrQrkpdNlO-ydDRpeq-73Sg",
        //           "url": "https://www.linkedin.com/company/fairmont-hotels-and-resorts/life",
        //           "staffCountRange": {"start": 10001},
        //           "headquarter": {
        //             "city": "Dubai",
        //             "country": "AE"
        //           }
        //       },
        //       "location": "Dubai, Dubai, United Arab Emirates (On-site)",
        //       "postAt": "2025-03-14 17:30:38 +0000 UTC",
        //       "postedTimestamp": 1741973438000,
        //       "state": "Open",
        //       "type": "Full-time",
        //       "workPlace": "On-site",
        //       "skills": ["Management", "Hospitality", "Leadership"],
        //       "salary": "AED 5,000 - 6,000 per month",
        //       "experience": "3+ years",
        //       "views": 124,
        //       "applicants": 28
        //   },
        //   {
        //       "id": "4183388649",
        //       "title": "Frontend Developer",
        //       "url": "https://www.linkedin.com/jobs/view/4183388649",
        //       "referenceId": "ddrINX7LoijSKvSQew9KIw==",
        //       "posterId": "791580128",
        //       "company": {
        //           "id": 2269862,
        //           "name": "Tranzeal Incorporated",
        //           "logo": "https://media.licdn.com/dms/image/v2/C560BAQEd6wmLi_AJpw/company-logo_200_200/company-logo_200_200/0/1631327191600?e=1748476800&v=beta&t=DNxEJMFYkRk2DPhrqAOa9SySfQ8LpzpYEk89iCSIWWQ",
        //           "url": "https://www.linkedin.com/company/tranzeal-inc/life",
        //           "staffCountRange": {"start": 501, "end": 1000},
        //           "headquarter": {
        //             "city": "San Jose",
        //             "country": "US"
        //           }
        //       },
        //       "location": "Hyderabad, Telangana, India (On-site)",
        //       "postAt": "2025-03-17 16:25:53 +0000 UTC",
        //       "postedTimestamp": 1742228753000,
        //       "state": "Open",
        //       "type": "Full-time",
        //       "workPlace": "Hybrid",
        //       "skills": ["React", "JavaScript", "HTML/CSS", "TypeScript", "Redux"],
        //       "salary": "₹800,000 - ₹1,200,000 per year",
        //       "experience": "2-5 years",
        //       "views": 215,
        //       "applicants": 42
        //   },
        //   {
        //       "id": "4183476730",
        //       "title": "React JS Full-stack Consultant",
        //       "url": "https://www.linkedin.com/jobs/view/4183476730",
        //       "referenceId": "ddrINX7LoijSKvSQew9KIw==",
        //       "company": {
        //           "id": 1283,
        //           "name": "Infosys",
        //           "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/company-logo_200_200/0/1692876768583/infosys_logo?e=1748476800&v=beta&t=vCCF5G3MFlgwlX8ssU7XcuF9t3151bNBp00dTy1WMe8",
        //           "url": "https://www.linkedin.com/company/infosys/life",
        //           "staffCountRange": {"start": 10001},
        //           "headquarter": {
        //             "city": "Bangalore",
        //             "country": "IN"
        //           }
        //       },
        //       "location": "Bengaluru East, Karnataka, India (On-site)",
        //       "postAt": "2025-03-18 07:25:09 +0000 UTC",
        //       "postedTimestamp": 1742282709000,
        //       "state": "Open",
        //       "type": "Full-time",
        //       "workPlace": "Hybrid",
        //       "skills": ["React", "Java", "DevOps", "JavaScript", "HTML5", "CSS3", "Spring Boot"],
        //       "salary": "₹1,000,000 - ₹1,500,000 per year",
        //       "experience": "4-7 years",
        //       "views": 189,
        //       "applicants": 37
        //   }
        // ]); 
      
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
      (selectedLocation ? job.location.includes(selectedLocation) : true) &&
      (selectedSkill ? job.skills && job.skills.includes(selectedSkill) : true) &&
      (selectedStatus ? job.state === selectedStatus : true)
    );
  });

  const handleViewDetails = async (jobId) => {
    try {
      const response = await axiosInstance.get(`/user/jobdetails/${jobId}`);
      setSelectedJob(response.data);
      const job = jobs.find(j => j.id === jobId);

    //     ...job,
        
        
    //       "id": "4183476730",
    //       "state": "LISTED",
    //       "title": "React JS Full-stack Consultant",
    //       "description": "Primary - React, Java, DevOps Secondary - HTML5, CSS3, JavaScript, jQuery, Java, J2EE, continuous deployment and DevOps tools, Git\n\nAs part of the Infosys delivery team, your primary role would be to interface with the client for quality assurance, issue resolution and ensuring high customer satisfaction.\n\n You will understand requirements, create and review designs, validate the architecture and ensure high levels of service offerings to clients in the technology domain. You will participate in project estimation, provide inputs for solution delivery, conduct technical risk planning, perform code reviews and unit test plan reviews. You will lead and guide your teams towards developing optimized high quality code deliverables, continual knowledge management and adherence to the organizational guidelines and processes. You would be a key contributor to building efficient programs/ systems Analyzing user requirements, envisioning system features and functionality. In-depth knowledge of design issues and best practices Solid understanding of object-oriented programming Familiar with various design, architectural patterns and software development process. Implementing automated testing platforms and unit tests",
    //       "url": "https://www.linkedin.com/jobs/view/4183476730/",
    //       "applyMethod": {
    //           "companyApplyUrl": "https://career.infosys.com/jobdesc?jobReferenceCode=INFSYS-EXTERNAL-203679&sourceId=4003",
    //           "easyApplyUrl": ""
    //       },
    //       "company": {
    //           "id": 1283,
    //           "name": "Infosys",
    //           "universalName": "infosys",
    //           "description": "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation. With over three decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey. We do it by enabling the enterprise with an AI-powered core that helps prioritize the execution of change. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem.\n\nVisit www.infosys.com to see how Infosys (NYSE: INFY) can help your enterprise navigate your next.\n\n",
    //           "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/company-logo_200_200/0/1692876768583/infosys_logo?e=1748476800&v=beta&t=vCCF5G3MFlgwlX8ssU7XcuF9t3151bNBp00dTy1WMe8",
    //           "url": "https://www.linkedin.com/company/infosys",
    //           "followerCount": 9852443,
    //           "staffCount": 345514,
    //           "staffCountRange": {
    //               "start": 10001
    //           },
    //           "specialities": [
    //               "IT Solutions and Services",
    //               "Consulting",
    //               "Business Process Outsourcing",
    //               "Products and Platforms",
    //               "Engineering Services",
    //               "Cloud Services",
    //               "Artificial Intelligence",
    //               "Digital",
    //               "Big Data"
    //           ],
    //           "industries": [
    //               "IT Services and IT Consulting"
    //           ],
    //           "headquarter": {
    //               "geographicArea": "Karnataka",
    //               "country": "IN",
    //               "city": "Bangalore",
    //               "postalCode": "560100",
    //               "line1": "Infosys Limited"
    //           }
    //       },
    //       "contentLanguage": {
    //           "code": "EN",
    //           "name": "English"
    //       },
    //       "location": "Bengaluru East, Karnataka, India",
    //       "type": "Full-time",
    //       "applies": 27,
    //       "views": 84,
    //       "workPlace": "Hybrid",
    //       "expireAt": 1744874708000,
    //       "formattedJobFunctions": [
    //           "Consulting",
    //           "Information Technology",
    //           "Sales"
    //       ],
    //       "jobFunctions": [
    //           "CNSL",
    //           "IT",
    //           "SALE"
    //       ],
    //       "industries": [
    //           96
    //       ],
    //       "formattedIndustries": [
    //           "IT Services and IT Consulting"
    //       ],
    //       "formattedExperienceLevel": "Mid-Senior level",
    //       "listedAt": 1742282709000,
    //       "listedAtDate": "2025-03-18 07:25:09 +0000 UTC",
    //       "originalListedAt": 1742282709000,
    //       "originalListedDate": "2025-03-18 07:25:09 +0000 UTC"
    // }
    //   );
      
    setExpanded(false);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const handleApplyNow = async (applyUrl) => {
    try {
      window.open(applyUrl, "_blank");
      // await axiosInstance.post("/user/applyjob", { jobId: selectedJob.id });
      await axiosInstance.get("/user/applyjob");
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  const handleApply = async () => {
    try {
      window.open(applyUrl, "_blank");
      // await axiosInstance.post("/user/applyjob", { jobId: selectedJob.id });
      await axiosInstance.get("/user/applyjob");
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom sx={{ 
        fontWeight: "bold", 
        textAlign: "center", 
        fontFamily: "'Poppins', sans-serif",
        color: "#2d3748",
        mb: 4,
        fontSize: { xs: '1.8rem', sm: '2.4rem' }
      }}>
        Matching Jobs
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8} md={9}>
          <TextField 
            fullWidth 
            variant="outlined" 
            placeholder="Search by job title, company, or skills..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: '#f8fafc',
                '&:hover fieldset': {
                  borderColor: '#c7d2fe',
                },
              }
            }}
            InputProps={{
              startAdornment: (
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                  <WorkOutline sx={{ color: 'text.secondary' }} />
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Button 
            variant="contained" 
            startIcon={<FilterList />} 
            onClick={handleFilterClick} 
            sx={{ 
              width: "100%",
              borderRadius: '12px',
              py: 1.5,
              backgroundColor: '#4f46e5',
              '&:hover': {
                backgroundColor: '#4338ca'
              }
            }}
          >
            Filters
          </Button>
          <Menu 
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)} 
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{ 
              '& .MuiPaper-root': {
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                minWidth: '300px',
                mt: 1
              }
            }}
          >
            <Box sx={{ padding: "15px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Filter Jobs
              </Typography>
              
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Location</InputLabel>
                <Select 
                  value={selectedLocation} 
                  onChange={(e) => setSelectedLocation(e.target.value)} 
                  label="Location"
                  sx={{ borderRadius: '8px' }}
                >
                  <MenuItem value="">All Locations</MenuItem>
                  {Array.from(new Set(jobs.map((job) => job.location.split(',')[0]))).map((loc, index) => (
                    <MenuItem key={index} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Skills</InputLabel>
                <Select 
                  value={selectedSkill} 
                  onChange={(e) => setSelectedSkill(e.target.value)} 
                  label="Skill"
                  sx={{ borderRadius: '8px' }}
                >
                  <MenuItem value="">All Skills</MenuItem>
                  {Array.from(new Set(jobs.flatMap(job => job.skills || []))).map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Job Type</InputLabel>
                <Select 
                  value={selectedStatus} 
                  onChange={(e) => setSelectedStatus(e.target.value)} 
                  label="Status"
                  sx={{ borderRadius: '8px' }}
                >
                  <MenuItem value="">All Types</MenuItem>
                  <MenuItem value="Open">Full-time</MenuItem>
                  <MenuItem value="Closed">Part-time</MenuItem>
                  <MenuItem value="Closed">Contract</MenuItem>
                </Select>
              </FormControl>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button 
                    fullWidth 
                    variant="outlined" 
                    onClick={handleResetFilters}
                    startIcon={<Close />}
                    sx={{
                      borderRadius: '8px',
                      borderColor: '#e2e8f0',
                      color: '#64748b',
                      '&:hover': {
                        borderColor: '#c7d2fe'
                      }
                    }}
                  >
                    Clear
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    onClick={handleFilterClose}
                    sx={{
                      borderRadius: '8px',
                      backgroundColor: '#4f46e5',
                      '&:hover': {
                        backgroundColor: '#4338ca'
                      }
                    }}
                  >
                    Apply
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Menu>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ 
            bgcolor: "#ffffff", 
            borderRadius: "12px", 
            padding: "10px",
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <Typography variant="subtitle1" sx={{ 
              fontWeight: 'bold', 
              mb: 2, 
              px: 2,
              color: '#4f46e5'
            }}>
              {filteredJobs.length} Jobs Found
            </Typography>
            
            <List>
              {filteredJobs.map((job, index) => (
                <motion.div 
                  whileHover={{ scale: 1.01 }} 
                  key={index} 
                  style={{ cursor: "pointer" }}
                >
                  <ListItem 
                    sx={{
                      mb: 1,
                      borderRadius: '8px',
                      backgroundColor: selectedJob?.id === job.id ? '#eef2ff' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#f8fafc'
                      },
                      transition: 'background-color 0.2s ease',
                      position: 'relative'
                    }}
                    onClick={() => handleViewDetails(job.id)}
                  >
                    <ListItemAvatar>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSaveJob(job.id);
                            }}
                            sx={{
                              backgroundColor: 'background.paper',
                              '&:hover': {
                                backgroundColor: 'background.default'
                              }
                            }}
                          >
                            {savedJobs.includes(job.id) ? (
                              <Star color="warning" fontSize="small" />
                            ) : (
                              <StarBorder fontSize="small" />
                            )}
                          </IconButton>
                        }
                      >
                        <Avatar 
                          src={job.company.logo} 
                          alt={job.company.name} 
                          sx={{ 
                            width: 56, 
                            height: 56,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                          }}
                        />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText 
                      primary={
                        <Typography variant="subtitle1" fontWeight="medium" sx={{ lineHeight: 1.2 }}>
                          {job.title}
                        </Typography>
                      } 
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                            {job.company.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                            <LocationOn color="primary" sx={{ fontSize: '16px', mr: 0.5 }} />
                            <Typography variant="caption" color="text.secondary">
                              {job.location.split('(')[0].trim()}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                            <Schedule color="primary" sx={{ fontSize: '16px', mr: 0.5 }} />
                            <Typography variant="caption" color="text.secondary">
                              {new Date(job.postedTimestamp).toLocaleDateString()}
                            </Typography>
                          </Box>
                        </>
                      } 
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                </motion.div>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          {selectedJob ? (
            <motion.div 
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ 
                padding: { xs: 2, sm: 3 }, 
                boxShadow: 3, 
                borderRadius: "12px",
                borderLeft: '4px solid #4f46e5',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box>
                      <Typography variant="h4" sx={{ 
                        fontWeight: "bold", 
                        mb: 1,
                        fontSize: { xs: '1.5rem', sm: '2rem' }
                      }}>
                        {selectedJob.title}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                        {selectedJob.company.name}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => toggleSaveJob(selectedJob.id)}
                      sx={{
                        alignSelf: 'flex-start',
                        color: savedJobs.includes(selectedJob.id) ? '#f59e0b' : 'inherit'
                      }}
                    >
                      {savedJobs.includes(selectedJob.id) ? (
                        <Star fontSize="large" />
                      ) : (
                        <StarBorder fontSize="large" />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: '8px', 
                        backgroundColor: '#f8fafc',
                        height: '100%'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <LocationOn color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body1" fontWeight="medium">Location</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ ml: 3 }}>
                          {selectedJob.location.split('(')[0].trim()}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 3 }}>
                          ({selectedJob.workPlace})
                        </Typography>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: '8px', 
                        backgroundColor: '#f8fafc',
                        height: '100%'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <WorkOutline color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body1" fontWeight="medium">Job Type</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ ml: 3 }}>
                          {selectedJob.type}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 3 }}>
                          {selectedJob.formattedExperienceLevel}
                        </Typography>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: '8px', 
                        backgroundColor: '#f8fafc',
                        height: '100%'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Schedule color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body1" fontWeight="medium">Posted</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ ml: 3 }}>
                          {new Date(selectedJob.listedAt).toLocaleDateString()}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 3 }}>
                          {selectedJob.applies} applicants
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={6}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: '8px', 
                        backgroundColor: '#f8fafc',
                        height: '100%'
                      }}>
                        <Typography variant="subtitle1" sx={{ 
                          fontWeight: 'bold', 
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Description color="primary" sx={{ mr: 1 }} />
                          Job Description
                        </Typography>
                        
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {selectedJob.description.split('\n')[0]}...
                        </Typography>

                        <Box sx={{ textAlign: 'center' }}>
                          <Button 
                            onClick={toggleExpand}
                            endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
                            sx={{
                              color: '#4f46e5',
                              textTransform: 'none'
                            }}
                          >
                            {expanded ? 'Show Less' : 'View Full Description'}
                          </Button>
                        </Box>

                        <Collapse in={expanded}>
                          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                            {selectedJob.description}
                          </Typography>
                        </Collapse>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: '8px', 
                        backgroundColor: '#f8fafc',
                        height: '100%'
                      }}>
                        <Typography variant="subtitle1" sx={{ 
                          fontWeight: 'bold', 
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Business color="primary" sx={{ mr: 1 }} />
                          About {selectedJob.company.name}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                          {selectedJob.company.description}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <People color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body2">
                            Company size: {formatNumber(selectedJob.company.staffCountRange.start)}+ employees
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Public color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body2">
                            Headquarters: {selectedJob.company.headquarter.city}, {selectedJob.company.headquarter.country}
                          </Typography>
                        </Box>
                        
                        {/* <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Specialities:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {selectedJob.company.specialities.slice(0, 5).map((speciality, index) => (
                              <Chip 
                                key={index} 
                                label={speciality} 
                                size="small"
                                sx={{ 
                                  borderRadius: '4px',
                                  backgroundColor: '#e0e7ff',
                                  color: '#4f46e5'
                                }}
                              />
                            ))}
                          </Box>
                        </Box> */}
                      </Paper>
                    </Grid>
                  </Grid>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <CheckCircle color="primary" sx={{ mr: 1 }} />
                      Skills & Requirements
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedJob.skills?.map((skill, index) => (
                        <Chip 
                          key={index} 
                          label={skill} 
                          variant="outlined" 
                          sx={{ 
                            borderRadius: '4px',
                            borderColor: '#c7d2fe',
                            backgroundColor: '#eef2ff',
                            color: '#4f46e5'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {selectedJob.salary && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Salary
                      </Typography>
                      <Typography variant="body1">
                        {selectedJob.salary}
                      </Typography>
                    </Box>
                  )}

                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mt: 3,
                    gap: 2
                  }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      onClick={() => handleApplyNow(selectedJob.applyMethod.companyApplyUrl)}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        backgroundColor: '#4f46e5',
                        '&:hover': {
                          backgroundColor: '#4338ca'
                        }
                      }}
                    >
                      Apply Now
                    </Button>
                    
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="large"
                      href={selectedJob.url} 
                      onClick={() => handleApply()}
                      target="_blank"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        borderColor: '#4f46e5',
                        color: '#4f46e5',
                        '&:hover': {
                          borderColor: '#4338ca'
                        }
                      }}
                    >
                      View on LinkedIn
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <Paper 
              elevation={0} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '12px',
                backgroundColor: '#f8fafc',
                minHeight: '400px'
              }}
            >
              <Box sx={{ textAlign: "center", p: 3 }}>
                <WorkOutline sx={{ 
                  fontSize: '64px', 
                  color: 'text.secondary',
                  mb: 2
                }} />
                <Typography variant="h6" sx={{ 
                  color: 'text.secondary',
                  mb: 1
                }}>
                  Select a job to see details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Click on any job from the list to view its complete details
                </Typography>
              </Box>
            </Paper>
          )}
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default JobSearch;