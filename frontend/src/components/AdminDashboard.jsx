import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Users", value: 500 },
  { name: "Job Searches", value: 300 },
  { name: "Job Applications", value: 200 },
  { name: "Downloads", value: 250 },
];

const COLORS = ["#8c7ae6", "#192a56", "#40739e", "#7f8fa6"];

const AdminDashboard = () => {
  return (
    <Box sx={{ minHeight: "100vh", background: "#F5F5F5", color: "#333", py: 6, px: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{
          mb: 4,
          background: "linear-gradient(to right, #4F4F4F 20%, aqua 60%, #A9A9A9 10%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Admin Dashboard
      </Typography>

      {/* Pie Chart Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
        <ResponsiveContainer width="50%" height={320}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
              
              
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Analytics Cards */}
      <Grid container spacing={4} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 3,
                background: "#ffffff",
                color: "#2C3A47",
                boxShadow: 4,
                borderRadius: 3,
                textAlign: "center",
                transition: "0.3s",
                height: "60%",
                "&:hover": { boxShadow: 8, transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.2rem" }}>
                  {item.name}
                </Typography>
                <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, color: "#45A29E" }}>
                  {item.value}
                </Typography>
                {item.name === "Downloads" && (
                  <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 4,  paddingBottom:"16%"}}>
                    <Typography variant="body1" fontWeight="bold" sx={{ color: "#4B6587" }}>
                      Premium: 120
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" sx={{ color: "#4B6587" }}>
                      Free: 130
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ fontSize: "1rem", fontWeight: "bold", px: 4, py: 1.5 }}>
          View Payment Details
        </Button>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
