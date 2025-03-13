import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import Template5 from './Template5';

const TemplateView = ({ resumeData = {} }) => {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    navigate(`/layout2/${template}`);
  };

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ 
      padding: 3,
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      {[1, 2, 3, 4, 5].map((templateNum) => (
        <Grid item xs={12} sm={6} md={4} key={`Template${templateNum}`}>
          <Box
            onClick={() => handleTemplateSelect(`Template${templateNum}`)}
            sx={{
              cursor: 'pointer',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              padding: '8px',
              backgroundColor: 'white',
              height: '500px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.2s ease',
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                borderColor: '#bdbdbd'
              }
            }}
          >
            <Box sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <Box sx={{
                position: 'absolute',
                transform: 'scale(0.38)',
                transformOrigin: 'center center',
                width: '210mm',
                height: '297mm'
              }}>
                {templateNum === 1 && <Template1 resumeData={resumeData} />}
                {templateNum === 2 && <Template2 resumeData={resumeData} />}
                {templateNum === 3 && <Template3 resumeData={resumeData} />}
                {templateNum === 4 && <Template4 resumeData={resumeData} />}
                {templateNum === 5 && <Template5 resumeData={resumeData} />}
              </Box>
            </Box>
            <Typography 
              variant="subtitle1" 
              align="center" 
              sx={{ 
                fontWeight: 500,
                color: '#424242',
                borderTop: '1px solid #f0f0f0',
                paddingTop: 1,
                marginTop: 1
              }}
            >
              Template {templateNum}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TemplateView;