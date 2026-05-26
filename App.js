import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground"; 

function App() {
  return (
    <div className="App">
   
      <NeuralBackground />

      <Navbar />

      <div className="app-layout">
        <div className="app-content">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
