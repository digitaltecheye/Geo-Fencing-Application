import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle, MapPin, ShieldCheck, BarChart3, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import poster from "../assets/Poster.png";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.jpg";
import screenshot3 from "../assets/screenshot3.jpg";
export default function MarkMeInLanding() {
  const arrScreenshots = [screenshot1, screenshot2, screenshot3];
  const navigation = useNavigate();
  const handleLoginAsEmployee =()=>{
      navigation("/employeeLogin");
  }
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Mark Me In
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              A Smart Geo-Fencing Attendance Solution for Modern Organizations.
              Ensure real-time location-based attendance tracking with accuracy,
              transparency, and security.
            </p>
            <div className="mt-8 flex gap-4">
              <button onClick={handleLoginAsEmployee} className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Login as Employee
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={poster}
            alt="Geo Attendance"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">About Digital Tech Eye</h2>
          <p className="mt-6 text-lg text-gray-600">
            Digital Tech Eye is a technology-driven company focused on building
            innovative digital solutions for government bodies, organizations,
            and enterprises. Mark Me In is our flagship geo-fencing attendance
            application designed to streamline workforce management with
            cutting-edge GPS tracking technology.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <MapPin size={40} />,
                title: "Geo-Fencing Enabled",
                desc: "Employees can mark attendance only within predefined boundaries.",
              },
              {
                icon: <ShieldCheck size={40} />,
                title: "Secure & Tamper Proof",
                desc: "Advanced validation prevents proxy attendance and misuse.",
              },
              {
                icon: <BarChart3 size={40} />,
                title: "Admin Dashboard",
                desc: "Real-time analytics, reports, and employee monitoring.",
              },
              {
                icon: <Smartphone size={40} />,
                title: "Mobile Friendly",
                desc: "Easy-to-use mobile interface for field staff and officers.",
              },
              {
                icon: <CheckCircle size={40} />,
                title: "Live Tracking",
                desc: "Monitor attendance records and movement logs instantly.",
              },
              {
                icon: <ShieldCheck size={40} />,
                title: "Role-Based Access",
                desc: "Custom permissions for Admin, Supervisor, and Staff.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-indigo-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Project Screenshots
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {arrScreenshots.map((item) => (
              <motion.img
                key={item}
                whileHover={{ scale: 1.05 }}
                src={`${item}`}
                alt="App Screenshot"
                className="rounded-2xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            How Mark Me In Works
          </h2>
          <p className="text-lg text-gray-600">
            1. Admin defines geo-boundaries for office or project sites. <br />
            2. Employees login via mobile app. <br />
            3. Attendance is marked only when inside approved geo-fence. <br />
            4. Real-time data syncs with central dashboard. <br />
            5. Reports and analytics available instantly.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Digitize Your Attendance System?
        </h2>
        <p className="mt-6 text-lg">
          Transform workforce monitoring with accurate geo-fencing technology.
        </p>
        <button className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
          Contact Us Today
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© {new Date().getFullYear()} Digital Tech Eye. All Rights Reserved.</p>
        
      </footer>
    </div>
  );
}
