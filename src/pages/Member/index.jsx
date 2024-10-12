import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography, useMediaQuery, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "../../../src/index.css";
import Header from "../../components/Header";
import MemberList from "../../components/MemberList";
import AddIcon from "@mui/icons-material/Add";

const Index = () => {
  const currentDate = new Date().toLocaleDateString("th-TH", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  // State to manage member information
  const [isEditing, setIsEditing] = useState(false);
  const [memberInfo, setMemberInfo] = useState({
    name: 'Username',
    lastName: 'LastName',
    tel: '0611234567',
    email: 'test01@gmail.com',
    region: 'TH',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Member Info:", memberInfo);
    setIsEditing(false); 
  };

  return (
    <Box className="p-5 bg-gray-100 min-h-screen">
      <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-4 rounded-md">
        <Box className="flex items-center">
          <CalendarMonthIcon className="text-gray-500" />
          <Typography className="ml-2 text-lg font-medium">
            วันที่ {currentDate}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="success"
          className="flex items-center"
          onClick={handleEditClick}
        >
          <AddIcon className="text-white" />
          <Typography className="text-white ml-2">แก้ไขสมาชิก</Typography>
        </Button>
      </Box>
      <Box className="p-5">
        <Box className="pt-5 pl-5">
          <Typography variant="h5" fontWeight="bold">
            สมาชิก
          </Typography>
          <Box className="border border-gray-200"></Box>
        </Box>
        <Box className="pt-5">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-5">
              <TextField
                label="First Name"
                name="name"
                value={memberInfo.name}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={memberInfo.lastName}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Phone"
                name="tel"
                value={memberInfo.tel}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Email"
                name="email"
                value={memberInfo.email}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Region"
                name="region"
                value={memberInfo.region}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>
          ) : (
            <MemberList
              number="1"
              name={memberInfo.name}
              lastName={memberInfo.lastName}
              tel={memberInfo.tel}
              email={memberInfo.email}
              region={memberInfo.region}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
