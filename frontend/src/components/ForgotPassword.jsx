import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState("email");
  const navigate=useNavigate();

  const handleSendOtp = () => {
 
    toast.info("Checking email....", {  position: "top-center" }); // Show info message
    axios
      .post("http://localhost:3000/forgot-password/send-otp", { email }) // Send email as an object
      .then((res) => {
        if (!res.data.success) {
          toast.error(res.data.message, {
            autoClose: 3000,
            position: "top-center",
          });
        } else {
          toast.success(res.data.message, {
            autoClose: 3000,
            position: "top-center",
          });
        }

      
        setStep("otp"); // Move to the OTP step
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response?.data?.message || "An error occurred", {
          autoClose: 2000,
          position: "top-center",
        }); // Show error message
      });
  };

  const handleVerifyOtp = () => {
    axios
      .post("http://localhost:3000/forgot-password/verify-otp", { email, otp })
      .then((res) => {
        if (!res.data.success) {
          toast.error(res.data.message, {autoClose: 2000, position: "top-center"});
        } else {
          toast.success(res.data.message, {autoClose: 2000, position: "top-center"}); // Show success message
        }

        setStep("reset");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response?.data?.message || "An error occurred",{autoClose:2000,position:"top-center"}); // Show error message
      });
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {

      toast.warning("Passwords do not match", {autoClose: 2000, position: "top-center"}); // Show warning message

      return;
    }
    axios
      .post("http://localhost:3000/forgot-password/reset-password", {
        email,
        newPassword,
      })
      .then((res) => {
        if(!res.data.success){
          toast.error(res.data.message, {autoClose: 2000, position: "top-center"});
        }else{
          toast.success(res.data.message, {autoClose: 1500, position: "top-center",onClose:()=>{navigate('/login')}}); // Show success message
          
        }
        
 
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response?.data?.message || "An error occurred",{autoClose:2000,position:'top-center'}); // Show error message
      });
  };

  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #FFDEE9, #B5FFFC)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <ToastContainer />
      <Paper
        elevation={12}
        sx={{
          p: 4,
          borderRadius: 3,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          background: "#fff",
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <LockResetIcon sx={{ fontSize: 50, color: "#6E8EF1" }} />
        </Box>
        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          {step === "email"
            ? "Enter your email to receive a reset OTP."
            : step === "otp"
            ? "Enter the OTP sent to your email."
            : "Set a new password for your account."}
        </Typography>
        {step === "email" ? (
          <>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSendOtp}
              disabled={!email}
              sx={{
                py: 1.2,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Send OTP
            </Button>
          </>
        ) : step === "otp" ? (
          <>
            <TextField
              fullWidth
              label="Enter OTP"
              variant="outlined"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleVerifyOtp}
              disabled={!otp}
              sx={{
                py: 1.2,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Confirm OTP
            </Button>
          </>
        ) : (
          <>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleResetPassword}
              disabled={!newPassword || !confirmPassword}
              sx={{
                py: 1.2,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Reset Password
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
