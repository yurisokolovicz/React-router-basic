import { Link } from 'react-router-dom';
// We are using Link instead of NavLink because we don't need to highlight the active link in the navigation bar.

// In reality we would fetch the data from the backend, from some database. But for now we will just use a dummy data.

const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' }
];

const ProductsPage = () => {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map(prod => (
                    <li key={prod.id}>
                        <Link to={prod.id}>{prod.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductsPage;
