import React, { useState } from "react";

const Template1 = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@gmail.com",
    phone: "111-222-3333",
    address: "123 Main St, San Francisco, CA",
    skills: "JavaScript, React.js, Node.js",
    experience: "Front-End Developer at Tech Solutions (2019-2023)",
    education: "Bachelor's in Computer Science - Sample Institute (2015-2019)",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      minHeight: "100vh",
      backgroundColor: "#f0f2f5",
      padding: "20px",
      gap: "20px",
    },
    formContainer: {
      width: "40%",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    resumeContainer: {
      width: "60%",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      borderBottom: "2px solid #333",
      paddingBottom: "5px",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Form Section */}
      <div style={styles.formContainer}>
        <h2 style={styles.sectionTitle}>Fill Your Details</h2>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={styles.input} placeholder="Full Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} placeholder="Email" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} placeholder="Phone" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} style={styles.input} placeholder="Address" />
        <textarea name="skills" value={formData.skills} onChange={handleChange} style={styles.input} placeholder="Skills (comma-separated)"></textarea>
        <textarea name="experience" value={formData.experience} onChange={handleChange} style={styles.input} placeholder="Experience"></textarea>
        <textarea name="education" value={formData.education} onChange={handleChange} style={styles.input} placeholder="Education"></textarea>
      </div>

      {/* Resume Preview */}
      <div style={styles.resumeContainer}>
        <h1>{formData.fullName}</h1>
        <p>{formData.email} | {formData.phone}</p>
        <p>{formData.address}</p>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <p>{formData.skills}</p>
        <h2 style={styles.sectionTitle}>Work Experience</h2>
        <p>{formData.experience}</p>
        <h2 style={styles.sectionTitle}>Education</h2>
        <p>{formData.education}</p>
      </div>
    </div>
  );
};

export default Template1;
