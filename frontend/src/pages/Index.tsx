
import { Navigate } from "react-router-dom";

// Redirect users from the index page to the home page
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
