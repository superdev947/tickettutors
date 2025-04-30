import MainLayout from 'layout/MainLayout';
import Dashboard from 'views/dashboard';
import Account from 'views/account';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/account',
            element: <Account />
        }
    ]
};

export default MainRoutes;
