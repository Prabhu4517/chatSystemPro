import { Navigate } from "react-router-dom";

function Redirect() {
    return <Navigate to="/auth/login" />;
}
export default Redirect;

