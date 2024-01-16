
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../Layouts/Roots';
import Home from '../Pages/Home/Home';

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
                path: '/menu',
                element: <p>Menu here</p>
            }
        ]
    }
])

export default MainRouter;