import { useEffect, useState } from "react";
import UserProfile from "../../components/UserProfile";
import ProductList from "../../components/ProductList";

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(true);
    const [productsLoading, setProductsLoading] = useState(true);

    const fetchData = () => {
        setUserLoading(true);
        setProductsLoading(true);

        // Giả lập việc fetch data cho user từ API
        setTimeout(() => {
            setUserLoading(false);
        }, 2000);

        // Giả lập fetch data cho products, chậm hơn 1 giây
        setTimeout(() => {
            setProductsLoading(false);
        }, 3000);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Higher-Order Component (HOC) Demo</h1>
            <p>Demo logic loading tái sử dụng cho nhiều component khác nhau.</p>
            <button onClick={fetchData}>Tải lại dữ liệu</button>

            <hr style={{ margin: "20px 0" }} />
            <h2>User Profile (tải trong 2 giây)</h2>
            <UserProfile isLoading={userLoading} />
            <hr style={{ margin: "20px 0" }} />
            <h2>Product List (tải trong 3 giây)</h2>
            <ProductList isLoading={productsLoading} />
        </div>
    );
}

export default HOCDemo;
