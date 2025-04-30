import MinimalLayout from 'layout/MinimalLayout';
import Signin from 'views/auth/signin';

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/signin',
            element: <Signin />
        }
    ]
};

export default LoginRoutes;
