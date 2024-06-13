import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Stuff from "./pages/Stuff/Index";
import StuffCreate from "./pages/Stuff/Create";
import StuffEdit from "./pages/Stuff/Edit";
import Inbound from "./pages/Inbound/Index";
import InboundCreate from "./pages/Inbound/Create";
import User from "./pages/User/Index";
import UserCreate from "./pages/User/Create";
import StuffTrash from "./pages/Stuff/Trash";
import UserTrash from "./pages/User/Trash";
import Lending from "./pages/Lending/Index";
import InboundTrash from "./pages/Inbound/Trash";
import UserEdit from "./pages/User/Edit";
import LendingsCreate from "./pages/Lending/Create";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/stuff', element: <Stuff /> },
    { path: '/stuff/create', element: <StuffCreate /> },
    { path: '/stuff/edit/:id', element: <StuffEdit /> },
    { path: '/inbound', element: <Inbound /> },
    { path: '/inbound/create', element: <InboundCreate /> },
    { path: '/user', element: <User /> },
    { path: '/user/create', element: <UserCreate /> },
    { path: '/stuff/trash', element: <StuffTrash /> },
    { path: '/user/trash', element: <UserTrash /> },
    { path: '/lendings', element: <Lending /> },
    { path: '/inbound/trash', element: <InboundTrash /> },
    { path: '/user/edit/:id', element: <UserEdit /> },
    { path: '/lendings/create', element: <LendingsCreate /> },
])