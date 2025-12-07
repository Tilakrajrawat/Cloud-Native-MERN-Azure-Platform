import { useAuth } from "../lib/auth.jsx";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome, <strong>{user?.name}</strong>.</p>
      <p>
        This app is designed as a <strong>cloud-native MERN</strong> project,
        with a structure ready for Azure App Service, Functions, and Cosmos DB.
      </p>
    </div>
  );
}
