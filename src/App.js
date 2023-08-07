
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import Dashborad from './components/Dashborad';
import Cart from './components/Cart';
import Layout from './components/Layout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route index element={<Dashborad></Dashborad>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
