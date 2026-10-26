import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);
  if (isLoading) {
    return "Loading...";
  }

  if (user) {
    return (
      <div>
        <Navigate to={"/home"} />
       
      </div>
    );
  }

  return <Outlet />;
};

export default PublicProtected;
