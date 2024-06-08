import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import VanDetail from "./pages/VanDetail.jsx"
import "./server.jsx"
import Layout from "./components/Layout.jsx"

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

  export default App;