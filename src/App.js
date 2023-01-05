import "./App.css";
import Create from "./Components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Components/Update";
import Read from "./Components/Read";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Create />}>
        </Route>
        
        <Route exact path="/read" element={<Read />}>
        </Route>

        <Route exact path="/update" element={<Update />}>
        </Route>
        
      </Routes>
      </div>
    </BrowserRouter>


    
    

    </>
  );
}

export default App;
