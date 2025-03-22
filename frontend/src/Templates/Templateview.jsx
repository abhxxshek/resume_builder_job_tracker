import React, { useState } from "react";
import { 
  Grid, 
  Typography, 
  Box, 
  Paper, 
  Container, 
  Button, 
  Tabs, 
  Tab,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import Template5 from './Template5';
import Template6 from "./Template6";
import Template7 from "./Template7";
import Template8 from "./Template8";
import Template10 from "./Template10";
import Template9 from "./Template9";

const TemplateView = ({ resumeData = {} }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  // Define template categories
  const categories = {
    all: "All Templates",
    professional: "Professional",
    modern: "Modern",
    creative: "Creative"
  };

  // Assign categories to templates
  const templateCategories = {
    1: ["professional"],
    2: ["modern", "professional"],
    3: ["professional"],
    4: ["creative"],
    5: ["modern"],
    6: ["professional", "modern"],
    7: ["creative"],
    8: ["modern"],
    9: ["creative", "modern"],
    10: ["professional"]
  };

  const handleTemplateSelect = (template) => {
    navigate(`/layout2/${template}`);
  };

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };

  // Filter templates by category
  const filteredTemplates = activeCategory === "all" 
    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
        templateNum => templateCategories[templateNum].includes(activeCategory)
      );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ 
          fontWeight: 600, 
          color: "#2c3e50"
        }}>
          Choose Your Resume Template
        </Typography>
        <Typography variant="subtitle1" sx={{ 
          maxWidth: "700px", 
          mx: "auto", 
          color: "#546e7a", 
          mb: 3 
        }}>
          Select from our professionally designed templates to create a standout resume that will impress employers
        </Typography>
        
        <Tabs 
          value={activeCategory} 
          onChange={handleCategoryChange} 
          sx={{ 
            mb: 2,
            "& .MuiTabs-indicator": {
              backgroundColor: "#2c3e50",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#2c3e50",
              fontWeight: 600,
            }
          }}
          centered
        >
          {Object.entries(categories).map(([key, label]) => (
            <Tab 
              key={key} 
              value={key} 
              label={label}
              sx={{ 
                textTransform: "none", 
                fontSize: "1rem",
                fontWeight: 500,
              }} 
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {filteredTemplates.map((templateNum) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`Template${templateNum}`}>
            <Paper
              elevation={0}
              onClick={() => handleTemplateSelect(`Template${templateNum}`)}
              sx={{
                cursor: 'pointer',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'white',
                height: '420px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transform: 'translateY(-4px)',
                  '& .template-select-button': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }
                }
              }}
            >
              {/* Template Categories */}
              <Box sx={{ 
                position: 'absolute', 
                top: 8, 
                left: 8, 
                zIndex: 2,
                display: 'flex',
                gap: 0.5
              }}>
                {templateCategories[templateNum].map(category => (
                  <Chip 
                    key={category} 
                    label={categories[category]} 
                    size="small"
                    sx={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '0.675rem',
                      height: '22px'
                    }}
                  />
                ))}
              </Box>

              {/* Template Preview with Paper-like styling */}
              <Box sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: '#f8f9fa',
                padding: 2
              }}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Box sx={{
                    transform: 'scale(0.38)',
                    transformOrigin: 'center center',
                    width: templateNum === 2 ? '230mm' : '210mm', // Adjust for the wider Template2
                    height: 'auto',
                    minHeight: '297mm',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
                    borderRadius: '2px',
                    backgroundColor: 'white'
                  }}>
                    {templateNum === 1 && <Template1 resumeData={resumeData} />}
                    {templateNum === 2 && <Template2 resumeData={resumeData} />}
                    {templateNum === 3 && <Template3 resumeData={resumeData} />}
                    {templateNum === 4 && <Template4 resumeData={resumeData} />}
                    {templateNum === 5 && <Template5 resumeData={resumeData} />}
                    {templateNum === 6 && <Template6 resumeData={resumeData} />}
                    {templateNum === 7 && <Template7 resumeData={resumeData} />}
                    {templateNum === 8 && <Template8 resumeData={resumeData} />}
                    {templateNum === 9 && <Template9 resumeData={resumeData} />}
                    {templateNum === 10 && <Template10 resumeData={resumeData} />}
                  </Box>
                </Box>
              </Box>

              {/* Template info and select button */}
              <Box sx={{
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #f0f0f0',
                backgroundColor: 'white'
              }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                    Template {templateNum}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#546e7a' }}>
                    {templateNum % 2 === 0 ? 'Modern' : 'Professional'} design
                  </Typography>
                </Box>
                <Button 
                  variant="contained"
                  disableElevation
                  className="template-select-button"
                  sx={{
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: '8px',
                    padding: '4px 12px',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    opacity: 0,
                    transform: 'translateY(6px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#34495e',
                    }
                  }}
                >
                  Use
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TemplateView;