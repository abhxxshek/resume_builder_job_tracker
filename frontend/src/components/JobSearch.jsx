import React, { useState } from "react";
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

const JobSearch = () => {
  const [jobs] = useState([
    {
      title: "Junior Mobile/Web Engineer",
      company: "Crew",
      companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQGv5jziAFxmvg/company-logo_200_200/company-logo_200_200/0/1688155111131/turnberrycrew_logo?e=1747872000&v=beta&t=z9_1niBtqZtzWnaXOOCiFP-lu2RX4atQN79OX7O8ZMg",
      location: "Ankeny, IA",
      duration: "Full-time",
      state: "Open",
      skills: "React, JavaScript",
      description: "Looking for a Junior Mobile/Web Engineer to develop and maintain mobile and web applications.",
      url: "https://www.linkedin.com/jobs/view/4184228066",
    },
    {
      title: "React Developer",
      company: "Accenture",
      companyLogo:  "https://media.licdn.com/dms/image/v2/D4E0BAQHDbmrSIZ2UdA/company-logo_200_200/company-logo_200_200/0/1723130689960/accenture_logo?e=1747872000&v=beta&t=If7YcuxJjwqxCx6TGkiIoeRlZh-U5C0oY2SMYtq69bs",
      location: "Cluj-Napoca, Romania",
      duration: "Full-time",
      state: "Closed",
      skills: "React, Redux, TypeScript",
      description: "Hiring a React Developer to work on innovative web applications and collaborate with teams.",
      url: "https://www.linkedin.com/jobs/view/4185926333",
    },
    {
      title: "Junior Frontend Engineer",
      company: "Tech Corp",
      companyLogo: "https://via.placeholder.com/100",
      location: "USA",
      duration: "Contract",
      state: "Open",
      skills: "HTML, CSS, JavaScript",
      description: "Seeking a Junior Frontend Engineer to build interactive UI components.",
      url: "https://www.linkedin.com/jobs/view/4181364621",
    },
  ]);

//   const [jobs] = useState([
//     {
//         "id": "4182664113",
//         "title": "Housekeeping Supervisor",
//         "url": "https://www.linkedin.com/jobs/view/4182664113",
//         "referenceId": "ddrINX7LoijSKvSQew9KIw==",
//         "posterId": "4086607",
//         "company": {
//             "id": 163758,
//             "name": "Fairmont Hotels & Resorts",
//             "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQFYYdJOlpzC7g/company-logo_200_200/company-logo_200_200/0/1720426207831?e=1748476800&v=beta&t=i3a49NJu2-JK50Mr_4oUyrQrkpdNlO-ydDRpeq-73Sg",
//             "url": "https://www.linkedin.com/company/fairmont-hotels-and-resorts/life",
//             "staffCountRange": {},
//             "headquarter": {}
//         },
//         "location": "Dubai, Dubai, United Arab Emirates (On-site)",
//         "postAt": "2025-03-14 17:30:38 +0000 UTC",
//         "postedTimestamp": 1741973438000
//     },
//     {
//         "id": "4183388649",
//         "title": "Frontend Developer",
//         "url": "https://www.linkedin.com/jobs/view/4183388649",
//         "referenceId": "ddrINX7LoijSKvSQew9KIw==",
//         "posterId": "791580128",
//         "company": {
//             "id": 2269862,
//             "name": "Tranzeal Incorporated",
//             "logo": "https://media.licdn.com/dms/image/v2/C560BAQEd6wmLi_AJpw/company-logo_200_200/company-logo_200_200/0/1631327191600?e=1748476800&v=beta&t=DNxEJMFYkRk2DPhrqAOa9SySfQ8LpzpYEk89iCSIWWQ",
//             "url": "https://www.linkedin.com/company/tranzeal-inc/life",
//             "staffCountRange": {},
//             "headquarter": {}
//         },
//         "location": "Hyderabad, Telangana, India (On-site)",
//         "postAt": "2025-03-17 16:25:53 +0000 UTC",
//         "postedTimestamp": 1742228753000
//     },
//     {
//         "id": "4183476730",
//         "title": "React JS Full-stack Consultant",
//         "url": "https://www.linkedin.com/jobs/view/4183476730",
//         "referenceId": "ddrINX7LoijSKvSQew9KIw==",
//         "company": {
//             "id": 1283,
//             "name": "Infosys",
//             "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQE7Zf1-vvfbUA/company-logo_200_200/company-logo_200_200/0/1692876768583/infosys_logo?e=1748476800&v=beta&t=vCCF5G3MFlgwlX8ssU7XcuF9t3151bNBp00dTy1WMe8",
//             "url": "https://www.linkedin.com/company/infosys/life",
//             "staffCountRange": {},
//             "headquarter": {}
//         },
//         "location": "Bengaluru East, Karnataka, India (On-site)",
//         "postAt": "2025-03-18 07:25:09 +0000 UTC",
//         "postedTimestamp": 1742282709000
//     }
// ]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

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
      (selectedSkill ? job.skills.includes(selectedSkill) : true) &&
      (selectedStatus ? job.state === selectedStatus : true)
    );
  });

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
                <Select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)} label="Skill">
                  <MenuItem value="">All</MenuItem>
                  {Array.from(new Set(jobs.flatMap((job) => job.skills.split(", ")))).map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
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
                <ListItem onClick={() => setSelectedJob(job)}>
                  <ListItemAvatar>
                    <Avatar src={job.companyLogo} alt={job.company} />
                  </ListItemAvatar>
                  <ListItemText primary={job.title} secondary={`${job.company} - ${job.duration} (${job.state})`} />
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
                  <Typography variant="subtitle1" color="text.secondary">{selectedJob.company}</Typography>
                  <Typography variant="body2">Location: {selectedJob.location}</Typography>
                  <Typography variant="body2">Duration: {selectedJob.duration}</Typography>
                  <Typography variant="body2">Status: {selectedJob.state}</Typography>
                  <Typography variant="body2">Skills: {selectedJob.skills}</Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>{selectedJob.description}</Typography>
                  <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} href={selectedJob.url} target="_blank">
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
