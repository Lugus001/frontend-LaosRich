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
    firstName: "นายอมร",
    lastName: "วงคำเหลา",
    email: "test01@test.com",
    phone: "+66 0855555555",
    region: "th",
    agentCode: "TOSSAGUN",
    address: "",
    province: "",
    district: "",
    postcode: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const initLongdoAddressForm = () => {
      const script1 = document.createElement("script");
      script1.src = "https://api.longdo.com/map/?key=fortestonlydonotuseinproduction!";
      script1.async = true;
      document.body.appendChild(script1);
  
      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.src = "https://api.longdo.com/address-form/js/addressform.js";
        script2.async = true;
        document.body.appendChild(script2);
  
        script2.onload = () => {
          if (window.longdo && window.longdo.Map) {
            window.myform = new window.longdo.AddressForm("form_div", {
              layout: window.longdo.AddressForm,
              showLabels: false,
              required: { poi: true },
              debugDiv: "debugoutput",
            });
            document.getElementById('form_div').classList.add('longdo-address-form');
          } else {
            console.error("Longdo Map is not ready.");
          }
        };
  
        script2.onerror = () => {
          console.error("Failed to load Longdo Address Form script.");
        };
      };
  
      script1.onerror = () => {
        console.error("Failed to load Longdo Map script.");
      };
    };
  
    initLongdoAddressForm();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
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

  {/* Longdo Address Form styled similarly */}
  <div id="form_div" className="longdo-address-form ">
  Loading Longdo Address Form...
 </div>


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
