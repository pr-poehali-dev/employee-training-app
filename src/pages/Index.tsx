import { LoginForm } from "@/components/auth/LoginForm";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { currentView, userRole, setUserRole, login } = useAuth();

  return currentView === "landing" ? (
    <LoginForm userRole={userRole} setUserRole={setUserRole} onLogin={login} />
  ) : (
    <Dashboard userRole={userRole} />
  );
};

export default Index;
