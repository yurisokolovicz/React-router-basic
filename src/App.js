import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home';
import ProductsPage from './pages/Products';

// We created the router object containing the path and the component to render when that path is active.
// The path is the part after the domain name.
// The information after the path is the component that will be rendered when that router is active.
// https://www.example.com/products - "products" is the path
// https://www.example.com/products/123 - "products/123" is the path
// https://www.example.com/ - "/" is also the path (the route for the home page)

const router1 = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/products', element: <ProductsPage /> }
]);

function App() {
    return <RouterProvider router={router1} />;
}

export default App;
