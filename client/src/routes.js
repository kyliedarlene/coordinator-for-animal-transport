import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import TransportPage from "./pages/TransportPage";

// later: add '/' and conditional logic for logged-in users

const routes = [
    {
        path: '/login', 
        element: <LoginPage />,
    },
    {
        path: '/transport/:id',
        element: <TransportPage />,
    },
    {
        path: '/dashboard/transports',
        element: <Dashboard content={"TransportList"} />,
    },
    {
        path: '/dashboard/account',
        element: <Dashboard content={"ManageAccount"} />,
    },
    {
        path: '/dashboard/pets-saved',
        element: <Dashboard content={"PetsSaved"} />,
    }
];

export default routes;