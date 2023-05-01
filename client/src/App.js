import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Main from "./components/nav/nav";
import Home from "./pages/home";
import Tours from "./pages/tours";
import Footer from "./components/footer/footer";
// import Register from "./pages/register";


function App() {
  return (
      <BrowserRouter>
      <Main />
        <Routes>
          <Route  path="/"   element={<Home/>} />
          {/* <Route  path="/register"   element={<Register/>} /> */}
          <Route  path="/tours"   element={<Tours/>} />
        </Routes>
      <Footer/>
      </BrowserRouter> 
  );
}

export default App;
