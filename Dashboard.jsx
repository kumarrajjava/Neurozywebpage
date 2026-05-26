import { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    purpose: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Profile saved successfully ✅");
  };

  return (
    <section className="page dashboard">
      <div className="dashboard-card">
        <h2>
          User <span>Dashboard</span>
        </h2>

        <form className="dashboard-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Phone</label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
            />
          </div>

          <div className="input-group">
            <label>Role</label>
            <input
              name="role"
              value={user.role}
              onChange={handleChange}
              placeholder="Your role"
            />
          </div>

          <div className="input-group">
            <label>Purpose</label>
            <textarea
              name="purpose"
              value={user.purpose}
              onChange={handleChange}
              placeholder="Why are you here?"
            />
          </div>

          <button type="submit" className="dashboard-btn">
            Save Profile
          </button>

          {status && <p className="status-text">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Dashboard;
