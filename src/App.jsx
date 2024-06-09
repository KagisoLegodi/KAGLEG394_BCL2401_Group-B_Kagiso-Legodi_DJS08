import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetail from "./pages/VanDetail.jsx";
import Dashboard from "./components/Host/Dashboard.jsx"
import Income from "./components/Host/Income.jsx";
import Reviews from "./components/Host/Reviews.jsx";
import "./server.jsx";
import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./components/Host/HostVans.jsx";
import HostVanDetail from "./components/Host/HostVanDetail.jsx";
import HostVanInfo from "./components/Host/HostVanInfo.jsx";
import HostVanPricing from "./components/Host/HostVanPricing.jsx";
import HostVanPhotos from "./components/Host/HostVanPhotos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

           <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;