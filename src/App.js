import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar/Navbar';
import MyPortfolio from './Page/MyPortfolio/MyPortfolio';
import NotFound from './Page/Shared/NotFound/NotFound';
import Login from './Page/Login/Login';
import Registration from './Page/Login/Registration';
import Blogs from './Page/Blogs/Blogs';
import Footer from './Page/Shared/Footer/Footer';
import Products from './Page/Products/Products';
import RequireAuth from './Page/Login/RequireAuth';
import Dashboard from './Page/Dashboard/Dashboard';
import Reviews from './Page/Reviews/Reviews';
import MyOrders from './Page/Dashboard/MyOrders';
import MyProfile from './Page/Dashboard/MyProfile';
import AllUsers from './Page/Dashboard/AllUsers';
import AddProduct from './Page/Dashboard/AddProduct';
import ManageProduct from './Page/Dashboard/ManageProduct';
import Purchase from './Page/Products/Purchase';
import RequireAdmin from './Page/Login/RequireAdmin';

function App() {
  return (
    <div className=' lg:px-5 sm:px-5'>
      <Navbar></Navbar>
      <Routes>
        {/* open routs --- */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/review' element={<Reviews />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }></Route>

        {/* nested route */}
        <Route path='dashboard' element={<RequireAuth> <Dashboard />  </RequireAuth>}>
          {/* 1st main route a index hoy, onno sob a path hobe */}
          <Route index element={<MyOrders />}></Route>
          <Route path='myProfile' element={<MyProfile />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          }></Route>

          <Route path='addProduct' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          }></Route>

          <Route path='manageProduct' element={
            <RequireAdmin>
              <ManageProduct />
            </RequireAdmin>
          }></Route>

        </Route>
        <Route path='/purchase/:itemId' element={<RequireAuth> <Purchase /></RequireAuth>}></Route>



        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;