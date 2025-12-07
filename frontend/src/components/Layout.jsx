import Navbar from "./Navbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">{children}</main>
    </div>
  );
}
