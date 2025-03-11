import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import FieldSelector from "./FieldSelector";
import FieldSidebar from "./FieldSidebar";


const Layout2 = () => {
  const [selectedField, setSelectedField] = useState("About");

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={1.5} sx={{ borderRight: "1px solid lightgrey" }}>
          <FieldSidebar
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ borderRight: "1px solid lightgrey" }}>
          <Box
            sx={{
              maxHeight: "600px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none", // Hide scrollbar
              },
            }}
          >
            <FieldSelector selectedField={selectedField} />
          </Box>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Box
            sx={{
              maxHeight: "600px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none", // Hide scrollbar
              },
            }}
          >
            Template
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout2;
