import React, { useMemo } from "react";

const ExpensiveChild = React.memo(({ items = [] }) => {
    console.log("Rendering: ExpensiveChild - Tiến trình tốn Memo");
    // Tính toán nặng: Render list items và tính tổng length của tất cả item names
    // useMemo sẽ cache kết quả và chỉ tính toán lại khi `items` thay đổi.
    const totalLength = useMemo(() => {
        console.log("...Đang tính toán nặng....");

        let result = "";
        items.forEach((item) => {
            // Giả lập tính toán nặng
            for (let i = 0; i < 1000000000; i++) {
                if (item.length > result.length) {
                    result = item;
                }
            }
        });

        return result;
    }, [items]);

    return (
        <div>
            <p>Component con ExpensiveChild - Render nặng.....</p>
            <p>
                Tổng đội dài items: <strong>{totalLength}</strong>
            </p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
});

ExpensiveChild.displayName = "ExpensiveChild";

export default ExpensiveChild;
