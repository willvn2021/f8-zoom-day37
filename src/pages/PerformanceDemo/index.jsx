import { useCallback, useState } from "react";
import styles from "./PerformanceDemo.module.scss";
import ActionButtons from "./components/ActionButtons";

import CounterDisplay from "./components/CounterDisplay";
import ExpensiveChild from "./components/ExpensiveChild";

// Component Cha sẽ quản lý toàn bộ trạng thái của con.
function PerformanceDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("User A");
    const [items, setItems] = useState([]);

    // Sử dụng useCallback để ghi nhớ hàm, tránh việc tạo lại hàm mới mỗi lần render.
    const handleIncrement = useCallback(() => {
        setCount((count) => count + 1);
    }, []); //Dependency [] rỗng không thay đổi hàm chỉ tạo 1 lần giữ luôn tham chiếu hàm.

    const handleChangeName = useCallback(() => {
        setName((prevName) => (prevName === "User A" ? "User B" : "User A"));
    }, []);

    const handleAddItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    console.log(
        "Rendering: PerformanceDemo (Component Cha Render lại toàn bộ trạng thái)"
    );

    return (
        <div className={styles.wrapper}>
            <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
                <p>Performance Demo: Trạng thái hiện tại App</p>
                <p>
                    <strong>Name: </strong>
                    {name}
                </p>
                <p>
                    <strong>Count: </strong>
                    {count}
                </p>
                {/* Child Component 1: Show Lượt đếm */}
                <CounterDisplay count={count} />
                {/* Child Component 2: */}
                <ActionButtons
                    onIncrement={handleIncrement}
                    onReset={handleReset}
                />

                <div style={{ marginTop: "10px" }}>
                    <button onClick={handleChangeName}>
                        Change Name (Chỉ App re-render)
                    </button>
                    <button onClick={handleAddItem}>
                        Add Item (App & ExpensiveChild (Logic nặng) re-render)
                    </button>
                </div>

                <hr />

                {/* Child Component 3: */}
                <ExpensiveChild items={items} />
            </div>
        </div>
    );
}

export default PerformanceDemo;
