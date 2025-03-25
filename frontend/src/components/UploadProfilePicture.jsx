import React, { useState, useEffect } from "react";
import { Button, Avatar, Box, Typography, CardMedia, Card, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UploadProfilePicture = ({ onImageUpload }) => {
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) setProfilePic(storedImage);
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profilepicture");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dxgwlnejd/image/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Image upload failed");

      const data = await response.json();
      const imageUrl = data.secure_url;

      localStorage.setItem("profilePicture", imageUrl);
      setProfilePic(imageUrl);
      onImageUpload(imageUrl); // Notify parent component
      
      // Dispatch storage event to notify other components
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  const handleRemovePicture = () => {
    localStorage.removeItem("profilePicture");
    setProfilePic("");
    onImageUpload(""); // Notify parent component
    
    // Dispatch storage event to notify other components
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Box textAlign="center" sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload Profile Picture
      </Typography>

      {profilePic ? (
        <Card
          sx={{
            width: 120,
            height: 120,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
            mx: "auto",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={profilePic}
            alt="Profile"
            sx={{ width: "100%", height: "100%" }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            }}
            onClick={handleRemovePicture}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ) : (
        <>
          <input
            accept="image/*"
            type="file"
            id="upload-profile-pic"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <label htmlFor="upload-profile-pic">
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: 2,
                border: "2px dashed gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                cursor: "pointer",
                "&:hover": { borderColor: "black" },
              }}
            >
              <Typography variant="body2" color="gray">
                Click to Upload
              </Typography>
            </Box>
          </label>
        </>
      )}
    </Box>
  );
};

export default UploadProfilePicture;