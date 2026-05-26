import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NeuralCursor from "./NeuralCursor";

const Layout = () => {
  return (
    <>
      <NeuralCursor />
      <Navbar />

      <div className="app-layout">
        <main className="app-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

