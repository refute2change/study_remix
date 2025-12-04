import { Outlet } from "react-router";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <Outlet />
        </div>
    );
}