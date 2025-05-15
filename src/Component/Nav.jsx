import React, { useState } from "react";
import { FaSearch, FaBook, FaClipboardList, FaUserGraduate, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", background: "#fff", color: "#333", boxShadow: "0px 4px 6px rgba(134, 123, 123, 0.1)" }}>
      {/* Logo */}
      <div>
        <img src="logo.png" alt="Logo" style={{ height: "50px", width: "150px" }} />
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "16px", fontWeight: "bold" }}>
        <a href="/courses" style={{ textDecoration: "none", color: "#333", display: "flex", alignItems: "center", gap: "5px" }}>
          <FaBook /> Courses
        </a>
        <a href="/assignments" style={{ textDecoration: "none", color: "#333", display: "flex", alignItems: "center", gap: "5px" }}>
          <FaClipboardList /> Assignments
        </a>
        <FaBell size={20} title="Notifications" />
      </div>

      {/* Search Bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "14px" }} />
        <FaSearch size={18} />
      </div>

      {/* Student Dashboard & Hover Profile Dropdown */}
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", fontWeight: "bold", fontSize: "16px", color: "#333", padding: "10px", borderRadius: "5px" }}>
          <FaUserGraduate size={20} /> Student Dashboard
        </div>
        {/* Dropdown Opens on Hover */}
        <div style={{ position: "absolute", top: "40px", right: "0", background: "#fff", padding: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "5px", display: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.style.display = "none")}>
          <a href="/profile" style={{ display: "flex", alignItems: "center", gap: "5px", color: "#333", textDecoration: "none" }}>
            <FaUser /> Profile
          </a>
          <a href="/settings" style={{ display: "flex", alignItems: "center", gap: "5px", color: "#333", textDecoration: "none", marginTop: "5px" }}>
            ⚙️ Settings
          </a>
        </div>
      </div>
    </nav>

    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* Header/Navbar */}
    

      {/* Hero Section */}
      <header style={{ padding: "50px", background: "orange", color: "#fff" }}>
        <h1>Welcome to Your Student Portal</h1>
        <p>Manage courses, assignments, and track your progress effortlessly.</p>
        <button style={{ padding: "10px 20px", fontSize: "18px", background: "#fff", color: "#007bff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section style={{ padding: "40px", display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "250px", textAlign: "center", padding: "20px", background: "#f8f9fa", borderRadius: "10px" }}>
          <h3>📚 Courses</h3>
          <p>Access all your enrolled courses easily.</p>
          <a href="/courses" style={{ textDecoration: "none", color: "#007bff" }}>View Courses</a>
        </div>
        <div style={{ width: "250px", textAlign: "center", padding: "20px", background: "#f8f9fa", borderRadius: "10px" }}>
          <h3>📝 Assignments</h3>
          <p>Submit and track assignments with deadlines.</p>
          <a href="/assignments" style={{ textDecoration: "none", color: "#007bff" }}>Check Assignments</a>
        </div>
        <div style={{ width: "250px", textAlign: "center", padding: "20px", background: "#f8f9fa", borderRadius: "10px" }}>
          <h3>👤 Profile</h3>
          <p>Update your personal information & settings.</p>
          <a href="/profile" style={{ textDecoration: "none", color: "#007bff" }}>Go to Profile</a>
        </div>
      </section>

      {/* Footer */}
      
    </div>
    </>
  );
};

export default Navbar;