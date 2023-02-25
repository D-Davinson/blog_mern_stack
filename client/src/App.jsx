import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/:id" element={<Post/>} />
          <Route path ="/search" element={<Search/>} />
          <Route path ="/add" element={<Add/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
