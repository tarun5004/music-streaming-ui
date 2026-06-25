
import { RouterProvider, createBrowserRouter } from 'react-router'
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../../features/auth/ui/pages/LoginPage';
import RegisterPage from '../../features/auth/ui/pages/RegisterPage';
import DashboardLayout from '../layouts/DashboardLayout';
import HomePage from '../../features/dashboard/ui/pages/HomePage';
import SongDetailPage from '../../features/dashboard/ui/pages/SongDetailPage';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <LoginPage />
                },
                {
                    path: "/register",
                    element: <RegisterPage />
                }
            ]
        },
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "song/:songId",
                    element: <SongDetailPage />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
};

export default AppRoutes
