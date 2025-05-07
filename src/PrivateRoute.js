import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let value = localStorage.getItem('User');
    return value === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
