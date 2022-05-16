import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
    <Topbar/>
    <div className="container">
      <Sidebar/> 
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/users" element={<UserList/>}></Route>
        
        {/* <Route path="/user/:userId" element={<UserSin />}></Route>
        <Route path="/newUser" element={<NewUser />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/newproduct" element={<NewProduct />}></Route> */}
     </Routes>
     </div>
  </Router>
  );
}
export default App;
