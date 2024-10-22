import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../../../src/index.css";

const Index = () => {
  const currentDate = new Date().toLocaleDateString("th-TH", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    agentCode: "",
    address: "",
    province: "",
    district: "",
    postcode: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://183.88.209.149:18899/laosruey/api/v1/me");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        
        // Set form data with the fetched user data
        const user = data.user;
        setFormData({
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          phone: `${user.phone_prefix} ${user.phone}`,
          region: user.region,
          agentCode: user.agent_code,
          address: "", // Adjust as necessary
          province: "", // Adjust as necessary
          district: "", // Adjust as necessary
          postcode: "", // Adjust as necessary
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('User data submitted:', formData);
    alert('User information updated successfully.');
    // Uncomment this part to implement the actual API call
    /*
    try {
      const response = await fetch('http://your-api-url', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      alert('User information updated successfully.');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error updating your information. Please try again.');
    }
    */
  };

  return (
    <Box className="bg-gray-100 min-h-screen p-4 md:p-5">
      <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-4 rounded-md mb-4">
        <Box className="flex items-center">
          <CalendarMonthIcon className="text-gray-500" />
          <Typography className="ml-2 text-lg font-medium">
            วันที่ {currentDate}
          </Typography>
        </Box>
      </Box>

      <Box className="p-5">
        <Box className="pt-5 pl-5">
          <Typography variant="h5" fontWeight="bold">
            การตั้งค่าบัญชี
          </Typography>
          <Box className="border border-gray-200"></Box>
        </Box>

        <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
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

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <TextField
                label="ชื่อ"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                label="นามสกุล"
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

              <TextField
                label="เบอร์โทร"
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
              <TextField
                label="สัญชาติ"
                name="region"
                value={formData.region}
                onChange={handleChange}
                disabled={!isEditing}
                variant="outlined"
                fullWidth
                required
              />

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

          
            <div className="flex justify-end mt-4">
              <Button
                onClick={toggleEdit}
                variant="contained"
                color="primary"
                className="ml-5"
              >
                {isEditing ? "ยกเลิก" : "แก้ไขข้อมูล"}
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
