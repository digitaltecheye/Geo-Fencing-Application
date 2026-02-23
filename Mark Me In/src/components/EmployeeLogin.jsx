import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Phone, Lock } from "lucide-react";
import Icon from "../assets/icon.png";
import axios from "axios";
import API_URL from "../config/ApiCall";
import { useNavigate } from "react-router-dom";
export default function EmployeeLoginPage() {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Replace with your backend API
      console.log("APICall URL:", formData);
      const response = await axios.post(`${API_URL.EMPLOYEE_LOGIN}`, formData);
      // Here we need to store the token and employee data in localStorage
      if(response.status === 200){
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("employee", JSON.stringify(response.data.employee));
        // Redirect to employee dashboard
        navigation("/employee/dashboard");
    }
   } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        {/*  Here we need to add the image as logo */}
        <img
          src={Icon}
          alt="Mark Me In Logo"
          className="w-24 h-30 mx-auto mb-6 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Mark Me In Employee Login
        </h2>
        <p className="text-center text-muted">Employee Attendance</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
              <Phone className="text-gray-400 mr-2" size={18} />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
              <Lock className="text-gray-400 mr-2" size={18} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          © {new Date().getFullYear()} Digital Tech Eye
        </p>
      </motion.div>
    </div>
  );
}