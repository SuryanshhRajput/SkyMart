import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Navbar from "../../shared/components/Navbar";

const MainProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);
  if (isLoading) {
    return "Loading...";
  }

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <div>
    
    <Navbar/>
    <Outlet/>
  </div>;
};

export default MainProtected;
