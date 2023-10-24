import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePage from "./Pages/UpdatePage";
import Home from "./Pages/Home";
import ReadPage from "./Pages/ReadPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        
        <Route exact path="/read" element={<ReadPage />}>
        </Route>

        <Route exact path="/update" element={<UpdatePage />}>
        </Route>

        <Route exact path="/contact" element={<ContactPage />}>
        </Route>

        <Route exact path="/about" element={<AboutPage />}>
        </Route>
        
      </Routes>
      </div>
    </BrowserRouter>


    
    

    </>
  );
}

export default App;
