import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import TransportPage from "./pages/TransportPage";

// later: add '/' and conditional logic for logged-in users

const routes = [
    {
        path: '/', 
        element: <Home />,
    },
    {
        path: '/login', 
        element: <Home content={'login'} />,
    },
    {
        path: '/signup', 
        element: <Home content={'signup'} />,
    },
    {
        path: '/transport/:id',
        element: <TransportPage />,
    },
    {
        path: '/dashboard/transports',
        element: <Dashboard content={'Transports'} />,
    },
    {
        path: '/dashboard/account',
        element: <Dashboard content={'My Account'} />,
    },
    {
        path: '/dashboard/pets-saved',
        element: <Dashboard content={'Pets Saved'} />,
    }
];

export default routes;