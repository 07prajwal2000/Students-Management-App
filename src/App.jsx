import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Student from './pages/student';
import ViewAll from './pages/viewAll';
import FindRank from "./pages/findRank";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewAll />}/>
        <Route path="/student" element={<Student />}/>
        <Route path="/viewall" element={<ViewAll />}/>
        <Route path="/rank" element={<FindRank />}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
