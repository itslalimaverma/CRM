// client/src/components/Login.js
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";  

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setError("Error signing in with Google. Please try again.");
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      <button className="login-button" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
      {error && <p className="login-error">{error}</p>}
    </div>
  );
};

export default Login;
