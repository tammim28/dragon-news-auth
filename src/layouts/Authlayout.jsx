import { Outlet } from "react-router-dom";


const Authlayout = () => {
    return (
        <div>
            Auth layout
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;