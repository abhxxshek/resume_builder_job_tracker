import React, { useState, useEffect } from "react";
import { Button, Avatar } from "@mui/material";

const UploadProfilePicture = ({ onImageUpload }) => {
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    // Fetch the image from localStorage when the page loads
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) setProfilePic(storedImage);
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with Cloudinary upload preset

    // Uploading to Cloudinary
    const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    const imageUrl = data.secure_url;

    // Save to localStorage
    localStorage.setItem("profilePicture", imageUrl);
    setProfilePic(imageUrl);
    onImageUpload(imageUrl);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {profilePic && <Avatar src={profilePic} alt="Profile Picture" sx={{ width: 100, height: 100 }} />}
      <Button variant="contained" onClick={() => setProfilePic("")}>
        Remove Picture
      </Button>
    </div>
  );
};

export default UploadProfilePicture;
