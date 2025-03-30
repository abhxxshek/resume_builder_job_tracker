import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInterceptor";
import { toast, ToastContainer } from "react-toastify";

// Import all templates
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";
import Template7 from "../Templates/Template7";
import Template8 from "../Templates/Template8";
import Template9 from "../Templates/Template9";
import Template10 from "../Templates/Template10";
import { jwtDecode } from "jwt-decode";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const [templateName, setTemplateName] = useState("");




  //decode token
  const user = sessionStorage.getItem("userInfo");
  const decoded = jwtDecode(user);
  const userEmail=decoded.email;
  

  // Get template from URL params if coming from template selection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const templateParam = params.get('template');
    
    if (templateParam) {
      checkIsPaid(templateParam);
      setTemplateName(templateParam);
      const templateNum = parseInt(templateParam.replace('Template', ''));
      if (!isNaN(templateNum) && templateNum >= 1 && templateNum <= 10) {
        setSelectedTemplate(templateNum);
      }
    }
  }, [location.search]);

  //check if user has paid for the template
  const[isPaid,setIsPaid]=useState(false);

  useEffect(() => {
    checkIsPaid();
  }, [isPaid]);
  
  function checkIsPaid(templateParam){
    axiosInstance.post('/template/payment-status',{userEmail,templateParam})
    .then((res) => {
      if(res.data.success){
        
        setIsPaid(true);
      }
    })
    .catch((error) => {
      console.error("Error fetching payment status:", error);
    });
  }

  // Sample resume data for preview
  const sampleResumeData = {
    firstName: "John",
    lastName: "Doe",
    designation: "Software Engineer",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    city: "New York",
    address: "123 Main St",
    careerObjective: "To excel in software development and contribute to innovative projects.",
  };

  // Template rendering function
  const renderTemplate = (templateNum) => {
    switch (templateNum) {
      case 1: return <Template1 resumeData={sampleResumeData} />;
      case 2: return <Template2 resumeData={sampleResumeData} />;
      case 3: return <Template3 resumeData={sampleResumeData} />;
      case 4: return <Template4 resumeData={sampleResumeData} />;
      case 5: return <Template5 resumeData={sampleResumeData} />;
      case 6: return <Template6 resumeData={sampleResumeData} />;
      case 7: return <Template7 resumeData={sampleResumeData} />;
      case 8: return <Template8 resumeData={sampleResumeData} />;
      case 9: return <Template9 resumeData={sampleResumeData} />;
      case 10: return <Template10 resumeData={sampleResumeData} />;
      default: return <Template1 resumeData={sampleResumeData} />;
    }
  };

   //payment gateway and saving transaction details  
  const [responseId, setResponseId] = useState("");
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  }

  const createRazorpayOrder = (amount) => {
    let data = JSON.stringify({
      amount: amount*100 ,
      currency: "INR",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/payment/orders",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axiosInstance
      .request(config)
      .then((response) => {
     

        handleRazorpayScreen(response.data.amount);
      })
      .catch((error) => {
        console.log("error at", error);
      });
  };

  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
    if (!res) {
      toast.error("Failed to load Razorpay.", { autoClose: 2000, position: "top-center" });
      return;
    }
  
    const options = {
      key: import.meta.env.VITE_KEYID,
      amount,
      currency: "INR",
      name: "Resume Builder",
      description: "Premium Resume Templates",
      image: "/logo.png",
      handler: async function (response) {
        setResponseId(response.razorpay_payment_id);
        await paymentFetch(response.razorpay_payment_id);
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      theme: {
        color: "#0d6efd",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  
  const paymentFetch = async (paymentId) => {
    try {
      const res = await axiosInstance.get(`http://localhost:3000/payment/paymentId/${paymentId}`);
      const transactionId=paymentId;
      
   
      await savePayment(res.data,transactionId,templateName);
    } catch (error) {
      console.log("Error fetching payment:", error);
      toast.error("Payment verification failed!", { autoClose: 2000, position: "top-center" });
    }
  };
  
  const savePayment = async (paymentData,transactionId,templateName) => {
    try {
      
      const res = await axiosInstance.post(`http://localhost:3000/payment/save-payment-details`, {paymentData,transactionId,templateName});
      if (!res.data.success) {
        toast.error(res.data.message, { autoClose: 2000, position: "top-center" });
        return;
      }
      toast.success(res.data.message, { autoClose: 2000, position: "top-center" });
      setIsPaid(true);
    } catch (error) {
      console.log("Error saving payment:", error);
      toast.error("Failed to save payment details.", { autoClose: 2000, position: "top-center" });
    }
  };
  

  



  const handleTemplateUse = () => {
    navigate(`/layout2/Template${selectedTemplate}`);
  };

  return (
    <>
      <ToastContainer />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Payment Header */}
        <Card sx={{
          p: 3,
          mb: 4,
          background: "#2c3e50",
          color: "white",
          textAlign: "center",
          borderRadius: "12px",
        }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {isPaid ? "Template Unlocked!" : "Upgrade to Premium Template"}
          </Typography>
          <Typography variant="subtitle1">
            {isPaid 
              ?` You now have access to Template ${selectedTemplate}`
              : "Get full access to  premium template"}
          </Typography>
        </Card>

        <Grid container spacing={3}>
          {/* Template Preview Section */}
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: "12px", p: 0, overflow: "hidden", height: "100%" }}>
              <Box sx={{
                p: 2,
                borderBottom: "1px solid #eee",
                backgroundColor: "#f8f9fa",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#2c3e50" }}>
                  {`Template ${selectedTemplate} Preview`}
                  {selectedTemplate >= 6 && (
                    <Chip 
                      label="Premium" 
                      size="small" 
                      icon={<LockIcon fontSize="small" />}
                      sx={{ ml: 1, backgroundColor: '#FFD700', color: '#2c3e50' }}
                    />
                  )}
                </Typography>
              </Box>

              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
                p: 3,
                height: "calc(100% - 64px)",
                overflow: "hidden",
              }}>
                <Box sx={{
                  position: "relative",
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}>
                  <Box sx={{
                    transform: "scale(0.45)",
                    transformOrigin: "center center",
                    width: selectedTemplate === 2 ? "230mm" : "210mm",
                    height: "auto",
                    minHeight: "297mm",
                  }}>
                    {renderTemplate(selectedTemplate)}
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Payment Section */}
          <Grid item xs={12} md={4}>
            <Card sx={{
              p: 3,
              textAlign: "center",
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {isPaid ? (
                  <>
                    <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
                      
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        You now have access to Template {selectedTemplate}
                      </Typography>
                    </Box>
                  
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        fontWeight: "bold",
                        borderRadius: "8px",
                        py: 1.5,
                        mb: 2,
                        backgroundColor: "#2c3e50",
                        "&:hover": { backgroundColor: "#34495e" },
                      }}
                      onClick={handleTemplateUse}
                    >
                      Use Template {selectedTemplate}
                    </Button>

                    
                  </>
                ) : (
                  <>
                    <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
                      <Chip
                        label={selectedTemplate >= 6 ? "Premium" : "Standard"}
                        color={selectedTemplate >= 6 ? "primary" : "default"}
                        sx={{
                          mb: 2,
                          fontWeight: "bold",
                          backgroundColor: selectedTemplate >= 6 ? "#2c3e50" : "#e0e0e0",
                          color: selectedTemplate >= 6 ? "white" : "#2c3e50",
                        }}
                      />
                      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                        {selectedTemplate >= 6 
                          ? "Unlock Premium Template" 
                          : "Standard Template Access"}
                      </Typography>
                     
                    </Box>


                    <Box sx={{ mt: "auto" }}>
                      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "baseline", mb: 2 }}>
                        <Typography variant="h4" sx={{ color: "#2c3e50", fontWeight: "bold" }}>
                          ₹{selectedTemplate >= 6 ? "199" : "0"}
                        </Typography>
                        {selectedTemplate >= 6 && (
                          <Typography variant="body2" sx={{ color: "text.secondary", ml: 1, textDecoration: "line-through" }}>
                            ₹299
                          </Typography>
                        )}
                      </Box>

                     

                      {loading ? (
                        <Button
                          variant="contained"
                          fullWidth
                          disabled
                          sx={{
                            fontWeight: "bold",
                            borderRadius: "8px",
                            py: 1.5,
                            mb: 2,
                            backgroundColor: "#2c3e50",
                          }}
                        >
                          <CircularProgress size={24} sx={{ color: "white" }} />
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            fontWeight: "bold",
                            borderRadius: "8px",
                            py: 1.5,
                            mb: 2,
                            backgroundColor: "#2c3e50",
                            "&:hover": { backgroundColor: "#34495e" },
                          }}
                          onClick={() => selectedTemplate >= 6 ? createRazorpayOrder(199) : handleTemplateUse()}
                        >
                          {selectedTemplate >= 6 ? "Buy Now" : "Use Template"}
                        </Button>
                      )}

                      <Box>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                          Secure Payment Methods
                        </Typography>
                        <Box display="flex" justifyContent="center" gap={2}>
                          <PaymentIcon sx={{ color: "#636e72", fontSize: 32 }} />
                          <CreditCardIcon sx={{ color: "#636e72", fontSize: 32 }} />
                          <SecurityIcon sx={{ color: "#636e72", fontSize: 32 }} />
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Payment;