import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import FieldSelector from "./FieldSelector";
import FieldSidebar from "./FieldSidebar";
import { div } from "framer-motion/client";

const Layout2 = () => {
  const [selectedField, setSelectedField] = useState("About");

  return (
    // <Container maxWidth="lg">
    //   <Grid container spacing={2} sx={{ mt: 5 }}>
    //     <Grid item xs={12} md={3}>
    //       <FieldSidebar selectedField={selectedField} setSelectedField={setSelectedField} />
    //     </Grid>
    //     <Grid item xs={12} md={9}>
    //       <FieldSelector selectedField={selectedField} />
    //     </Grid>
    //   </Grid>
    // </Container>
    <Box>
        <Grid container columnSpacing={2}>
            <Grid item xs={12} md={2}><FieldSidebar selectedField={selectedField} setSelectedField={setSelectedField} /></Grid>
            <Grid item xs={12} md={5}><FieldSelector selectedField={selectedField} /></Grid>
            <Grid item xs={12} md={5}> Template</Grid>
        </Grid>
    </Box>
  );
};

export default Layout2;
