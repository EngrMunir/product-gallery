import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;