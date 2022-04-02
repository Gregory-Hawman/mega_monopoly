
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('token')
    console.log(auth)
    return auth ? children : <Navigate to='login' />
};

export default PrivateRoute;
