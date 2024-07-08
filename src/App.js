import './App.css';
import Home from './componets/pages/home/Home';
import Blog from './componets/pages/blog/Blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route exact path="/" element={  <Home />}>
       
      </Route>
     
      <Route path="/blog" element={ <Blog />}>
       
      </Route>
      </Routes>
  </Router>
  );
}

export default App;
