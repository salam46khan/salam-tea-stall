
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../Layouts/Roots';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <p>home</p>
            },
            {
                path: '/menu',
                element: <p>Menu here</p>
            }
        ]
    }
])

export default MainRouter;