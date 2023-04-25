import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet /> {/* The Outlet marks the place where the child routes should be rendered. */}
            </main>
        </>
    );
};

export default RootLayout;
