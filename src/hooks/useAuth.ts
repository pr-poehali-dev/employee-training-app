import { useState } from "react";
import { UserRole, ViewState } from "@/types";

export const useAuth = () => {
  const [currentView, setCurrentView] = useState<ViewState>("landing");
  const [userRole, setUserRole] = useState<UserRole>("employee");

  const login = () => {
    setCurrentView("dashboard");
  };

  const logout = () => {
    setCurrentView("landing");
  };

  return {
    currentView,
    userRole,
    setUserRole,
    login,
    logout,
  };
};
