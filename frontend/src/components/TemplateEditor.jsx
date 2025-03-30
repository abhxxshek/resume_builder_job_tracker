import React, { useEffect, useState } from 'react';
import Resume from '../Templates/Template13';
import axiosInstance from '../../axiosInterceptor';

const TemplateEditor = () => {
  const [fetchedStyles, setFetchedStyles] = useState(null); // Initialize as null
  const [fontSize, setFontSize] = useState('16px');
  const [color, setColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [headingColor, setHeadingColor] = useState('#333333');

    useEffect(() => {
      const fetchStyles = async () => {
        try {
          const response = await axiosInstance.get("/user/savedStyle");
          setFetchedStyles(response.data);
          // console.log(response.data);
          
          setFontSize(response.data.fontSize)
          setColor(response.data.color)
          setFontFamily(response.data.fontFamily)
          setHeadingColor(response.data.headingColor)
        } catch (error) {
          console.error("Error fetching Styles:", error);
        }
      };
  
      fetchStyles();
    }, []);

  const handleStyleChange = (type, value) => {
    if (type === 'fontSize') setFontSize(value);
    if (type === 'color') setColor(value);
    if (type === 'fontFamily') setFontFamily(value);
    if (type === 'headingColor') setHeadingColor(value); 
  };

 
  const handleSave = () => {
    const updatedData = {
      fontSize, color, fontFamily, headingColor
    };
    axiosInstance.post('/admin/save-Style', updatedData)
      .then(response => {
        alert('Resume Template saved successfully!');
      })
      .catch(error => {
        console.error('Error saving resume:', error); 
        alert('Error saving resume!');
      });
  };

  return (
    <div style={{ display: 'flex', gap: '30px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      {/* Left Section: Resume */}
      <div style={{ width: '50%', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Resume
          fontSize={fontSize}
          color={color}
          fontFamily={fontFamily}
          headingColor={headingColor} 
        />
      </div>

      {/* Right Section:*/}
      <div style={{ width: '50%', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <h3 style={{ color: '#444', fontSize: '24px', marginBottom: '20px' }}>Edit Resume Styles</h3>

        {/* Font Size */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Font Size:</label>
          <input
            type="number"
            value={parseInt(fontSize)}
            onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
            min="10"
            max="30"
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>

        {/* Font Color */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Font Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => handleStyleChange('color', e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>

        {/* Font Family */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Font Family:</label>
          <select
            value={fontFamily}
            onChange={(e) => handleStyleChange('fontFamily', e.target.value)}
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            <option value="Arial, sans-serif">Arial</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Times New Roman, serif">Times New Roman</option>
          </select>
        </div>

        {/* Heading Color */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Heading Color:</label>
          <input
            type="color"
            value={headingColor}
            onChange={(e) => handleStyleChange('headingColor', e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            width: '100%',
            marginTop: '20px'
          }}
        >
          Save Resume
        </button>
      </div>
    </div>
  );
};

export default TemplateEditor;
