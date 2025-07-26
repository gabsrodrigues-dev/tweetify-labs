import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import { ToastContainer } from "react-toastify";
import TitleAndSubtitle from "./components/TitleAndSubtitle/TitleAndSubtitle";
import WorkspacePage from "./pages/workspace/workspace";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<> <TitleAndSubtitle title="Início" /> <HomePage /> </>} />
          <Route path="/workspace" element={<> <TitleAndSubtitle title="Workspace" /> <WorkspacePage /> </>} />
          {/* <Route
            path="/dashboard"
            element={
              <>
                <TitleAndSubtitle title="Início" />
                <Dashboard />
              </>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;