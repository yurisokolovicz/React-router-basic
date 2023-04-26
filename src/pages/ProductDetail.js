import { useParams } from 'react-router-dom';
// useParams is a React hook that allows us to extract dynamic params from the URL. So if we go to /products/1, then the product id will be 1. If we go to /products/2, then the product id will be 2. And so on. This is how we can make dynamic routes in React Router.

const ProductDetailPage = () => {
    const params = useParams();

    //params.productId; // This is how we can access the dynamic params from the URL.

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
        </>
    );
};

export default ProductDetailPage;

// With the Id of the product we can reach the backend and fetch the data of the product.
