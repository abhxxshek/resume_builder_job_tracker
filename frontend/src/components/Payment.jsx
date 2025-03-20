import React from "react";
import { Container, Typography, Button, Card, CardContent, Grid, Box, Chip } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";

const Payment = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Payment Header */}
      <Card sx={{ p: 3, mb: 4, background: "#2c3e50", color: "white", textAlign: "center", borderRadius: "12px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Payment</Typography>
        <Typography variant="subtitle1">Manage your premium templates and purchases in one place</Typography>
      </Card>

      <Grid container spacing={3}>
        {/* My Resumes Section */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: "12px", p: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Card
                sx={{
                  p: 2,
                  textAlign: "center",
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  maxWidth: "100%",
                }}
              >
                <img
                  src="src/components/images/res.png"
                  alt="Resume Preview"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "500px",
                    borderRadius: "8px",
                    objectFit: "cover",
                    display: "block",
                    margin: "auto",
                  }}
                />
              </Card>
            </CardContent>
          </Card>
        </Grid>

        {/* Premium Templates Purchase */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              background: "#f8f9fa",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" flexDirection="column">
                {/* <Chip label="Special Offer!" color="success" sx={{ mb: 2, fontWeight: "bold" }} /> */}
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>Premium Templates</Typography>
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
              <Typography variant="h6" sx={{ color: "red", fontWeight: "bold" }}>₹199</Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 2 }}>
                Purchase this premium template for an enhanced resume design.
              </Typography>
              <Button variant="contained" color="#636e72" sx={{ fontWeight: "bold", borderRadius: "8px", px: 4, py: 1.5, mb: 2 }}>
                Buy Now
              </Button>
              <Button variant="outlined" color="primary" sx={{ fontWeight: "bold", borderRadius: "8px", px: 3, py: 1 }}>
                View More Templates
              </Button>

              {/* Payment Icons */}
              <Box mt={3}>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>Secure Payment Methods</Typography>
                <Box display="flex" justifyContent="center" gap={2}>
                  <PaymentIcon sx={{ color: "#636e72", fontSize: 32 }} />
                  <CreditCardIcon sx={{ color: "#636e72", fontSize: 32 }} />
                  <SecurityIcon sx={{ color: "#636e72", fontSize: 32 }} />
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
