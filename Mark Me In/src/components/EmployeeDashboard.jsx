import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../config/ApiCall";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem("employee")) || null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [locationError, setLocationError] = useState("");
  const [attendanceMessage, setAttendanceMessage] = useState("");
  const [isLoading , setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigation = useNavigate()
  useEffect(()=>{
    const fetchSubscriptionStatus = async () => {
        setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL.SUBSCRPTION}`, {   
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });  
         console.log("Subscription status:", response.data); 

        const subscriptionStatus = response.data?.hasSubscription && response.data?.status === "ACTIVE";
        setEmployee((prev) => ({ ...prev, subscriptionId: subscriptionStatus ? "ACTIVE" : null }));
      } catch (error) {
        console.error("Error fetching subscription status:", error);
      }
      finally{
        setIsLoading(false);
      }
    };
    if(employee){
      fetchSubscriptionStatus();
    }

  },[])
  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setLocationError("");
      },
      () => {
        setLocationError("Unable to retrieve location");
      }
    );
  };

 const markAttendance = async () => {
  if (!employee?.subscriptionId) {
    setAttendanceMessage(
      "You do not have an active subscription. Please use the mobile app to buy a subscription."
    );
    return;
  }

  try {
    setButtonDisabled(true);

    const response = await axios.post(
      API_URL.PUNCH_IN,
      {
        attendanceType: "OFFICE",
        latitude: lat,
        longitude: lng,
        selfieUrl: "http://example.com/selfie.jpg",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log("Attendance response:", response.data);

    if (response.data?.success || response.data.status === 200) {
      setAttendanceMessage("Attendance marked successfully!");
    }
  } catch (err) {
    
    setAttendanceMessage(
      err.response?.data?.message || err.message || "Error marking attendance"
    );
  } finally {
    setButtonDisabled(false);
  }
};

  if (!employee) return <p>Loading...</p>;
  if(isLoading) return <p>Loading subscription status...</p>;
  const hasActiveSubscription = !!employee.subscriptionId;
 
  return (
    <div style={styles.container}>
      <h2>Welcome, {employee.name}</h2>
        {/*  Here we need to add logout button */}
        <div style={{ position: "absolute", top: 20, right: 20 }}>
            <button onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("employee");
                navigation("/employeeLogin");
            }} style={{...styles.button, backgroundColor: "#dc3545"}}>
                Logout
            </button>
        </div>
      <div style={styles.card}>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Mobile:</strong> {employee.mobile}</p>
        <p>
          <strong>Subscription:</strong>{" "}
          <span style={{ color: hasActiveSubscription ? "green" : "red" }}>
            {hasActiveSubscription ? "Active" : "Inactive"}
          </span>
        </p>
      </div>

      <div style={styles.card}>
        <h3>Mark Attendance</h3>

        {!hasActiveSubscription && (
          <p style={{ color: "red" }}>
            You don't have an active subscription. Please use the mobile app to buy a subscription.
          </p>
        )}

        <button onClick={getLocation} style={styles.button}>
          Get Current Location
        </button>

        {lat && lng && (
          <p>
            Lat: {lat} <br />
            Lng: {lng}
          </p>
        )}

        <button
          onClick={markAttendance}
          disabled={!hasActiveSubscription || !lat}
          style={{
            ...styles.button,
            backgroundColor: hasActiveSubscription ? "#28a745" : "gray",
            cursor: hasActiveSubscription ? "pointer" : "not-allowed",
          }}
          
        >
          {buttonDisabled ? "Marking Attendance..." : "Mark Attendance"}
        </button>

        {attendanceMessage && <p style={{width :"100%" , border:"2px solid white" , background:"red", padding:10 , color:"white"}}>{attendanceMessage}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "500px",
    margin: "auto",
    fontFamily: "Arial",
    border: "2px solid #FFFFF",
    backgroundColor: "#93D4FE",
    marginTop: "50px",
    borderRadius: "10px",
  },
  card: {
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  button: {
    padding: "10px 15px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
  },
};

export default EmployeeDashboard;