import { useEffect } from "react";
import { Navigate } from "react-router-dom"; // Add this import statement
import Cookies from "js-cookie";

const Logout = () => {

  useEffect(() => {
    Cookies.remove("user");
  }, []);

  return <Navigate to="/" />;
};

export default Logout;
