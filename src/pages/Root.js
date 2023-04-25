import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import styles from './Root.module.css';

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main className={styles.content}>
                <Outlet /> {/* The Outlet marks the place where the child routes should be rendered. */}
            </main>
        </>
    );
};

export default RootLayout;
