import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "../../../src/index.css";

const Index = () => {
  const currentDate = new Date().toLocaleDateString("th-TH", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  // State to handle form data and image upload
  const [formData, setFormData] = useState({
    firstName: "นายอมร",
    lastName: "วงคำเหลา",
    email: "test01@test.com",
    phone: "+66 0855555555",
    region: "th",
    agentCode: "TOSSAGUN",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileImage(event.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your API call to update user data goes here
    console.log('User data submitted:', formData);
    // Example API call (uncomment and adjust as needed)
    /*
    try {
      const response = await fetch('http://your-api-url', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Handle response...
    } catch (error) {
      console.error('Error:', error);
    }
    */
    alert('User information updated successfully.');
  };

  return (
    <Box className="bg-gray-100 min-h-screen p-4 md:p-5">
      {/* Header Section */}
      <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-4 rounded-md mb-4">
        <Box className="flex items-center">
          <CalendarMonthIcon className="text-gray-500" />
          <Typography className="ml-2 text-lg font-medium">
            วันที่ {currentDate}
          </Typography>
        </Box>
      </Box>

      {/* Account Settings Section */}
      <Box className="p-5">
        <Box className="pt-5 pl-5">
          <Typography variant="h5" fontWeight="bold">
            การตั้งค่าบัญชี
          </Typography>
          <Box className="border border-gray-200"></Box>
        </Box>

        <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
          {/* Profile Image Upload */}
          <Box className="text-center mb-4">
            <div className="rounded-full bg-gray-300 w-24 h-24 mb-4 mx-auto flex items-center justify-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-full w-24 h-24"
                />
              ) : (
                <span className="text-gray-500">ไม่มีรูปภาพ</span>
              )}
            </div>
            <label
              htmlFor="imageUpload"
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              อัพโหลดรูปภาพ
            </label>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Box>

          {/* User Information Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* First Name */}
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />

              {/* Last Name */}
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Email */}
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />

              {/* Phone */}
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Region */}
              <TextField
                label="Region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />

              {/* Agent Code */}
              <TextField
                label="Agent Code"
                name="agentCode"
                value={formData.agentCode}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />
            </div>

            {/* Buttons for Editing and Saving */}
            <div className="flex justify-end mt-4">
              <Button
                onClick={toggleEdit}
                variant="contained"
                color="primary"
                className="ml-5"
              >
                {isEditing ? "แก้ไขข้อมูล" : "ยกเลิก"}
              </Button>
              {isEditing && (
                <Button type="submit" variant="contained" color="success">
                  บันทึกการเปลี่ยนแปลง
                </Button>
              )}
            </div>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
