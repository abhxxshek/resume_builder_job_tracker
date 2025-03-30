import React, { useState, useEffect } from "react";
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
import dayjs from "dayjs";

import axiosInstance from "../../axiosInterceptor";

const UserPayments = () => {
    const [paymentData, setPaymentData] = useState([]);
      const [open, setOpen] = useState(false);
      const [selectedReceipt, setSelectedReceipt] = useState(null);
    
      // Fetch payment data when the component mounts
      useEffect(() => {
        axiosInstance
          .get('/user/payment-details')
          .then((res) => {
            
            setPaymentData(res.data);
          })
          .catch((error) => {
            alert('Failed to fetch details');
          });
      }, []);
    
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
    
          <TableContainer component={Paper} sx={{ maxWidth: "100%", margin: "auto" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#40739e" }}>
                 
                  <TableCell sx={{ color: "#fff",textAlign:"center" }}>Template Name</TableCell>
                  <TableCell sx={{ color: "#fff",textAlign:"center" }}>Buyer Name</TableCell>
                  <TableCell sx={{ color: "#fff",textAlign:"center" }}>Email</TableCell>
                  <TableCell sx={{ color: "#fff",textAlign:"center" }}>Amount</TableCell>
                  <TableCell sx={{ color: "#fff",textAlign:"center" }}>Transaction ID</TableCell>
                  <TableCell sx={{ color: "#fff",textAlign:"center" }}>Method</TableCell>
                  <TableCell sx={{ color: "#fff" ,textAlign:"center"}}>Purchase Date and time</TableCell>
                  <TableCell sx={{ color: "#fff",textAlign:"center" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paymentData.map((row) => (
                  <TableRow key={row.id}>
                    
                    <TableCell sx={{textAlign:"center"}}>{row.template}</TableCell>
                    <TableCell sx={{textAlign:"center"}}>{row.buyerName}</TableCell>
                    <TableCell sx={{textAlign:"center"}}>{row.email}</TableCell>
                    <TableCell sx={{textAlign:"center"}}>₹{row.amount}</TableCell>
                    <TableCell sx={{textAlign:"center"}}>{row.paymentId}</TableCell>
                    <TableCell sx={{textAlign:"center"}}>{row.method}</TableCell>
                    <TableCell sx={{textAlign:"center"}}>{dayjs(row.date).format("DD-MM-YYYY")}</TableCell>
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
                  <Typography><strong>Amount Paid:</strong> ₹{selectedReceipt.amount}</Typography>
                  <Typography><strong>Purchase Date:</strong> {dayjs(selectedReceipt.date).format("DD-MM-YYYY")}</Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Button variant="contained" onClick={handleClose}>Close</Button>
                  </Box>
                </>
              )}
            </Box>
          </Modal>
        </Box>
  )
}

export default UserPayments