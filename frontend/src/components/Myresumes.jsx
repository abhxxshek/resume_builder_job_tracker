// import React, { useEffect, useState } from "react";
// import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
// import axiosInstance from "../../axiosInterceptor";

// const Myresumes = () => {
//   const [savedPdfs, setSavedPdfs] = useState([]);
//   const user = sessionStorage.getItem("userInfo");
//   const decoded = jwtDecode(user);
//   const user_id = decoded.id;

//   useEffect(() => {
//     axiosInstance
//       .get(`/profile/get-saved-pdfs/${user_id}`)
//       .then((res) => setSavedPdfs(res.data))
//       .catch(() => console.error("Failed to fetch saved PDFs"));
//   }, [user_id]);

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h5">Saved Resumes</Typography>
//       <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
//         {savedPdfs.map((pdf) => (
//           <Card key={pdf._id} sx={{ width: 250 }}>
//             <CardMedia component="img" height="140" image={pdf.previewImage} alt="Resume Preview" />
//             <CardContent>
//               <Typography variant="subtitle1">{pdf.fileName}</Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Myresumes;


