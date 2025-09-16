import { useEffect, useRef, useState } from "react";
import CustomInput from "../../components/CustomInput";
import styles from "./FocusDemo.module.scss";

function FocusDemo() {
    // 1. useRef để giữ giá trị ko cho re-render DOM
    const renderCount = useRef(0);

    // State quản lý các control của Input
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    // 2. useRef truy cập DOM qua component
    const inputRef1 = useRef();
    const inputRef2 = useRef();

    //Tăng biến đếm khi component re-render
    useEffect(() => {
        renderCount.current += 1;
    });

    // 3. Hàm xử lý Button
    const handleFocus1 = () => inputRef1.current?.focus();
    const handleFocus2 = () => inputRef2.current?.focus();

    const handleClear = () => {
        setValue1("");
        setValue2("");
        inputRef1.current?.focus(); //Trỏ đến input đầu khi clear
    };

    const handleGetValues = () => {
        const val1 = inputRef1.current?.getValue();
        const val2 = inputRef2.current?.getValue();
        alert(`Giá trị Input 1: ${val1}\nGiá trị Input 2: ${val2}`);
    };

    return (
        <div className={styles.wrapper}>
            <h1>Focus & Ref Demo</h1>
            <p>Component này đã re-Render: {renderCount.current} lần</p>
            <hr />

            <CustomInput
                ref={inputRef1}
                label="Input 1"
                placeholder="Nhập nội dung cho input 1..."
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
            />

            <CustomInput
                ref={inputRef2}
                label="Input 2"
                placeholder="Nhập nội dung cho input 2..."
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
            />

            <div className={styles.actions}>
                <button onClick={handleFocus1}>Focus Input 1</button>
                <button onClick={handleFocus2}>Focus Input 2</button>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleGetValues}>Get Values</button>
            </div>
        </div>
    );
}

export default FocusDemo;
