import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Page404 from ".//Pages/Page404";
import NavBar from './Components/NavBar'
function App() {
  return (
<div className="h-[100vh] max-h-[250vh] overflow-x-hidden">
<NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="*" element={<Page404/>}/>
</Routes>
<Toaster/>
</div>
  );
}

export default App;
