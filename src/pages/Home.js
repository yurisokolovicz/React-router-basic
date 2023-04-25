import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <h>My Home Page</h>
            <p>
                Go to <Link to="/products">the list of products</Link>
            </p>
        </>
    );
};

export default Homepage;
