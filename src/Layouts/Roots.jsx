import { Outlet } from "react-router-dom";

const Roots = () => {
    return (
        <div>
            <p>head</p>
            <Outlet></Outlet>
            <p>footer</p>
        </div>
    );
};

export default Roots;