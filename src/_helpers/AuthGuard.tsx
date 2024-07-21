import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

  const logged = user && user.admin;

  if (!logged) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
