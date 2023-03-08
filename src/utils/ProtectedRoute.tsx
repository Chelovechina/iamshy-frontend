import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children?: ReactNode;
}
const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const currentUser = true;

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children as JSX.Element;
};

export default ProtectedRoute;
