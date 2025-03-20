import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserContext"; // Import UserContext

const LoginPage = () => {
  const navigate = useNavigate(); // Create instance of navigator
  const { setUser } = useUser(); // Retrieve setUser function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh

    try {
      console.log("Sending login request...");

      const response = await axios.post("http://localhost:5089/api/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);

      // Store the JWT token in local storage
      localStorage.setItem("token", response.data.token);

      // Fetch user details and store in UserContext
      const userResponse = await axios.get("http://localhost:5089/api/users/me", {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });

      setUser(userResponse.data); // Update user context with retrieved user data
      navigate("/home"); // Redirect user to HomePage
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        {errorMessage && <p style={styles.error}>{errorMessage}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.registerText}>
        Don't have an account? <a href="/register" style={styles.link}>Register here</a>
      </p>
    </div>
  );
};

// Inline styles for better layout and styling
const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: "350px",
      margin: "auto",
      padding: "20px",
      paddingRight: "25px", // Increased right padding
      textAlign: "center",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%", // Ensure form takes full width
      paddingRight: "20px", // Keep padding-right for spacing
      alignItems: "center", // Ensure all elements are centered
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      paddingRight: "10px", // Ensure spacing on right side
    },
    label: {
      fontSize: "14px",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      fontSize: "14px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
        width: "100%", // Ensure button matches input width
        backgroundColor: "#007bff",
        color: "white",
        padding: "12px", // Slightly increased padding for better spacing
        fontSize: "16px",
        fontWeight: "bold", // Make text more readable
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s",
        textAlign: "center",
        display: "block", // Ensure button takes the full line
    },
    error: {
      color: "red",
      fontSize: "14px",
    },
    registerText: {
      marginTop: "15px",
      fontSize: "14px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "bold",
    }
  };

export default LoginPage;
