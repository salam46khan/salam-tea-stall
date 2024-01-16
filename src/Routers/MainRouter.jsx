
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../Layouts/Roots';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default MainRouter;