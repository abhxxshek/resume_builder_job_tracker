import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TemplateView = ({ resumeData = {} }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle template selection
  const handleTemplateSelect = (template) => {
    // Navigate to Layout2 with the selected template as a URL parameter
    navigate(`/layout2/${template}`);
  };

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ padding: "20px" }}>
      {/* Template 1 Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
          onClick={() => handleTemplateSelect("Template1")}
        >
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/300" // Placeholder image for Template 1
            alt="Template 1"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Template 1
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A clean and professional design.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Template 2 Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
          onClick={() => handleTemplateSelect("Template2")}
        >
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/300" // Placeholder image for Template 2
            alt="Template 2"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Template 2
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A modern and creative design.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
          onClick={() => handleTemplateSelect("Template3")}
        >
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/300" // Placeholder image for Template 2
            alt="Template 2"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Template 3
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A modern and creative design.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
          onClick={() => handleTemplateSelect("Template4")}
        >
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/300" // Placeholder image for Template 2
            alt="Template 4"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Template 4
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A modern and creative design.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
          onClick={() => handleTemplateSelect("Template5")}
        >
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/300" // Placeholder image for Template 2
            alt="Template 5"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Template 5
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A modern and creative design.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TemplateView;