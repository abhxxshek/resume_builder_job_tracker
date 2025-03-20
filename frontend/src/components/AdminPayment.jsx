import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
} from "@mui/material";

const paymentData = [
  {
    id: 1,
    resumeName: "Software Engineer Resume",
    buyerName: "John Doe",
    email: "johndoe@example.com",
    amount: "$29.99",
    date: "March 18, 2025",
  },
  {
    id: 2,
    resumeName: "Data Scientist Resume",
    buyerName: "Jane Smith",
    email: "janesmith@example.com",
    amount: "$39.99",
    date: "March 17, 2025",
  },
];

const AdminPayment = () => {
  const [open, setOpen] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const handleOpen = (receipt) => {
    setSelectedReceipt(receipt);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReceipt(null);
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#F5F5F5", py: 6, px: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, color: "#333" }}
      >
        Payment Details
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#40739e" }}>
              <TableCell sx={{ color: "#fff" }}>Resume Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Buyer Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Email</TableCell>
              <TableCell sx={{ color: "#fff" }}>Amount</TableCell>
              <TableCell sx={{ color: "#fff" }}>Purchase Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.resumeName}</TableCell>
                <TableCell>{row.buyerName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(row)}
                  >
                     Receipt
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Receipt Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {selectedReceipt && (
            <>
              <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
                Payment Receipt
              </Typography>
              <Typography><strong>Resume Name:</strong> {selectedReceipt.resumeName}</Typography>
              <Typography><strong>Buyer Name:</strong> {selectedReceipt.buyerName}</Typography>
              <Typography><strong>Email:</strong> {selectedReceipt.email}</Typography>
              <Typography><strong>Amount Paid:</strong> {selectedReceipt.amount}</Typography>
              <Typography><strong>Purchase Date:</strong> {selectedReceipt.date}</Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button variant="contained" onClick={handleClose}>Close</Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminPayment;
