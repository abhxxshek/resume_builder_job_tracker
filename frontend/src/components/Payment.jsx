import React, { useState } from "react";
import { Container, Typography, Button, Card, CardContent, Grid, Box, Chip, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Import all templates
import Template1 from '../Templates/Template1';
import Template2 from '../Templates/Template2';
import Template3 from '../Templates/Template3';
import Template4 from '../Templates/Template4';
import Template5 from '../Templates/Template5';
import Template6 from '../Templates/Template6';
import Template7 from '../Templates/Template7';
import Template8 from '../Templates/Template8';
import Template9 from '../Templates/Template9';
import Template10 from '../Templates/Template10';

const Payment = () => {
  // Sample resume data for preview
  const sampleResumeData = {
    firstName: "John",
    lastName: "Doe",
    designation: "Software Engineer",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    city: "New York",
    address: "123 Main St",
    careerObjective: "To excel in software development and contribute to innovative projects."
  };

  // State to track which template is being previewed
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  // Template rendering function
  const renderTemplate = (templateNum) => {
    switch(templateNum) {
      case 1: return <Template1 resumeData={sampleResumeData} />;
      case 2: return <Template2 resumeData={sampleResumeData} />;
      case 3: return <Template3 resumeData={sampleResumeData} />;
      case 4: return <Template4 resumeData={sampleResumeData} />;
      case 5: return <Template5 resumeData={sampleResumeData} />;
      case 6: return <Template6 resumeData={sampleResumeData} />;
      case 7: return <Template7 resumeData={sampleResumeData} />;
      case 8: return <Template8 resumeData={sampleResumeData} />;
      case 9: return <Template9 resumeData={sampleResumeData} />;
      case 10: return <Template10 resumeData={sampleResumeData} />;
      default: return <Template1 resumeData={sampleResumeData} />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Payment Header */}
      <Card sx={{ p: 3, mb: 4, background: "#2c3e50", color: "white", textAlign: "center", borderRadius: "12px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Premium Templates</Typography>
        <Typography variant="subtitle1">Upgrade your resume with our professionally designed templates</Typography>
      </Card>

      <Grid container spacing={3}>
        {/* Template Preview Section */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: "12px", p: 0, overflow: "hidden", height: "100%" }}>
            <Box sx={{ 
              p: 2, 
              borderBottom: "1px solid #eee", 
              backgroundColor: "#f8f9fa", 
              display: "flex", 
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#2c3e50" }}>
                Template Preview
              </Typography>
              
              <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                <InputLabel id="template-select-label">Select Template</InputLabel>
                <Select
                  labelId="template-select-label"
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  label="Select Template"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <MenuItem key={num} value={num}>Template {num}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              backgroundColor: "#f8f9fa",
              p: 3,
              height: "calc(100% - 64px)",
              overflow: "hidden"
            }}>
              <Box sx={{ 
                position: "relative",
                width: "100%",
                height: "500px", 
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}>
                <Box sx={{
                  transform: "scale(0.45)",
                  transformOrigin: "center center",
                  width: selectedTemplate === 2 ? "230mm" : "210mm",
                  height: "auto",
                  minHeight: "297mm"
                }}>
                  {renderTemplate(selectedTemplate)}
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Premium Templates Purchase */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              height: "100%",
              display: "flex", 
              flexDirection: "column"
            }}
          >
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
                <Chip 
                  label="Premium" 
                  color="primary" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: "bold", 
                    backgroundColor: "#2c3e50" 
                  }} 
                />
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  Access All Templates
                </Typography>
                <img
                  src="src/components/images/human-resources.png"
                  alt="Premium Template"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
              </Box>
              
              <Box sx={{ mb: 3, textAlign: "left" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
                  What's included:
                </Typography>
                {[
                  "All 10 professional templates",
                  "Priority customer support",
                  "Free updates for 1 year",
                  "Export to PDF, Word, and more"
                ].map((feature, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CheckCircleIcon sx={{ color: "#2c3e50", mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ mt: "auto" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "baseline", mb: 2 }}>
                  <Typography variant="h4" sx={{ color: "#2c3e50", fontWeight: "bold" }}>
                    ₹199
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", ml: 1, textDecoration: "line-through" }}>
                    ₹499
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  One-time payment, no recurring fees
                </Typography>
                
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    fontWeight: "bold", 
                    borderRadius: "8px", 
                    py: 1.5, 
                    mb: 2,
                    backgroundColor: "#2c3e50",
                    "&:hover": {
                      backgroundColor: "#34495e" 
                    }
                  }}
                >
                  Upgrade Now
                </Button>
                
                {/* Payment Icons */}
                <Box>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                    Secure Payment Methods
                  </Typography>
                  <Box display="flex" justifyContent="center" gap={2}>
                    <PaymentIcon sx={{ color: "#636e72", fontSize: 32 }} />
                    <CreditCardIcon sx={{ color: "#636e72", fontSize: 32 }} />
                    <SecurityIcon sx={{ color: "#636e72", fontSize: 32 }} />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
