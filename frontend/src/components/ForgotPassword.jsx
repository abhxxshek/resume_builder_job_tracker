import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState("email");

  const handleSendOtp = () => {
    console.log("Sending OTP to", email);
    setStep("otp");
  };

  const handleVerifyOtp = () => {
    console.log("Verifying OTP", otp);
    setStep("reset");
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Resetting password", newPassword);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #FFDEE9, #B5FFFC)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
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
          {step === "email" ? "Enter your email to receive a reset OTP." : step === "otp" ? "Enter the OTP sent to your email." : "Set a new password for your account."}
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
              sx={{ py: 1.2, fontSize: "1rem", fontWeight: 600, borderRadius: 2 }}
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
              sx={{ py: 1.2, fontSize: "1rem", fontWeight: 600, borderRadius: 2 }}
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
              sx={{ py: 1.2, fontSize: "1rem", fontWeight: 600, borderRadius: 2 }}
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
