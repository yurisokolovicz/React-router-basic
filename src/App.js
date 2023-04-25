import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// The RootLayout router acts as a parent route to the Homepage and ProductsPage routers and it also acts as a WRAPPER for the MainNavigation component.

const router1 = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/products', element: <ProductsPage /> }
        ]
    }
]);

// SO now we are rendering the RootLayout parent element in the top and then we are rendering the child elements of the RootLayout element in the bottom in the different pages (/ and /products). The RootLayout acts as a wrapper for the MainNavigation component (called at Root.js in the file of the RootLayout).

function App() {
    return <RouterProvider router={router1} />;
}

export default App;
