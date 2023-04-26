import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('products');
    };

    return (
        <>
            <h>My Home Page</h>
            <p>
                Go to <Link to="products">the list of products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
};

export default Homepage;
