import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserContext"; // Use of UserContext

const HomePage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  // Deprive access if there is no token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // LogOut function
  const handleLogout = () => {
    localStorage.removeItem("token"); //  Delete token
    setUser(null); // Clean user from Context
    navigate("/login"); 
  };

  return (
    <div style={styles.container}>
      <h2>Welcome {user?.email || "Guest"}!</h2>
      <p>You have successfully logged in!</p>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default HomePage;
