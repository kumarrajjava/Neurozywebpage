import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthModal.css";

const AuthModal = ({ close }) => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (!form.email || form.password.length < 6) {
      setError("Valid email & min 6 char password required");
      return;
    }
    localStorage.setItem("auth", "true");
    close();
    navigate("/dashboard");
  };

  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={submit}>
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        <p className="switch" onClick={() =>
          setMode(mode === "login" ? "signup" : "login")
        }>
          {mode === "login"
            ? "New user? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
