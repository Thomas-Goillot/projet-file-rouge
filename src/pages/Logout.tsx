import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface LogoutProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Logout: React.FC<LogoutProps> = ({ setIsLoggedIn }) => {
  useEffect(() => {
    Cookies.remove("user");
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return <Navigate to="/" />;
};

export default Logout;
