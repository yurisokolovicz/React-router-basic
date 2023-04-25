import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import ProductsPage from './pages/Products';

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/products" element={<ProductsPage />} />
//     </Route>
// );

const router1 = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/products', element: <ProductsPage /> }
]);

// const router1 = createBrowserRouter(routeDefinitions);

function App() {
    return <RouterProvider router={router1} />;
}

export default App;
