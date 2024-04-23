import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import RepoDetails from "./pages/RepoDetails";
import { ReposProvider } from "./context/ReposContext";

function App() {
  return (
    <ReposProvider>
      <div className="App">
        <div className="content">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="resume" element={<Resume />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="/repo/:id" element={<RepoDetails />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </ReposProvider>
  );
}

export default App;
